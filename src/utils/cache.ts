import _ from 'lodash'

interface CacheManage {
  cache: Record<string, any>
  getKey: (key: string) => any
  setKey: (key: string, value: any) => void
  delKey: (key: string) => void
}

class CacheUtil implements CacheManage {
  cache = {}
  constructor (init: Record<string, any>) {
    this.cache = init || {}
  }

  update (data: Record<string, any>) {
    this.cache = _.assign(this.cache, data)
  }

  getKey (key: string): any {
    return this.cache[key]
  }

  setKey (key: string, value: any): void {
    this.cache[key] = value
  }

  delKey (key: string): void {
    _.omit(this.cache, key)
  }
}

export default new CacheUtil({})
