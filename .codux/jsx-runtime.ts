import * as React from 'react';
import * as ReactDevRuntime from 'react/jsx-dev-runtime';

const isBrowser = typeof window !== 'undefined';
const isObjectLike = (value: unknown) => typeof value === 'object' && value !== null;

const propsToSource = new WeakMap<object, ReactDevRuntime.JSXSource>();

const jsxDEVWithSource: typeof ReactDevRuntime.jsxDEV = (type, props, key, isStatic, source, self) => {
    // props = props || {};
    // (props as any).dataCoduxSource = JSON.stringify(source);
    const reactElement = ReactDevRuntime.jsxDEV(type, props, key, isStatic, source, self);
    if (source && isObjectLike(reactElement.props)) {
        propsToSource.set(reactElement.props, source);
    }
    return reactElement;
};

const createElementWithSource = function createElementWithSource(
    type: React.ElementType,
    props?: unknown,
    ...children: React.ReactNode[]
): React.ReactElement {
    const reactElement = React.createElement(type, props, ...children) as React.ReactElement & {
        _source?: ReactDevRuntime.JSXSource;
    };
    if (reactElement._source && isObjectLike(reactElement.props)) {
        propsToSource.set(reactElement.props, reactElement?._source);
    }
    return reactElement;
} as typeof React.createElement;

// set on window for later inspection
if (isBrowser) {
    window.__propsToSource = propsToSource;
}

declare global {
    interface Window {
        __propsToSource: typeof propsToSource;
    }
}

export { Fragment, jsx, jsxs, type JSX } from 'react/jsx-runtime';
export const jsxDEV: typeof ReactDevRuntime.jsxDEV = isBrowser ? jsxDEVWithSource : ReactDevRuntime.jsxDEV;
export const createElement: typeof React.createElement = isBrowser ? createElementWithSource : React.createElement;
