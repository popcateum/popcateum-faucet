"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
class Home extends react_1.Component {
    render() {
        return jsx_runtime_1.jsxs(jsx_runtime_1.Fragment, { children: [jsx_runtime_1.jsx("main", { children: "Vector Finance" }, void 0), sessionStorage.__spa_path && jsx_runtime_1.jsx(react_router_dom_1.Redirect, { to: sessionStorage.__spa_path }, void 0)] }, void 0);
    }
    componentDidMount() {
        sessionStorage.removeItem("__spa_path");
    }
}
exports.default = Home;
//# sourceMappingURL=Home.js.map