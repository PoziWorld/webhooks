module.exports = {
  env: {
    es6: true,
    node: true,
    mocha: true,
  },
  extends: [
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 2019,
    ecmaFeatures: {
      impliedStrict : true,
    },
    sourceType: 'module',
  },
  rules: {
    /**
     * Best practices.
     * https://eslint.org/docs/rules/#best-practices
     */

    'curly': 'error',
    'dot-location': [
      'error',
      'property',
    ],
    'dot-notation': [
      'error',
      {
        // https://eslint.org/docs/rules/dot-notation#allowpattern
        allowPattern: '^[a-z]+(_[a-z]+)+$',
      },
    ],
    'eqeqeq': [
      'error',
      // Not 'smart' to avoid confusion because of inconsistency
      'always',
    ],
    'max-classes-per-file': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'error',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-floating-decimal': 'error',
    'no-implicit-coercion': 'error',
    'no-implied-eval': 'error',
    'no-invalid-this': 'error',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': [
      'error',
      {
        ignore: [
          - 1,
          0,
          1,
        ],
      },
    ],
    'no-multi-spaces': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'error',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-return': 'error',
    'no-void': 'error',
    'no-warning-comments': 'error',
    'no-with': 'error',
    'prefer-promise-reject-errors': [
      'error',
      {
        allowEmptyReject: true,
      },
    ],
    'require-await': 'error',
    'require-unicode-regexp': 'error',
    'wrap-iife': 'error',
    'yoda': 'error',

    /**
     * Variables.
     * https://eslint.org/docs/rules/#variables
     */

    'no-label-var': 'error',
    'no-shadow': 'error',
    'no-shadow-restricted-names': 'error',
    'no-undef-init': 'error',
    'no-use-before-define': [
      'error',
      {
        functions: false,
      },
    ],

    /**
     * Node.js and CommonJS.
     * https://eslint.org/docs/rules/#nodejs-and-commonjs
     */

    'callback-return': 'error',
    'global-require': 'error',
    'no-buffer-constructor': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-sync': 'error',

    /**
     * Stylistic Issues.
     * https://eslint.org/docs/rules/#stylistic-issues
     */

    /**
     * @todo Check whether the rule below applies to destructuring assignments.
     */

    'array-bracket-newline': [
      'warn',
      {
        minItems: 1,
      },
    ],
    'array-bracket-spacing': [
      'error',
      'always',
    ],
    'array-element-newline': [
      'warn',
      'always',
    ],
    'block-spacing': 'error',
    'brace-style': [
      'error',
      'stroustrup',
    ],
    'camelcase': 'error',
    'capitalized-comments': 'warn',
    'comma-dangle': [
      'error',
      'always-multiline',
    ],
    'comma-spacing': 'error',
    'comma-style': 'error',
    'computed-property-spacing': [
      'error',
      'always',
    ],
    'eol-last': 'error',
    'func-call-spacing': 'error',
    'func-name-matching': 'warn',
    'func-names': [
      'warn',
      'as-needed',
    ],
    'func-style': [
      'error',
      'declaration',
      {
        allowArrowFunctions: true,
      },
    ],
    'function-paren-newline': 'error',
    'implicit-arrow-linebreak': 'error',
    'indent': [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'key-spacing': 'error',
    'keyword-spacing': 'error',
    'line-comment-position': 'error',
    'linebreak-style': [
      'error',
      // LF vs. CRLF. One of the most common issues in some projects. Will be easier to notice in case this is ever copied over to a project with a different style.
      'unix',
    ],
    'lines-around-comment': [
      'error',
      {
        afterBlockComment: true,
        allowBlockStart: true,
        allowClassStart: true,
        allowObjectStart: true,
        allowArrayStart: true,
      },
    ],
    'lines-between-class-members': 'error',
    'max-depth': 'warn',
    'max-lines-per-function': 'warn',
    'max-nested-callbacks': [
      'error',
      1,
    ],
    'max-params': 'warn',
    'max-statements': 'warn',
    'max-statements-per-line': 'error',
    'multiline-comment-style': 'error',
    'multiline-ternary': [
      'error',
      'always-multiline',
    ],
    'new-cap': 'error',
    'new-parens': 'error',
    'newline-per-chained-call': [
      'warn',
      {
        ignoreChainWithDepth: 1,
      },
    ],
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'error',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-multi-assign': 'error',
    'no-multiple-empty-lines': 'error',
    'no-negated-condition': 'warn',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': [
      'error',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'error',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: {
          minProperties: 1,
        },
        ObjectPattern: {
          consistent: true,
        },
        ImportDeclaration: {
          consistent: true,
        },
        ExportDeclaration: {
          consistent: true,
        },
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'object-property-newline': 'error',
    'one-var': [
      'error',
      'never',
    ],
    'one-var-declaration-per-line': [
      'error',
      'always',
    ],
    'operator-assignment': 'error',
    'operator-linebreak': [
      'error',
      'after',
    ],
    'padded-blocks': [
      'error',
      'never',
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'block-like',
          'break',
          'case',
          'class',
          'continue',
          'iife',
          'return',
          'throw',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'directive',
          'import',
          'export',
          'const',
          'let',
          'block-like',
        ],
        next: '*',
      },
      {
        blankLine: 'always',
        prev: [
          'expression',
        ],
        next: [
          'const',
          'let',
        ],
      },
      {
        blankLine: 'never',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'any',
        prev: 'import',
        next: 'import',
      },
      {
        blankLine: 'any',
        prev: 'export',
        next: 'export',
      },
      {
        blankLine: 'any',
        prev: [
          'const',
          'let',
        ],
        next: [
          'const',
          'let',
        ],
      },
    ],
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'consistent-as-needed',
    ],
    'quotes': [
      'error',
      'single',
    ],
    'semi': 'error',
    'semi-spacing': 'error',
    'semi-style': 'error',
    'space-before-blocks': 'error',
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'always',
        named: 'never',
        asyncArrow: 'always',
      },
    ],
    'space-in-parens': [
      'error',
      'always',
    ],
    'space-infix-ops': 'error',
    'space-unary-ops': [
      'error',
      {
        overrides: {
          '!': true,
        },
      },
    ],
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-tag-spacing': 'error',
    'unicode-bom': 'error',

    /**
     * ECMAScript 6.
     * https://eslint.org/docs/rules/#ecmascript-6
     */

    'arrow-body-style': 'error',
    'arrow-parens': 'error',
    'arrow-spacing': 'error',
    'generator-star-spacing': 'error',
    'no-confusing-arrow': [
      'error',
      {
        allowParens: true,
      },
    ],
    'no-duplicate-imports': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-destructuring': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'rest-spread-spacing': 'error',
    'symbol-description': 'error',
    'template-curly-spacing': [
      'error',
      'always',
    ],
    'yield-star-spacing': 'error',
  },
};
