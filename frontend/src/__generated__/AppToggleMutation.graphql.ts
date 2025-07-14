/**
 * @generated SignedSource<<d7173c376dbfe96c0e58384a9c0b1e84>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppToggleMutation$variables = {
  id: string;
};
export type AppToggleMutation$data = {
  readonly toggleTodoItem: {
    readonly content: string;
    readonly id: string;
    readonly isCompleted: boolean;
  };
};
export type AppToggleMutation = {
  response: AppToggleMutation$data;
  variables: AppToggleMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "concreteType": "TodoItem",
    "kind": "LinkedField",
    "name": "toggleTodoItem",
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
    "name": "AppToggleMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppToggleMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "a791061e382e531c5047794a570891e4",
    "id": null,
    "metadata": {},
    "name": "AppToggleMutation",
    "operationKind": "mutation",
    "text": "mutation AppToggleMutation(\n  $id: String!\n) {\n  toggleTodoItem(id: $id) {\n    id\n    content\n    isCompleted\n  }\n}\n"
  }
};
})();

(node as any).hash = "244fd2451a2ac925eb9bd8b167ddf871";

export default node;
