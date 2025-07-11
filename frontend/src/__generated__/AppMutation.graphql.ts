/**
 * @generated SignedSource<<24e262c6ae49c5af1db5cd6bde463742>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppMutation$variables = {
  content: string;
};
export type AppMutation$data = {
  readonly createTodoItem: boolean;
};
export type AppMutation = {
  response: AppMutation$data;
  variables: AppMutation$variables;
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
    "kind": "ScalarField",
    "name": "createTodoItem",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "35114d7b8644084bdeaa4613e805837d",
    "id": null,
    "metadata": {},
    "name": "AppMutation",
    "operationKind": "mutation",
    "text": "mutation AppMutation(\n  $content: String!\n) {\n  createTodoItem(content: $content)\n}\n"
  }
};
})();

(node as any).hash = "673edb6ae44fe3b6a3ce9c4181aff27f";

export default node;
