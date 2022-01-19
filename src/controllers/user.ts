import { JsonController, Post, Req, UseBefore } from 'routing-controllers'
import { Request } from 'koa'
import _ from 'lodash'

import BaseController from './base'
import { LoginMiddleware } from '../middlewares'
import { UserModel } from '../models'
import { ERRORS } from '../constants'

type resultType = {
  data: any,
  msg: string,
  status: number
}

@JsonController()
class ProductController extends BaseController {
  @UseBefore(LoginMiddleware)
  @Post('/user/info')
  async updateUserInfo(@Req() request: Request): Promise <resultType> {
    try {
      const { username, mobile, password } = request.body
      const res = await UserModel.updateUserInfo(username, password, Number(mobile))
      if (res === 1) {
        return this.showResult({}, '修改账号信息成功')
      }
      return this.showError({}, ERRORS.UPDATE_NO_DATA_ERROR)
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }

}

export default ProductController
