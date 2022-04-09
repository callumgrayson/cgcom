export const getStored = (key) => {
  return JSON.parse(localStorage.getItem(key))
}

export const setStored = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data))
}
