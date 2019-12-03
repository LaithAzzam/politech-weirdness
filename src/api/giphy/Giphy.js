import Redux from '../redux'
import createApiAction from '../createApiAction'

const baseUrl = '//api.giphy.com/v1'
const prefix = 'GIPHY'
const GIPHY_API_KEY = '2f0HI5TP2i2qXHnhb6Z1VI3hugHCFAFT'

export default class Giphy {
  static translateGif = async (searchTerm, weirdness) => {
    const requestUrl = `${baseUrl}/gifs/translate?api_key=${GIPHY_API_KEY}&s=${searchTerm}&weirdness=${weirdness || 0}`

    const options = {
      method: 'GET',
      url: requestUrl,
      prefix,
      storeKey: ['images', searchTerm]
    }

    const action = await createApiAction(options)
    return Redux.dispatch(action)
  }
}
