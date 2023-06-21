"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Button = void 0;
const react_1 = __importDefault(require("react"));
function Button(props) {
    const { children, backgroundColor, color, style } = props;
    let _styles = style || {};
    // Override defauls
    if (backgroundColor)
        _styles.backgroundColor = backgroundColor;
    if (color)
        _styles.color = color;
    return (react_1.default.createElement("button", Object.assign({ style: _styles }, props), children));
}
exports.Button = Button;
//# sourceMappingURL=Button.js.map