import { JsonController, Get, Req, UseBefore } from 'routing-controllers'
import { Request } from 'koa'
import _ from 'lodash'

import BaseController from './base'
import { LoginMiddleware } from '../middlewares'
import { ProductModel } from '../models'
import { ERRORS } from '../constants'

type resultType = {
  data: any,
  msg: string,
  status: number
}

@JsonController()
class ProductController extends BaseController {
  @UseBefore(LoginMiddleware)
  @Get('/list')
  async getList (@Req() request: Request): Promise<resultType> {

    const { pageNo = '0', pageSize = '10' } = request.query as any
    const currentPageNo = parseInt(pageNo)
    const currentPageSize = parseInt(pageSize)
    const { result } = await ProductModel.getList(currentPageNo, currentPageSize)
    const { total } = await ProductModel.getList(1, 1000)
    if (_.isArray(result)) {
      return this.showResult({ result, total }, '', 200)
    }
    return this.showError({}, ERRORS.INTERNAL_ERROR)
  }

}

export default ProductController
