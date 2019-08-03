export let API_BASE_URL = 'https://heavy-workplace.herokuapp.com/'
if (process.env.NODE_ENV === 'development') {
  API_BASE_URL = 'http://localhost:8000' 
} else {
  API_BASE_URL = `${window.location.protocol}//${window.location.host}`
}
