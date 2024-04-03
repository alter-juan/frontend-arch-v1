import {
  ensureIsValidUsername,
  ensureIsValidEmail,
  ensureUserIsValid,
  User
} from '../../models/entity/user.entity'


describe('[Entity] Given User entity and validators', () => {
  
  describe('When username is valid ensureIsValidUsername returns true', () => {
    const usernameValid = 'testUsername123';
    it('Then it should return true', () => {
      expect(ensureIsValidUsername(usernameValid)).toBeTruthy();
    })
  })

  describe('When username is invalid ensureIsValidUsername returns false', () => {
    const usernameInvalid = 'testUsername#123';
    it('Then it should return false', () => {
      expect(ensureIsValidUsername(usernameInvalid)).toBeFalsy();
    })
  })

  describe('When email is valid ensureIsValidEmail returns true', () => {
    const emailValid = 'testEmail@yopmail.com';
    it('Then it should return true', () => {
      expect(ensureIsValidEmail(emailValid)).toBeTruthy();
    })
  })

  describe('When email is invalid ensureIsValidEmail returns false', () => {
    const emailInvalid = 'testEmail#yopmail.com';
    it('Then it should return false', () => {
      expect(ensureIsValidEmail(emailInvalid)).toBeFalsy();
    })
  })

  describe('When user is valid ensureUserIsValid returns true', () => {
    const userValid = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'alternova@yopmail.com',
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
    }
    it('Then it should return true', () => {
      expect(ensureUserIsValid(userValid)).toBeTruthy();
    })
  })

  describe('When user is invalid ensureUserIsValid returns false', () => {
    const userInvalid = {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret#@',
      email: 'alter@nov@a@yopmail.com',
      phone: '1-770-736-8031 x56442',
    }
    it('Then it should return false', () => {
      expect(ensureUserIsValid(userInvalid as User)).toBeFalsy();
    })
  })
})
