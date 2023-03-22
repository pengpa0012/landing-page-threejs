const keys = ["w", "a", "s", "d", "space", " "]
export const handleKeyDown = (e: KeyboardEvent, setKeys: any) => {
  if(keys.includes(e.key.toLocaleLowerCase())) {
    setKeys((keys: any) => ({ ...keys, [e.key.toLocaleLowerCase() == " " ? "space" : e.key.toLocaleLowerCase()]: true }))
  }
}

export const handleKeyUp = (e: KeyboardEvent, setKeys: any) => {
  if(keys.includes(e.key.toLocaleLowerCase())) {
    setKeys((keys: any) => ({ ...keys, [e.key.toLocaleLowerCase() == " " ? "space" : e.key.toLocaleLowerCase()]: false }))
  }
}