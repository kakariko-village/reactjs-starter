export const USER_TOKEN_KEY = 'userToken'
export const getUserToken = (token = USER_TOKEN_KEY) => localStorage.getItem(token)
const userToken = getUserToken()

export const authenticate = (config: any) => {
  // const token = getUserToken()
  // if (!token) return config
  console.log(config)
  const updatedConfig = {
    ...config,
    headers: {
      ...config.headers,
      // authorization: `Bearer ${userToken}`,
    },
  }

  return updatedConfig
}
