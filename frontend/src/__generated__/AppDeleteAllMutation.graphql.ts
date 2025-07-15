/**
 * @generated SignedSource<<78e7a5445722c4a5c045b79e3f139f19>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from 'relay-runtime';
export type AppDeleteAllMutation$variables = Record<PropertyKey, never>;
export type AppDeleteAllMutation$data = {
  readonly deleteAllTodoItem: boolean;
};
export type AppDeleteAllMutation = {
  response: AppDeleteAllMutation$data;
  variables: AppDeleteAllMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "deleteAllTodoItem",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppDeleteAllMutation",
    "selections": (v0/*: any*/),
    "type": "RootMutationType",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppDeleteAllMutation",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "7f0dec01b824f5a2910294b93e2dab4f",
    "id": null,
    "metadata": {},
    "name": "AppDeleteAllMutation",
    "operationKind": "mutation",
    "text": "mutation AppDeleteAllMutation {\n  deleteAllTodoItem\n}\n"
  }
};
})();

(node as any).hash = "a2c4dccbc049bca6fb6e59454bedc64d";

export default node;
