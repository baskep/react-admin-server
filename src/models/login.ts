import Base from './base'
import Knex from '../library/mysql'

type userReturnType = {
  id: string,
  username: string,
  password: string,
  auth: number
}

class LoginModel extends Base {
  static TABLE_NAME = 'user'

  static async getUser(username: string): Promise<userReturnType> {
    const detail = await Knex(this.TABLE_NAME)
      .select('*')
      .where('username', username)
      .first()
      .catch(this.dbSelectErrorHandler)
    return detail
  }

}

export default LoginModel
