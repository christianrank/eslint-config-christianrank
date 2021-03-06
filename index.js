module.exports = {
  extends: 'airbnb',

  parser: 'babel-eslint',

  env: {
      browser: true,
      node: true,
      es6: true,
  },

  rules: {
    // disallow declaration of variables that are not used in the code
    // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
    // ---
    // Changed because I don't always want to use all function variables I declare.
    'no-unused-vars': ['error', { vars: 'local', args: 'none' }],

    // specify the maximum length of a line in your program
    // https://eslint.org/docs/rules/max-len
    // 'max-len': ['error', 100, 2, {
    //   ignoreUrls: true,
    //   ignoreComments: false,
    //   ignoreRegExpLiterals: true,
    //   ignoreStrings: true,
    //   ignoreTemplateLiterals: true,
    // }],
    // ---
    // Changed to only throw a warning and a longer line length of 120.
    'max-len': ['warn', 120, 4, {
      ignoreUrls: true,
      ignoreComments: false,
      ignoreRegExpLiterals: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // require function expressions to have a name
    // https://eslint.org/docs/rules/func-names
    // 'func-names': 'warn',
    // ---
    // Changed because I don't enforce function names.
    // todo: check how this can be useful and change later or remove this todo
    'func-names': 'off',

    // ensure imports point to files/modules that can be resolved
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
    // 'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
    // ---
    // Disabled because I have extended resolve module modulesDirectories in my webpack config,
    // and I don't know how to handle them correctly. webpack will complain about wrong imports anyway.
    'import/no-unresolved': 'off',

    // require a capital letter for constructors
    // 'new-cap': ['error', {
    //   newIsCap: true,
    //   newIsCapExceptions: [],
    //   capIsNew: false,
    //   capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List'],
    // }],
    // ---
    // adding exception for CSSModules
    'new-cap': ['error', {
      newIsCap: true,
      newIsCapExceptions: [],
      capIsNew: false,
      capIsNewExceptions: ['Immutable.Map', 'Immutable.Set', 'Immutable.List', 'CSSModules'],
    }],

    // Require stateless functions when not using lifecycle methods, setState or ref
    // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
    // 'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
    // ---
    // Disabled this because I am using react classes everywhere and will change it later...
    // todo: change it and remove this
    'react/prefer-stateless-function': 'off',

    // disallow dangling underscores in identifiers
    // https://eslint.org/docs/rules/no-underscore-dangle
    // 'no-underscore-dangle': ['error', {
    //   allow: [],
    //   allowAfterThis: false,
    //   allowAfterSuper: false,
    //   enforceInMethodNames: true,
    // }],
    // ---
    // disabled this because my mongodb objects contain _id wich I don't want to change for now
    'no-underscore-dangle': 'off',

    // require parens in arrow function arguments
    // https://eslint.org/docs/rules/arrow-parens
    // 'arrow-parens': ['error', 'as-needed', {
    //   requireForBlockBody: true,
    // }],
    // ---
    // In my opinion it's better readable with parens.
    'arrow-parens': ['error', 'always'],

    // Forbid the use of extraneous packages
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
    // paths are treated both as absolute paths, and relative to process.cwd()
    // 'import/no-extraneous-dependencies': ['error', {
    //   devDependencies: [
    //     'test/**', // tape, common npm pattern
    //     'tests/**', // also common npm pattern
    //     'spec/**', // mocha, rspec-like pattern
    //     '**/__tests__/**', // jest pattern
    //     '**/__mocks__/**', // jest pattern
    //     'test.{js,jsx}', // repos with a single test file
    //     'test-*.{js,jsx}', // repos with multiple top-level test files
    //     '**/*{.,_}{test,spec}.{js,jsx}', // tests where the extension or filename suffix denotes that it is a test
    //     '**/jest.config.js', // jest config
    //     '**/vue.config.js', // vue-cli config
    //     '**/webpack.config.js', // webpack config
    //     '**/webpack.config.*.js', // webpack config
    //     '**/rollup.config.js', // rollup config
    //     '**/rollup.config.*.js', // rollup config
    //     '**/gulpfile.js', // gulp config
    //     '**/gulpfile.*.js', // gulp config
    //     '**/Gruntfile{,.js}', // grunt config
    //     '**/protractor.conf.js', // protractor config
    //     '**/protractor.conf.*.js', // protractor config
    //   ],
    //   optionalDependencies: false,
    // }],
    // ---
    // Disabled because I have extended resolve module modulesDirectories in my webpack config,
    // and I don't know how to handle them correctly. Webpack will complain about wrong imports anyway.
    'import/no-extraneous-dependencies': 'off',

    // Ensure consistent use of file extension within the import path
    // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    // 'import/extensions': ['error', 'ignorePackages', {
    //   js: 'never',
    //   mjs: 'never',
    //   jsx: 'never',
    // }],
    // ---
    // Disabled until I found out how this works right (I don't know why my imports throw errors)
    'import/extensions': 'off',

    // ensure <a> tags are valid
    // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/0745af376cdc8686d85a361ce36952b1fb1ccf6e/docs/rules/anchor-is-valid.md
    // 'jsx-a11y/anchor-is-valid': ['error', {
    //   components: ['Link'],
    //   specialLink: ['to'],
    //   aspects: ['noHref', 'invalidHref', 'preferButton'],
    // }],
    // ---
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton'],
    }],

    // require or disallow use of semicolons instead of ASI
    // semi: ['error', 'always'],
    // ---
    // I like to have no semicolons.
    semi: ['error', 'never'],

    // Forbid certain propTypes (any, array, object)
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/forbid-prop-types.md
    // 'react/forbid-prop-types': ['error', {
    //   forbid: ['any', 'array', 'object'],
    //   checkContextTypes: true,
    //   checkChildContextTypes: true,
    // }],
    // ---
    // Allow objects and arrays
    'react/forbid-prop-types': ['error', {
      forbid: ['any'],
      checkContextTypes: true,
      checkChildContextTypes: true,
    }],

    // Enforce consistent usage of destructuring assignment of props, state, and context
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/destructuring-assignment.md
    // 'react/destructuring-assignment': ['error', 'always'],
    // ---
    // Destructuring is nice, but using it for everything is too much.
    'react/destructuring-assignment': 'off',

    // One JSX Element Per Line
    // https://github.com/yannickcr/eslint-plugin-react/blob/843d71a432baf0f01f598d7cf1eea75ad6896e4b/docs/rules/jsx-one-expression-per-line.md
    // 'react/jsx-one-expression-per-line': ['error', { allow: 'single-child' }],
    // ---
    // Sometimes I need to put multiple elements in one line, for example Icon + Text.
    'react/jsx-one-expression-per-line': 'off',

    // disallow multiple empty lines and only one newline at the end
    // 'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
    // ---
    // Doesn't make sense to allow 2 empty lines.
    'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],

    // require or disallow an empty line between class members
    // https://eslint.org/docs/rules/lines-between-class-members
    // 'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: false }],
    // ---
    // Allow single line class members without a space in between.
    'lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

    // Prefer destructuring from arrays and objects
    // https://eslint.org/docs/rules/prefer-destructuring
    // 'prefer-destructuring': ['error', {
    //   VariableDeclarator: {
    //     array: false,
    //     object: true,
    //   },
    //   AssignmentExpression: {
    //     array: true,
    //     object: true,
    //   },
    // }, {
    //   enforceForRenamedProperties: false,
    // }],
    // ---
    // Disable error about destructuring of arrays in AssignmentExpression because it is too annoying sometimes
    'prefer-destructuring': ['error', {
      VariableDeclarator: {
        array: false,
        object: true,
      },
      AssignmentExpression: {
        array: false,
        object: true,
      },
    }, {
      enforceForRenamedProperties: false,
    }],
  },
}
