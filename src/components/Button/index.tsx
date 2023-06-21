import React from 'react';

export interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
    backgroundColor?: string;
    color?: string;
}

export function Button(props: ButtonProps) {
    const { children, backgroundColor, color, style } = props;

    let _styles: React.CSSProperties = style || {};

    // Override defauls
    if (backgroundColor) _styles.backgroundColor = backgroundColor;
    if (color) _styles.color = color;

    return (
        <button style={_styles} {...props}>
            {children}
        </button>
    );
}
