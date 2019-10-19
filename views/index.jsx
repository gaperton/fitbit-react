import React from 'react'
import { render, loop, Rotate } from './tools';

const App = () => (
    <svg>
        <section x="50%" y="50%">
            { loop( 1, 12, i =>
                <Mark angle={ i * 30 } length={10} />
            )}

            { loop( 1, 60, i =>
                i % 5 &&
                    <Mark angle={ i * 6 } length={5} />
            )}

            <Hand id="hours" size={0.5} />
            <Hand id="minutes" size={0.8} />
        </section>
    </svg>
)

const Mark = ({ angle, length }) =>
    <Rotate angle={ angle }>
        <line x1="0" x2="0" y1="-50%" y2={`-50%+${ length }`} fill="#A0A0A0" />
    </Rotate>

const Hand = ({ id, size }) =>
    <Rotate id={id}>
        <line x1="0" x2="0" y1={ -50 * size + "%" } y2={ 10 * size + '%' } fill="white" />
    </Rotate>

render( App );