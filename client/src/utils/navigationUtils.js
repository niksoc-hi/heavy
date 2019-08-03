import { history } from '../routes/index'

export const navigateToUrl = url => {
  history.push(url)
}
export const pop = () => {
  history.goBack()
}
