import Base from './base'
import Knex from '../library/mysql'

class ProductModel extends Base {
  static TABLE_NAME = 'product'

  static async getList (pageNo: number, pageSize: number): Promise<{ result: string[]; total: number }> {
    let offset = (pageNo - 1) * pageSize
    offset = offset > 0 ? offset : 0
    const query = Knex.queryBuilder()
      .select('*')
      .from(this.TABLE_NAME)
      .limit(pageSize)
      .offset(offset)
      .catch(this.dbSelectErrorHandler)

    const result = await query
    const total = result.length

    return { result, total }
  }
}

export default ProductModel
