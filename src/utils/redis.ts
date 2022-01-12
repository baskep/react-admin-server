import { ERRORS, REDIS } from '../constants'
import logger from './logger'
import _ from 'lodash'

let client: any

class RedisUtil {
  initRedis (initClient: any): any {
    client = initClient
  }

  setRedis (key: string, value: any, ex?: number): void {
    if (!_.isNull(value) && !_.isUndefined(value)) {
      const newValue: string = JSON.stringify(value)
      client.set(`${REDIS.REDIS_PREFIX_KEY}${key}`, newValue)
      if (ex) {
        client.expire(`${REDIS.REDIS_PREFIX_KEY}${key}`, ex)
      }
    }
  }

  async getRedisSync (key: string): Promise<any> {
    return new Promise(function (resolve: any): void {
      client.get(`${REDIS.REDIS_PREFIX_KEY}${key}`, function (error: any, res: any) {
        if (error) {
          logger.error({ redisSet: ERRORS.REDIS_GET, track: error })
          resolve(null)
        } else {
          if (!_.isNull(res) && !_.isUndefined(res)) {
            const newRes: any = JSON.parse(res)
            resolve(newRes)
          } else {
            resolve(null)
          }
        }
      })
    })
  }

  async delRedis (key: string): Promise<void> {
    client.del(`${REDIS.REDIS_PREFIX_KEY}${key}`)
  }

  async setnx (key: string, expiryDate?: number): Promise<any> {
    return new Promise(function (resolve: any): void {
      client.setnx(key, true, function (error: any, res: any) {
        if (error) {
          logger.error({ redisSet: ERRORS.REDIS_GET, track: error })
        }

        if (res === 1) {
          resolve(true)
        } else {
          resolve(false)
        }

        if (expiryDate) {
          client.expire(`${REDIS.REDIS_PREFIX_KEY}${key}`, expiryDate)
        }
      })
    })
  }
}

export default new RedisUtil()
