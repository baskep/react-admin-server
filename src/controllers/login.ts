import JWT from 'jsonwebtoken'
import { JsonController, Req, Post } from 'routing-controllers'
import { Request } from 'koa'
import _ from 'lodash'

import BaseController from './base'
import { LoginModel } from '../models'
import { ERRORS, TOKEN } from '../constants'

type resultType = {
  data: any,
  msg: string,
  status: number
}

@JsonController()
class LoginController extends BaseController {
  // 登录
  @Post('/login')
  async login(@Req() request: Request): Promise < resultType > {
    try {
      const { username, password } = request.body
      const detail = await LoginModel.getUser(username)

      const auth = _.get(detail, 'auth')
      const isMatch = _.get(detail, 'password') === password

      if (isMatch) {
        const secretOrPrivateKey = TOKEN.TOKEN_KEY
        const token = JWT.sign({
          name: username
        }, secretOrPrivateKey, {
          expiresIn: '2days'
        })
        return this.showResult({ token, auth }, '登录成功')
      }
      return this.showError({}, ERRORS.LOGIN_ERROR)
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }
}

export default LoginController