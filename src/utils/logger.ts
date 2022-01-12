import { createLogger, format, transports, config, Logger } from 'winston'
import dayjs from 'dayjs'
import { join, resolve } from 'path'
import fs from 'fs'
import pkg from '../../package.json'

const maxsize: number = 1024 * 1024 * 50

const firDir: string = resolve(process.cwd(), './logs')
if (!fs.existsSync(firDir)) {
  fs.mkdirSync(firDir)
}
const dir: string = join(firDir, '/')

const transportList: Array<any> = [
  new transports.File({
    filename: `${dir}${dayjs().format('YYYYMMDD')}-${pkg.name}-info.log`,
    maxsize,
    level: 'info', // 低于该等级的日志输出
  }),
  new transports.File({
    filename: `${dir}${dayjs().format('YYYYMMDD')}-${pkg.name}-error.log`,
    maxsize,
    level: 'error',
  }),
]

if (process.env.IS_WATCHING === 'true') {
  transportList.push(new transports.Console({ level: 'error' }))
}

const logger: Logger = createLogger({
  // 输出日志等级小于该设定值时输出,"info,erro,verbose“等
  level: 'info',
  // 日志等级定义，默认为自带等级设定
  levels: config.npm.levels,
  exceptionHandlers: [
    new transports.File({
      filename: `${dir}${dayjs().format('YYYYMMDD')}-${pkg.name}-exception.log`,
      maxsize, // 文件最大50M
    }),
  ],
  // 对输出信息进行格式化
  format: format.combine(
    format.colorize(),
    format.timestamp({
      format: 'YYYY-MM-DD HH:mm:ss', // format output log timestamp
    }),
    format.splat(),
    format.printf(({ level, message, timestamp }: any) => {
      const msg: any = message || ''
      if (Object.prototype.toString.call(msg) === '[object Object]') {
        return `${timestamp} [${level}]: code: ${msg.code || 'zero'} msg: ${
          JSON.stringify(msg.msg)
        }\n${msg.track && msg.track.toString()}`
      }

      return `${timestamp} [${level}]: ${msg}`
    }),
  ),
  // 日志信息输出到哪里，例如某个文件或者命令行,默认[]
  transports: transportList,
  // exceptions 是否会出导致 process.exit, 设为false不会
  exitOnError: true,
  // 为true时所有日志不输出
  silent: false,
})

export default logger
