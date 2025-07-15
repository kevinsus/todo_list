# Main file of graphql schema
# Write everything in elixir because this program will use elixir macros and convert to become graphql schema

alias TodoList.Todos

defmodule TodoListWeb.Api.Schema do
  use Absinthe.Schema

  # object :content_todo do
    # field :content_string, non_null(:string)
    # field :due_date, non_null(:string)
  # end

  object :todo_item do
    field :id, non_null(:string)
    # field :content, non_null(:content_todo) do
    #   resolve (fn item,_,_ ->
    #     {:ok, %{content_string: item.content, due_date: item.content}}
    #   end)
    # end
    field :content, non_null(:string)
    field :is_completed, non_null(:boolean) do
      resolve (fn item, _, _ ->
        case item.completed_at do
          nil -> {:ok, false}
          _ -> {:ok, true}
        end
      end)
    end
  end

  query do
    field :hello, :string do
      resolve (fn _,_ ->
        {:ok, "Hello world!"}
      end)
    end

    field :todo_items, list_of(:todo_item) do
      resolve (fn _,_ ->
        {:ok, Todos.list_items()}
      end)
    end
  end

  mutation do
    # Creating todo item
    field :create_todo_item, non_null(:todo_item) do
      arg :content, non_null(:string)

      resolve (fn item, _ ->
        case Todos.create_item(%{content: item.content}) do
          {:ok, item} -> {:ok, item}
          _ -> {:error, "error! unable to create todo item"}
        end
      end)
    end

    # TODO: Deleting todo item
    field :delete_todo_item, non_null(:boolean) do
      arg :id, non_null(:string)

      # get the item from id, then delete the item using the item
      resolve (fn item, _ ->
        case Todos.get_item!(item.id) do
          # Using the get_item, we can get the item and then delete it
          %Todos.Item{} = todo_item ->
            case Todos.delete_item(todo_item) do
              {:ok, _} -> {:ok, true}
              _ -> {:ok, false}
            end
          _ -> {:ok, false}
        end
      end)
    end

    # TODO: Updating todo item's content
    field :update_todo_item, non_null(:todo_item) do
      arg :id, non_null(:string)
      arg :content, non_null(:string)

      resolve(fn item, _ ->
        case Todos.get_item!(item.id) do
          %Todos.Item{} = todo_item ->
            case Todos.update_item(todo_item, %{content: item.content}) do
              {:ok, item_response} -> {:ok, item_response}
              _ -> {:error, "error! unable to update todo item"}
            end
          _ -> {:error, "error! unable items can be found using the id"}
        end
      end)
    end

    @doc """
    Updating todo item's completion

    Need: non null Id (integer)
    Two cases:
      - completed_at has time -> remove the time (set to nil)
      - completed_at is nil -> add the current time
    """

    field :toggle_todo_item, non_null(:todo_item) do
      arg :id, non_null(:string)

      resolve (fn item,_ ->
        case Todos.toggle_item_by_id(item.id) do
          {:ok, item_response} -> {:ok, item_response}
          _ -> {:error, "error! unable to toggle items"}
        end
      end)
    end
  end
end
