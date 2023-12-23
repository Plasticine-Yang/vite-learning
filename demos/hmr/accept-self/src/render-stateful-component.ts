export function renderStatefulComponent() {
  const $statefulComponentContainer = document.querySelector<HTMLDivElement>('#stateful-component-container')!

  $statefulComponentContainer.innerHTML = `
    <div id="counter">count not start</div>
  `

  useUpdateCounterEffect()
}

function useUpdateCounterEffect() {
  let count = 0
  const $counter = document.querySelector<HTMLDivElement>('#counter')!

  setInterval(() => {
    $counter.innerText = `count: ${count}`
    count++
  }, 1000)
}
