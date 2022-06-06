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

init()

//  pm2 start --interpreter ./node_modules/.bin/ts-node ./src/app.ts --watch