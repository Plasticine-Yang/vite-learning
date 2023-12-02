// react 和 react-dom 从 CDN 拉取
import { render } from 'https://cdn.skypack.dev/react-dom'
import React from 'https://cdn.skypack.dev/react'

let Greet = () => <h1>Hello, ESBuild!</h1>

render(<Greet />, document.getElementById('root'))
