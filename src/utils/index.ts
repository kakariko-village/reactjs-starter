const getElementById = (id: string) => document.getElementById(id)!


const setLocalStorage = (key: string, value: any): void => {
  value &&
    localStorage.setItem(
      `${key}`,
      typeof value === 'string' ? value : JSON.stringify(value),
    )
}

const getLocalStorage = <T>(key: string, isParse = false): T => {
  const cache = localStorage.getItem(`${key}`) ?? ''
  return isParse ? JSON.parse(cache) : cache
}

const setSessionStorage = (key: string, value: any): void => {
  value &&
    sessionStorage.setItem(
      `${key}`,
      typeof value === 'string' ? value : JSON.stringify(value),
    )
}

const getSessionStorage = <T>(key: string, isParse = false): T => {
  const cache = sessionStorage.getItem(`${key}`) ?? ''
  return isParse ? JSON.parse(cache) : cache
}

export { getElementById, setLocalStorage, getLocalStorage, setSessionStorage, getSessionStorage }
