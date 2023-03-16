export const handleKeyDown = (e: KeyboardEvent, setKeys: any) => {
  if (e.code === "KeyW") {
    setKeys((keys: any) => ({ ...keys, w: true }))
  }
  if (e.code === "KeyA") {
    setKeys((keys: any) => ({ ...keys, a: true }))
  }
  if (e.code === "KeyS") {
    setKeys((keys: any) => ({ ...keys, s: true }))
  }
  if (e.code === "KeyD") {
    setKeys((keys: any) => ({ ...keys, d: true }))
  }
  if (e.code === "Space") {
    setKeys((keys: any) => ({ ...keys, space: true }))
  }
}

export const handleKeyUp = (e: KeyboardEvent, setKeys: any) => {
  if (e.code === "KeyW") {
    setKeys((keys: any) => ({ ...keys, w: false }))
  }
  if (e.code === "KeyA") {
    setKeys((keys: any) => ({ ...keys, a: false }))
  }
  if (e.code === "KeyS") {
    setKeys((keys: any) => ({ ...keys, s: false }))
  }
  if (e.code === "KeyD") {
    setKeys((keys: any) => ({ ...keys, d: false }))
  }
  if (e.code === "Space") {
    setKeys((keys: any) => ({ ...keys, space: false }))
  }
}