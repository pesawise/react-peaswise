import React from 'react';
export function Button(props) {
    const { children, backgroundColor, color, style } = props;
    let _styles = style || {};
    // Override defauls
    if (backgroundColor)
        _styles.backgroundColor = backgroundColor;
    if (color)
        _styles.color = color;
    return (React.createElement("button", Object.assign({ style: _styles }, props), children));
}
//# sourceMappingURL=Button.js.map