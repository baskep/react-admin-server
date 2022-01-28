import 'reflect-metadata'

import { createKoaServer } from 'routing-controllers'
import { LoginController, UserController } from './controllers'
import config from './config'


const init = () => {
  const app = createKoaServer({
    cors: true,
    routePrefix: '/api',
    controllers: [
      LoginController,
      UserController,
    ],
  })
  app.listen(config.port)
}


// function connectRedis (): void {
//   const redisOption = cacheUtil.getKey('redis')
//   const client: any = redis.createClient(
//     redisOption.port,
//     redisOption.host,
//     redisOption.options,
//   )
//   client
//     .on('error', function (error: any) {
//       logger.error({ redisConnet: ERRORS.REDIS_CONNECT, track: error })
//       // eslint-disable-next-line no-console
//       console.log(`${chalk.red('[nodemon] redis 连接失败')}`)
//     })
//     .on('end', function () {
//       connectRedis()
//       // eslint-disable-next-line no-console
//       console.log(`${chalk.red('[nodemon] redis 取消连接')}`)
//       logger.error({ redisConnet: ERRORS.REDIS_DISCONNECT })
//     })
//     .once('connect', function () {
//       logger.info('redis 数据库连接成功')
//       // eslint-disable-next-line no-console
//       console.log(`${chalk.green('[nodemon] redis 数据库连接成功')}`)
//       redisUtil.initRedis(client)
//     })
// }

init()