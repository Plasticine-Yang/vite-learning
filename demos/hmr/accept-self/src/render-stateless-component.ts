if (import.meta.hot) {
  import.meta.hot.accept((module) => module?.renderStatelessComponent())
}

export function renderStatelessComponent() {
  const $stateLessComponentContainer = document.querySelector<HTMLDivElement>('#stateless-component-container')!

  $stateLessComponentContainer.innerHTML = `
    <h1>A demo for vite hmr</h1>
    <p>hello: Plasticine</p>
  `
}
