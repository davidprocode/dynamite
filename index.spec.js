const { UserFactory } = require('./index')
const MissingParamError = require('./MissingParamError')

describe('User Tests', () => {
  test('Should Return an Error if email is not provided ', () => {
    const props = {
      password: 'any_password'
    }
    const user = UserFactory(props)
    expect(user).toEqual(new MissingParamError('email'))
  })

  test('Should Return an Error if password is not provided ', () => {
    const props = {
      email: 'any_email@mail.com'
    }
    const user = UserFactory(props)
    expect(user).toEqual(new MissingParamError('password'))
  })
})
