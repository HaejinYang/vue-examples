import { onMounted, onUnmounted, ref } from 'vue'
import { useEventListenr } from './useEventListenr'

export function useMouse() {
  const x = ref(0)
  const y = ref(0)

  function update(event) {
    x.value = event.pageX
    y.value = event.pageY
  }

  useEventListenr(window, 'mousemove', update)

  return { x, y }
}
