/**
 * @file 基于 axios 的 RESTful HTTP 简单封装。
 * @author 赵金添 <729234283@qq.com>
 */

import axios from 'axios'

/**
 * @class REST 接口请求
 */
export default class REST {
  /**
   * 构造函数
   */
  constructor() {
    // 接口基础地址
    this.baseURL = ''
    // 接口版本
    this.version = ''
    // 请求路劲
    this.path = ''
    // headers
    this.headers = {}
  }

  /**
   * 请求
   * @param {string} method - 请求方式
   * @param {object} options - 选项
   * @return {object}
   */
  _request(method = 'GET', options = {}) {
    let url = this.version ? `/${this.version}/${this.path}` : `/${this.path}`
    const headers = Object.keys(this.headers) ? {headers: this.headers} : {}

    // GET
    if (options.params) {
      url = url + this._objToUrl(options.params)
    }

    return axios({
      ...headers,
      method: method,
      baseURL: this.baseURL,
      url: url,
      data: options.data || {}
    })
  }

  /**
   * 对象转 URL
   * @param {object} obj - 待转化对象
   * @return {string}
   */
  _objToUrl(obj) {
    if (!obj || !Object.keys(obj).length) {
      return ''
    }

    return '?' + Object.keys(obj).map((key) => {
        return `${key}=${encodeURIComponent(obj[key])}`
      }).join('&')
  }

  /**
   * 附加路劲
   * @param {string} path - 路劲
   */
  addPath(path = '') {
    this.path = this.path + path

    return this
  }

  /**
   * 添加 headers
   * @param {object} headers - headers
   */
  addHeaders(headers) {
    this.headers = {
      ...this.headers,
      ...headers
    }

    return this
  }

  /**
   * path 参数替换
   * @param {object} options - path 参数列表
   */
  replace(options = {}) {
    Object.keys(options).forEach((key) => {
      this.path = this.path.replace(new RegExp('{' + key + '}', 'img'), options[key])
    })

    return this
  }

  /**
   * GET
   * @param {object} options - 选项
   * @returns {object}
   */
  GET(options = {}) {
    return this._request('GET', options)
  }

  /**
   * DELETE
   * @param {object} options - 选项
   * @returns {object}
   */
  DELETE(options = {}) {
    return this._request('DELETE', options)
  }

  /**
   * POST
   * @param {object} options - 选项
   * @returns {object}
   */
  POST(options = {}) {
    return this._request('POST', options)
  }

  /**
   * PATCH
   * @param {object} options - 选项
   * @returns {object}
   */
  PATCH(options = {}) {
    return this._request('PATCH', options)
  }
}
