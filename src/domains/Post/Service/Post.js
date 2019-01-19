import Api from './../../../service/Api'
import { http } from './../../../service/helper'

export default class Product extends Api {
  /**
   * @param {*} options
   */
  constructor(options) {
    super(options, '/api/v1/market/products')
  }

  /**
   * @param {string} id
   */
  getAllVila() {
    return http.get('/vila')
  }

  getAllMedium() {
    return http.get('/medium/iagoangelimc')
  }
}