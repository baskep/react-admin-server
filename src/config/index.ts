import path from 'path'

const currentConfig = {
  dev: {
    db: {
      host: '',
      port: 3306,
      username: 'root',
      password: '',
      database: 'test',
      dialect: 'mysql',
      define: {
        timestamps: false,
      },
    },
    port: 8000,
    basedir: '',
  },
  real: {
    db: {
      host: '',
      port: 3306,
      username: 'root',
      password: '',
      database: 'root',
      dialect: 'test',
      define: {
        timestamps: false,
      },
    },
    port: 8000,
    basedir: '',
  },
}

const env = (process.env.NODE_ENV === 'real' || process.env.NODE_ENV === 'pre') ? 'real' : 'dev'
const config = currentConfig[env]

config.port = env === 'dev' ? 8000 : 8080
config.basedir = path.resolve(__dirname, '../../')

export default config
