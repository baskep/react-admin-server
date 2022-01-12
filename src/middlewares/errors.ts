
import { KoaMiddlewareInterface, Middleware } from 'routing-controllers'
import { ERRORS } from '../constants'
import { logger, responseUtil } from '../utils'

@Middleware({ type: 'before' })
export default class ErrorMiddleware implements KoaMiddlewareInterface {
  async use (ctx: any, next: (err?: any) => Promise<any>): Promise<any> {
    try {
      await next()
    } catch (error) {
      logger.error(ERRORS.UNKNOWN_ERROR.msg)
      return Promise.resolve(responseUtil.serverError(ctx, ERRORS.UNKNOWN_ERROR))
    }
  }
}
