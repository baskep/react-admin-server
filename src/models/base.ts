class Base {
  static TABLE_NAME = ''
  static TABLE_COLUMN: Array<string> = []

  // 默认数据库插入错误处理逻辑
  static dbInsertErrorHandler (e: Error): string {
    const message = e.message
    console.error('insert 失败', message)
    return ''
  }

  // 默认数据库错误处理逻辑
  static dbSelectErrorHandler (e: Error): [] {
    const message = e.message
    console.error('select 异常', message)
    return []
  }

  // 默认数据库错误处理逻辑
  static dbUpdateErrorHandler (e: Error): [] {
    const message = e.message
    console.error('update 失败', message)
    return []
  }

  // 默认数据库错误处理逻辑
  static dbDeleteErrorHandler (e: Error): [] {
    const message = e.message
    console.error('delete 失败', message)
    return []
  }
}

export default Base
