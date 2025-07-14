/**
 * @generated SignedSource<<ac94eb9d6e58e250078a5f0463b42fcb>>
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
  readonly updateTodoItem: boolean;
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
    "kind": "ScalarField",
    "name": "updateTodoItem",
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
    "cacheID": "6f78438313d1f24835b7a953562503ac",
    "id": null,
    "metadata": {},
    "name": "AppEditMutation",
    "operationKind": "mutation",
    "text": "mutation AppEditMutation(\n  $id: String!\n  $content: String!\n) {\n  updateTodoItem(id: $id, content: $content)\n}\n"
  }
};
})();

(node as any).hash = "2ee6db96b425f2490ffc04b58662151a";

export default node;
