import bcrypt from 'bcryptjs'

class Utils {
  async hashCopareSync (plainText, hash) {
    return bcrypt.compareSync(plainText, hash)
  }

  async hashPassword (password) {
    return bcrypt.hashSync(password, 8)
  }
}

export default new Utils()