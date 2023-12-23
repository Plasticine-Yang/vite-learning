import { renderStatefulComponent } from './render-stateful-component'
import { renderStatelessComponent } from './render-stateless-component'
import './style.css'

if (import.meta.hot) {
  import.meta.hot.accept(['./render-stateless-component.ts', './render-stateful-component.ts'], (modules) => {
    const [statelessComponentModule, statefulComponentModule] = modules

    if (statelessComponentModule) {
      statelessComponentModule.renderStatelessComponent()
    }

    if (statefulComponentModule) {
      statefulComponentModule.renderStatefulComponent()
    }
  })
}

renderStatelessComponent()
renderStatefulComponent()
