"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
class AuthSDK {
    static async getUser() {
        return fetch(`${common_1.BASE_URL}`).then((res) => res.json());
    }
}
exports.default = AuthSDK;
//# sourceMappingURL=index.js.map