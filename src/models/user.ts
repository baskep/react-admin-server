import { nanoid } from 'nanoid'

import Base from './base'
import Knex from '../library/mysql'
class UserModel extends Base {
  static TABLE_NAME = 'user'

  static async queryOne (username: string) {
    const query = Knex.queryBuilder().from(this.TABLE_NAME)
    if (username) {
      query.where('username', username)
    }
    const detail = await query.select('*').first()
      .catch(this.dbSelectErrorHandler)
    return detail
  }

  static async addUserInfo (
    mobile: number,
    auth: number,
    username: string,
    password: string,
  ) {
    const id = nanoid()
    const insertId = await Knex.queryBuilder()
      .insert({
        id: id.replace(/_/g, ''),
        mobile,
        username,
        password,
        auth,
        status: 1,
      })
      .into(this.TABLE_NAME)
      .catch(this.dbInsertErrorHandler)

    return insertId
  }

  static async updateUserInfo (
    id: string,
    mobile: number,
    auth: number,
    username: string,
    password?: string,
  ) {
    let updateObject = {
      username,
      mobile,
      auth,
    }
    if (password) {
      updateObject = Object.assign(updateObject, { password })
    }
    const count = await Knex.queryBuilder()
      .update(updateObject)
      .from(this.TABLE_NAME)
      .where('id', id)
      .catch(this.dbUpdateErrorHandler)
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
    const query = Knex.queryBuilder()
      .select('id', 'username', 'mobile', 'status', 'auth')
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
      .catch(this.dbUpdateErrorHandler)
    return count
  }

}

export default UserModel
