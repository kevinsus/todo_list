/**
 * @generated SignedSource<<6ae660d975279f23565ca2d59b602505>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppCreateMutation$variables = {
  content: string;
};
export type AppCreateMutation$data = {
  readonly createTodoItem: {
    readonly content: string;
    readonly id: string;
    readonly isCompleted: boolean;
  };
};
export type AppCreateMutation = {
  response: AppCreateMutation$data;
  variables: AppCreateMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "content"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "content",
        "variableName": "content"
      }
    ],
    "concreteType": "TodoItem",
    "kind": "LinkedField",
    "name": "createTodoItem",
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppCreateMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppCreateMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "3f555ee896d547b65bbda9fdde264509",
    "id": null,
    "metadata": {},
    "name": "AppCreateMutation",
    "operationKind": "mutation",
    "text": "mutation AppCreateMutation(\n  $content: String!\n) {\n  createTodoItem(content: $content) {\n    id\n    content\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "f83c814a28c2f764d0067551b26270e4";

export default node;
