const MissingParamError = require('./MissingParamError')

function UserFactory (props) {
  const { email, password } = props
  if (!email) {
    return new MissingParamError('email')
  }
  if (!password) {
    return new MissingParamError('password')
  }
  return {
    email, password
  }
}
module.exports = { UserFactory }
