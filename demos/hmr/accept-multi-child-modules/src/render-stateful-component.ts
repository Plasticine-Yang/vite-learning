let timer: ReturnType<typeof setInterval> | undefined

if (import.meta.hot) {
  import.meta.hot.dispose(() => {
    if (timer) {
      clearInterval(timer)
    }
  })
}

export function renderStatefulComponent() {
  const $statefulComponentContainer = document.querySelector<HTMLDivElement>('#stateful-component-container')!

  $statefulComponentContainer.innerHTML = `
    <div id="counter">count not started</div>
  `

  useUpdateCounterEffect()
}

function useUpdateCounterEffect() {
  let count = 0
  const $counter = document.querySelector<HTMLDivElement>('#counter')!

  timer = setInterval(() => {
    $counter.innerText = `count: ${count}`
    count++
  }, 1000)
}
