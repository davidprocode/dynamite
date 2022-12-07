module.exports = function Token ({ email, password }) {
  if (email === 'any_email@mail.com' && password === 'any_password') {
    return 'valid_token'
  }
}
