import knex from 'knex'
import config from '../../config'
import { logger } from '../../utils'

const Knex = knex({
  client: 'mysql',
  connection: {
    host: config.db.host,
    port: config.db.port,
    database: config.db.database,
    user: config.db.username,
    password: config.db.password,
  },
  debug: false,
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 100,
    reapIntervalMillis: 150,
  },
  acquireConnectionTimeout: 60000,
  log: {
    error (message: string) {
      logger.error(`数据库操作异常 => ${message}`)
    },
  },
})

export default Knex
