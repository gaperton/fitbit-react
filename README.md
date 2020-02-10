# React Views for Fitbit OS

Fitbit OS project starter with React components as SVG view engine.

Instead of manually writing SVG in `index.gui`, you create React components in `views` folder and `index.gui` will be generated out of them during the build.

Get rid of annoying copy-pase, make your markup clean, and concentrate on SVG drawing. Finally.

```javascript
import React from 'react'
import { render, loop, GRotate } from './tools';

const App = () => (
    <svg>
        <section x="50%" y="50%">
            { forRange( 1, 12, i =>
                <Mark angle={ i * 30 } length={10} />
            )}

            { forRange( 1, 60, i =>
                i % 5 &&
                    <Mark angle={ i * 6 } length={5} />
            )}

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
```

## Subview Pattern

Subviews are used to encapsulate the repetitive markup pattern and JS logic. To create the subview, you need to do two things.

Wrap the SVG markup in the React component:

```javascript
export const GRotate = ({ angle, children, ...rest }) =>
    <g transform={`rotate(${ angle })`} {...rest}>
        { children }
    </g>

...
    <GRotate id="something" angle={30}>
        ...
    </GRotate>
```

Then, if your "view" needs to be updated, you may create the JS controller. The controller is the function returning another function encapsulating the UI update logic.

```javascript
const GRotate = id => {
    // Get the reference to the element
    const el = document.getElementById( id );
    
    // Create the UI update function.
    return angle => {
        el.groupTransform.rotate.angle = angle;
    }
}

// Create the controller.
const rotate = GRotate( 'something' );
...

// Rotate the element.
rotate( 60 );
```

Please note, that controllers operate on a raw SVG and are unaware of the React conponents.
This controller can operate on any `g` element; naming the controllers in the same way as React components is just a convention.

## API

There are some helper functions defined in `tools.js`.

#### forRange( fromIndex, toIndex, i => <Something/> )

Iterate in a range of integers.

#### render( <App/> )

Renders the `index.gui` file.

#### GRotate

`<GRotate angle={45}>`

Wrapper around `<g transform="rotate(angle)" />`. All other props are passed through.

`GRotate` element has the simple controller to be used from JS:

    // Create GRotate controller.
    import { GRotate } from './tools'

    const rotateMinutes = GRotate( 'minutes' );
    ...

    // Update rotation angle
    rotateMinutes( 60 );

## Application structure

- `views/` - React views being compiled to `resources/index.gui` during the build.
- `app/` - JS view controllers, handling the user interaction and sensors.
- `resources/` - static resources.

