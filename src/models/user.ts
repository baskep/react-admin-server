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

  static async getUserList (
    pageNum: number,
    pageSize: number,
    mobile?: number,
    status?: number,
    username?: string, 
  ) {
    const offset = (pageNum - 1) * pageSize
    const realOffset = offset > 0 ? offset : 0
    const query =  Knex.queryBuilder()
      .select('id', 'username', 'mobile', 'status')
      .from(this.TABLE_NAME)
    if (username) {
      query.where('username', 'like', `%${username}%`)
    }
    if (mobile) {
      query.where('mobile', 'like', `%${mobile}%`)
    }
    if (status || status === 0) {
      query.where('status', status)
    }
    const result = await query.limit(pageSize)
      .offset(realOffset)
      .catch(this.dbSelectErrorHandler)

    const total = result.length

    return { result, total } 
  }

  static async setUserStatus (
    status: number,
    selectedRowKeys: string[],
  ) {

    const count = await Knex.queryBuilder()
      .update({
        status,
      })
      .from(this.TABLE_NAME)
      .where('id', 'in', selectedRowKeys)
      .catch(this.dbSelectErrorHandler)
    return count
  }
  
}

export default UserModel
