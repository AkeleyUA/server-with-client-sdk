"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("../common");
class AuthSDK {
    static async login(body) {
        try {
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
                return data;
            }
            else {
                const { message } = await res.json();
                throw new Error(message);
            }
        }
        catch (err) {
            throw new Error(err.message);
        }
    }
}
exports.default = AuthSDK;
//# sourceMappingURL=index.js.map