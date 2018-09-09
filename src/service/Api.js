import Service from './Service'
import { promise } from './helper'

/**
 * @type {Api}
 */
export default class Api extends Service {
  /**
   * @param {Object} options
   * @param {string} resource
   */
  constructor(options, resource) {
    super(options)
    this.resource = resource
  }

  /**
   * @param {Object} record
   */
  getAll() {
    return promise({ status: 'READ_ALL' })
  }
  
  /**
   * @param {Object} record
   */
  create(record) {
    return promise({ status: 'CREATE' })
  }

  /**
   * @param {string} id
   */
  read(id) {
    return promise([{ status: 'READ' }])
  }

  /**
   * @param {Object} record
   */
  update(record) {
    return promise({ status: 'UPDATE' })
  }

  /**
   * @param {Object} record
   */
  destroy(record) {
    return promise({ status: 'DESTROY' })
  }
}