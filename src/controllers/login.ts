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
  async login(@Req() req: Request): Promise <resultType> {
    try {
      const { username, password } = req.body
      const detail = await LoginModel.getUser(username)

      const id = _.get(detail, 'id')
      const auth = _.get(detail, 'auth')
      const mobile = _.get(detail, 'mobile')
      const status = _.get(detail, 'status')
      const isMatch = _.get(detail, 'password') === password

      if (status) {
        if (isMatch) {
          const secretOrPrivateKey = TOKEN.TOKEN_KEY
          const token = JWT.sign({
            username: username,
          }, secretOrPrivateKey, {
            expiresIn: '2days',
          })
          return this.showResult({ id,token, auth, username, mobile }, '登录成功')
        }
        return this.showError({}, ERRORS.LOGIN_ERROR)
      }
      return this.showError({}, ERRORS.AUTH_INVALID_USER)
    } catch (e) {
      return this.showError({}, ERRORS.INTERNAL_ERROR)
    }
  }
}

export default LoginController