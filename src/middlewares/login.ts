import JWT from 'jsonwebtoken'
import { KoaMiddlewareInterface } from 'routing-controllers'
import { ERRORS, TOKEN } from '../constants'
import { logger, responseUtil } from '../utils'

export default class Login implements KoaMiddlewareInterface {
  async use (ctx: any, next: () => Promise<any>): Promise<any> {
    try {
      const customAuth = ctx.request.header['authorization'] || ''
      await JWT.verify(customAuth, TOKEN.TOKEN_KEY)
      await next()
    } catch (error) {
      logger.error(ERRORS.AUTH_TIMEOUT.msg)
      return Promise.resolve(responseUtil.serverError(ctx, ERRORS.AUTH_TIMEOUT))
    }
  }
}
