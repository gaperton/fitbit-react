# React Views for Fitbit OS

Fitbit OS project starter with React components as SVG view engine.

Instead of manually writing SVG in `index.gui`, you create React components in `views` folder and `index.gui` will be generated out of them during the build.

Get rid of annoying copy-pase and concentrate on SVG drawing.

```javascript
import React from 'react'
import { render, loop } from './tools';

const App = () => (
    <svg>
        <section x="50%" y="50%">
            { loop( 1, 12, i =>
                <Mark angle={ i * 30 } length="10" />
            )}

            { loop( 1, 60, i =>
                i % 5 &&
                    <Mark angle={ i * 6 } length="5" />
            )}
        </section>
    </svg>
)

const Mark = ({ angle, length }) =>
    <g transform={`rotate(${ angle })`}>
        <line x1="0" x2="0" y1="-50%" y2={`-50%+${ length }`} fill="#A0A0A0" />
    </g>

render( App );
```

## API

#### loop( fromIndex, toIndex, i => <Something/> )

Iterate in a range of integers.

#### render( <App/> )

Renders the `index.gui` file.

#### <Rotate angle={45}>

Wrapper around <g transform="rotate(angle)" />. All other props are passed through.

## Application structure

- `views/` - React views being compiled to `resources/index.gui` during the build.
- `app/` - JS view controllers, handling the user interaction and sensors.
- `resources/` - static resources.

