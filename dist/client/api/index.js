"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
class AuthSDK {
    static async login(body) {
        return new Promise(async (resolve, reject) => {
            const res = await fetch(`${common_1.BASE_URL}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(body),
            });
            if (res.ok) {
                const data = await res.json();
                resolve(data);
            }
            else {
                const { message } = await res.json();
                reject(message);
            }
        });
    }
}
exports.default = AuthSDK;
//# sourceMappingURL=index.js.map