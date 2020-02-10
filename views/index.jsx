import React from 'react'
import { render, forRange, GRotate } from './tools';

const App = () => (
    <svg>
        <section x="50%" y="50%">
            <section width="95%" height="95%">
            { forRange( 1, 12, i =>
                <Mark angle={ i * 30 } length={10} />
            )}

            { forRange( 1, 60, i =>
                i % 5 &&
                    <Mark angle={ i * 6 } length={5} />
            )}
            </section>

            <Hand id="hours" size={0.5} />
            <Hand id="minutes" size={0.8} />
        </section>
    </svg>
)

const Mark = ({ angle, length }) =>
    <GRotate angle={ angle }>
        <line x1="0" x2="0" y1="-50%" y2={`-50%+${ length }`} fill="#A0A0A0" />
    </GRotate>

const Hand = ({ id, size }) =>
    <GRotate id={id}>
        <line x1="0" x2="0" y1={ -50 * size + "%" } y2={ 10 * size + '%' } fill="white" />
    </GRotate>

render( App );