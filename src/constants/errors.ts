// 请求时的状态码
const LOGIN_ERROR = {
  status: 100,
  msg: '用户名或密码错误',
}

const CREATED = {
  status: 201,
  msg: '请求已经被成功处理',
}

const ACCEPTED = {
  status: 202,
  msg: '服务端尚未进行处理',
}

const NO_CONTENT = {
  status: 204,
  msg: '无内容返回',
}

// 重定向
const MOVED_PERMANENTLY = {
  status: 301,
  msg: '资源已重定向',
}

const MOVED_TEMPORARY = {
  status: 302,
  msg: '资源已重定向',
}

const NOT_MODIFIED = {
  status: 304,
  msg: '使用缓存资源',
}

// 客户端请求错误
const AUTH_REQUIRED = {
  status: 403,
  msg: '获取登录信息错误',
}

const AUTH_TIMEOUT = {
  status: 403,
  msg: '登录过时',
}

const UNKNOWN_ENDPOINT = {
  status: 404,
  msg: '没有找到相应的请求',
}

const UNKNOWN_RESOURCE = {
  status: 404,
  msg: '没有找到相应的资源',
}

const CONFLICT = {
  status: 409,
  msg: '请求冲突',
}

const REQUEST_ENTITY_TOO_LARGE = {
  status: 413,
  msg: '请求实体过大',
}

const UNSUPPORTED_MEDIA_TYPE = {
  status: 415,
  msg: '不支持该请求的媒体类型',
}

const INVALID_REQUEST_BODY_FORMAT = {
  status: 422,
  msg: '请求的数据格式错误',
}

const INVALID_REQUEST = {
  status: 422,
  msg: '无效的参数',
}

const TOO_MANY_REQUESTS = {
  status: 429,
  msg: '过多的请求',
}

// 服务端错误
const INTERNAL_ERROR = {
  status: 500,
  msg: '服务器内部错误',
}

const UNKNOWN_ERROR = {
  status: 500,
  msg: '服务器出现未知错误',
}

// redis错误
const REDIS_CONNECT = {
  status: 1003,
  msg: 'redis连接失败',
}
const REDIS_DISCONNECT = {
  status: 1004,
  msg: 'redis取消连接',
}
const REDIS_SET = {
  status: 1005,
  msg: 'redis注入错误',
}
const REDIS_GET = {
  status: 1006,
  msg: 'redis获取数据错误',
}

export default {
  LOGIN_ERROR,
  CREATED,
  ACCEPTED,
  NO_CONTENT,
  MOVED_PERMANENTLY,
  MOVED_TEMPORARY,
  NOT_MODIFIED,
  AUTH_REQUIRED,
  AUTH_TIMEOUT,
  UNKNOWN_ENDPOINT,
  UNKNOWN_RESOURCE,
  CONFLICT,
  REQUEST_ENTITY_TOO_LARGE,
  UNSUPPORTED_MEDIA_TYPE,
  INVALID_REQUEST_BODY_FORMAT,
  INVALID_REQUEST,
  TOO_MANY_REQUESTS,
  INTERNAL_ERROR,
  UNKNOWN_ERROR,
  REDIS_CONNECT,
  REDIS_DISCONNECT,
  REDIS_SET,
  REDIS_GET,
}
