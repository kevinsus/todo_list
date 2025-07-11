/**
 * @generated SignedSource<<87977cbdc4f2ec155644245200506f3b>>
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
  readonly createTodoItem: boolean;
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
    "cacheID": "710a7142bc2a1f6b0b3e30cc69a5f773",
    "id": null,
    "metadata": {},
    "name": "AppCreateMutation",
    "operationKind": "mutation",
    "text": "mutation AppCreateMutation(\n  $content: String!\n) {\n  createTodoItem(content: $content)\n}\n"
  }
};
})();

(node as any).hash = "e6268569fe83c562ae20a501eb4a1927";

export default node;
