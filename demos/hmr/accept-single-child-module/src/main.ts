import { renderStatefulComponent } from './render-stateful-component'
import { renderStatelessComponent } from './render-stateless-component'
import './style.css'

if (import.meta.hot) {
  import.meta.hot.accept('./render-stateless-component.ts', (module) => {
    module?.renderStatelessComponent()
  })
}

renderStatelessComponent()
renderStatefulComponent()
