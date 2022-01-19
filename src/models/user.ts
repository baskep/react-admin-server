import Base from './base'
import Knex from '../library/mysql'

class UserModel extends Base {
  static TABLE_NAME = 'user'

  static async updateUserInfo (
    username: string, 
    password: string, 
    mobile: number,
  ) {
    const count = await Knex.queryBuilder()
      .update({
        password,
        mobile,
      })
      .from(this.TABLE_NAME)
      .where('username', username)
      .catch(this.dbSelectErrorHandler)
    return count
  }
}

export default UserModel
