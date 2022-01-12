module.exports = {
	'env': {
    'node': true,
    'browser': true,
    'commonjs': true,
    'amd': true,
  },
	'extends': [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
	],
	'parser': '@typescript-eslint/parser',
	'parserOptions': {
		'ecmaVersion': 12,
		'sourceType': 'module',
	},
	'plugins': [
		'@typescript-eslint',
	],
	'rules': {
		'no-var': 'error',
    'no-console': 'error',
    'quotes': [
      'error',
      'single',
    ],
    'semi': [
      'error',
      'never',
    ],
    'comma-dangle': [
      'error', 
      'always-multiline',
    ],
    'max-len': ['error', 120],
    '@typescript-eslint/no-explicit-any': [
      'off',
    ],
    '@typescript-eslint/explicit-module-boundary-types': ['error', { 'allowArgumentsExplicitlyTypedAsAny': true }],
    'no-useless-call': 'off',
    'id-length': 'off',
    'camelcase': 'off',
	},
}
