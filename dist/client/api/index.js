"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = void 0;
const common_1 = require("../common");
const getUser = async () => {
    return fetch(`${common_1.BASE_URL}`).then((res) => res.json());
};
exports.getUser = getUser;
//# sourceMappingURL=index.js.map