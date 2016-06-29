import './theme/styles'
//import notie from 'notie'
const notie = {}
const notice = {
  _alert(type, message) {
    notie.alert(type, message, 3)
  },
  success(message) {
    this._alert(1, message)
  },
  warning(message) {
    this._alert(2, message)
  },
  error(message) {
    this._alert(3, message)
  },
  info(message) {
    this._alert(4, message)
  }
}

export default notice
