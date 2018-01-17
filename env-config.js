const prod = process.env.NODE_ENV === 'production'

const api_url = prod ? process.env.WEBSERVICE_BASE_URL : 'http://localhost:4000'

let favicon

if (!prod) {
  favicon = 'favicon-dev.png'
} else if (process.env.IS_STAGING === 'true') {
  favicon = 'favicon-staging.png'
} else {
  favicon ='favicon.png'
}

module.exports = {
  'process.env.NODE_ENV': prod ? 'production' : 'development',
  'process.env.REACT_APP_API_URL': api_url,
  'process.env.REACT_APP_CLOUDINARY_BASE_URL': 'https://res.cloudinary.com/emcasa/image/upload',
  'process.env.REACT_APP_FAVICON': favicon
}
