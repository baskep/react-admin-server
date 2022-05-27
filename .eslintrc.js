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
    '@typescript-eslint/explicit-module-boundary-types': [
      'off',
      'error',
      { 'allowArgumentsExplicitlyTypedAsAny': true },
    ],
    'no-useless-call': 'off',
    'id-length': 'off',
    'camelcase': 'off',
    indent: ['error', 2, {
      SwitchCase: 1,
      VariableDeclarator: 1,
      outerIIFEBody: 1,
      FunctionDeclaration: {
        parameters: 1,
        body: 1,
      },
      FunctionExpression: {
        parameters: 1,
        body: 1,
      },
      CallExpression: {
        arguments: 1,
      },
      ArrayExpression: 1,
      ObjectExpression: 1,
      ImportDeclaration: 1,
      flatTernaryExpressions: false,
      ignoreComments: false,
    }],
    // 'no-console': 'error',
    'prefer-template': 'error',
    'no-multi-assign': 'error',
    'no-case-declarations': 'error',
    'no-else-return': 'error',
    'newline-per-chained-call': 'error',
    'function-paren-newline': ['error', 'consistent'],
    'object-shorthand': [
      'error',
      'methods',
      {
        avoidExplicitReturnArrows: true,
      },
    ],
    'arrow-parens': ['error', 'as-needed', {
      requireForBlockBody: true,
    }],
    'no-confusing-arrow': 'error',
    'jsx-quotes': ['error', 'prefer-double'],
    'no-param-reassign': 'warn',
    'space-infix-ops': ['error', { 'int32Hint': false }],
    // 'no-unused-vars': ['error', {
    //   args: 'after-used',
    //   ignoreRestSiblings: true,
    //   argsIgnorePattern: '^_',
    // }],
    eqeqeq: ['error', 'smart'],
    'arrow-spacing': [2, {
      before: true,
      after: true,
    }],
    'block-spacing': [2, 'always'],
    'comma-spacing': [2, {
      before: false,
      after: true,
    }],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
    }],
    'keyword-spacing': [2, {
      before: true,
      after: true,
    }],
    'no-multi-spaces': 2,
    'no-multiple-empty-lines': [2, {
      max: 1,
    }],
    'no-unneeded-ternary': [2, {
      defaultAssignment: false,
    }],
    'operator-linebreak': [2, 'after', {
      overrides: {
        '?': 'before',
        ':': 'before',
      },
    }],
    'semi-spacing': [2, {
      before: false,
      after: true,
    }],
    'space-before-blocks': [2, 'always'],
    'no-trailing-spaces': 2,
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false,
    }],
    'no-mixed-operators': 'off',
    'jsx-a11y/alt-text': 'off',
  },
}
