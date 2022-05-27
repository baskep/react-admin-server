import { ERRORS } from '../constants'

const toResponse = ( error: any) => {
  return {
    data: {},
    ...error,
  }
}
class Response {
  static serverError (ctx: any, error?: any): any {
    ctx.body = toResponse(error)
    return ctx.body
  }
}

export default Response
