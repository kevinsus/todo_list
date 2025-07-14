/**
 * @generated SignedSource<<308cb1d01bbdbe96225999f1ab19935e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppEditMutation$variables = {
  content: string;
  id: string;
};
export type AppEditMutation$data = {
  readonly updateTodoItem: {
    readonly content: string;
    readonly id: string;
    readonly isCompleted: boolean;
  };
};
export type AppEditMutation = {
  response: AppEditMutation$data;
  variables: AppEditMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "content"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "id"
},
v2 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      },
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "TodoItem",
    "kind": "LinkedField",
    "name": "updateTodoItem",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "content",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "isCompleted",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppEditMutation",
    "selections": (v2/*: any*/),
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "AppEditMutation",
    "selections": (v2/*: any*/)
  },
  "params": {
    "cacheID": "f77dcbea5c6291edded1be305941d45e",
    "id": null,
    "metadata": {},
    "name": "AppEditMutation",
    "operationKind": "mutation",
    "text": "mutation AppEditMutation(\n  $id: String!\n  $content: String!\n) {\n  updateTodoItem(id: $id, content: $content) {\n    id\n    content\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "d3298659ef2e6a58ee5cbf9b26bb9a22";

export default node;
