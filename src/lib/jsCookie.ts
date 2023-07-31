import Cookie from 'js-cookie'

type OptionsProps = {
  expires: number
}

export function createCookie(name: string, value: any, options: OptionsProps) {
  Cookie.set(name, value, options)
}

export function getCookie(name: string) {
  return Cookie.get(name)
}
