type resultType = {
  data: any,
  msg: string,
  status: number
}

class BaseController {
  protected showResult (data: any, currentMessage?: string, currentStatus?: number): resultType {
    const msg = currentMessage || '操作成功'
    const status = currentStatus || 200
    return {
      data,
      msg,
      status,
    }
  }

  protected showError (data: any, error: any): resultType {
    const msg = error.msg || '操作失败'
    const status = error.status || 500
    return this.showResult(
      data,
      msg,
      status,
    )
  }

  protected showCustomError (data: any, msg: string, status: number): resultType {
    return this.showResult(
      data,
      msg,
      status,
    )
  }
}

export default BaseController
