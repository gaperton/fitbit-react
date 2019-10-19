import React from 'react'
import ReactDOMServer from 'react-dom/server'
import { writeFileSync } from 'fs'

export function render( Component ){
    writeFileSync( './resources/index.gui', ReactDOMServer.renderToStaticMarkup( <Component /> ) );
}

export function loop( from, to, a_step, a_fun ){
    const fun = a_fun || a_step,
        step = a_fun ? a_step : 1;

    const res = [];

    for( let i = from; i <= to; i += step ){
        const element = fun( i );
        element && res.push( element );
    }

    return res;
}

export const Rotate = ({ angle, children, ...rest }) =>
    angle ? 
        <g transform={`rotate(${ angle })`} {...rest}>
            { children }
        </g>
    :
        <g {...rest}>
            { children }
        </g>