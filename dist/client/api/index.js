"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
class AuthSDK {
    static async login(body) {
        return fetch(`${common_1.BASE_URL}`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        }).then((res) => res.json());
    }
}
exports.default = AuthSDK;
//# sourceMappingURL=index.js.map