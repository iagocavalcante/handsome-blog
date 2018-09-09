import axios from 'axios'
/**
 * @type {Function}
 */
export const http = axios.create({
  baseURL: 'https://api-postagens.herokuapp.com/api'
})

export const httpVila = axios.create({
  baseURL: 'http://viladosilicio.com.br/wp-json/wp/v2/'
})