/**
 * @generated SignedSource<<373a5ad1026b40f25d18393d1e2b369b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppDeleteMutation$variables = {
  id: string;
};
export type AppDeleteMutation$data = {
  readonly deleteTodoItem: boolean;
};
export type AppDeleteMutation = {
  response: AppDeleteMutation$data;
  variables: AppDeleteMutation$variables;
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
    "kind": "ScalarField",
    "name": "deleteTodoItem",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppDeleteMutation",
    "selections": (v1/*: any*/),
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppDeleteMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f1ade5be63ab2bccff5e1ada60d00d19",
    "id": null,
    "metadata": {},
    "name": "AppDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation AppDeleteMutation(\n  $id: String!\n) {\n  deleteTodoItem(id: $id)\n}\n"
  }
};
})();

(node as any).hash = "7fe5345fce49436eca77976a1d0d636b";

export default node;
