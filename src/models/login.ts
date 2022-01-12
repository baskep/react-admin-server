import Base from './base'
import Knex from '../library/mysql'

type userReturnType = {
  id: string,
  name: string,
  password: string,
  auth: number
}

class LoginModel extends Base {
  static TABLE_NAME = 'user'

  static async getUser(userName: string): Promise<userReturnType> {
    const detail = await Knex(this.TABLE_NAME)
      .select('*')
      .where('name', userName)
      .first()
      .catch(this.dbSelectErrorHandler)
    return detail
  }

}

export default LoginModel