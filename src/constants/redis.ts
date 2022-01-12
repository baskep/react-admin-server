import pkg from '../../package.json'

const REDIS_PREFIX_KEY = `${pkg.name.toUpperCase()}_TOKEN_`

export default {
  REDIS_PREFIX_KEY,
}
