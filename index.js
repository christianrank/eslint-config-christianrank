module.exports = {
    extends: 'airbnb',

    parser: 'babel-eslint',

    env: {
        browser: true,
        node: true,
        es6: true,
    },

    rules: {
        // airbnb:
        // disallow declaration of variables that are not used in the code
        // 'no-unused-vars': ['error', { vars: 'all', args: 'after-used', ignoreRestSiblings: true }],
        // ---
        // changed because I don't always want to use all function variables I declare
        'no-unused-vars': ['error', { vars: 'local', args: 'none' }],

        // airbnb:
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
        // changed to only throw a warning and a longer line length of 120
        'max-len': ['warn', 120, 4, {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],

        // airbnb:
        // require function expressions to have a name
        // 'func-names': 'warn',
        // ---
        // changed because I don't enforce function names
        // todo: check how this can be useful and change later or remove this todo
        'func-names': 'off',

        // airbnb:
        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        // 'import/no-unresolved': ['error', { commonjs: true, caseSensitive: true }],
        // ---
        // disabled because I have extended resolve module modulesDirectories in my webpack config,
        // and I don't know how to handle them correctly. webpack will complain about wrong imports anyway.
        'import/no-unresolved': 'off',

        // airbnb:
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

        // airbnb:
        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        // 'react/prefer-stateless-function': ['error', { ignorePureComponents: true }],
        // ---
        // disabled this because I am using react classes everywhere and will change it later...
        // todo: change it and remove this
        'react/prefer-stateless-function': 'off',

        // airbnb:
        // disallow dangling underscores in identifiers
        // 'no-underscore-dangle': ['error', {
        //   allow: [],
        //   allowAfterThis: false,
        //   allowAfterSuper: false,
        //   enforceInMethodNames: false,
        // }],
        // ---
        // disabled this because my mongodb objects contain _id wich I don't want to change for now
        'no-underscore-dangle': 'off',

        // airbnb:
        // require parens in arrow function arguments
        // http://eslint.org/docs/rules/arrow-parens
        // 'arrow-parens': ['error', 'as-needed', {
        //     requireForBlockBody: true,
        // }],
        // ---
        // I am a brace and I find this offensive.
        'arrow-parens': ['error', 'always'],

        // airbnb:
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // paths are treated both as absolute paths, and relative to process.cwd()
        // 'import/no-extraneous-dependencies': ['error', {
        //   devDependencies: [
        //     'test/**', // tape, common npm pattern
        //     'tests/**', // also common npm pattern
        //     'spec/**', // mocha, rspec-like pattern
        //     '**/__tests__/**', // jest pattern
        //     'test.{js,jsx}', // repos with a single test file
        //     'test-*.{js,jsx}', // repos with multiple top-level test files
        //     '**/*.{test,spec}.{js,jsx}', // tests where the extension denotes that it is a test
        //     '**/jest.config.js', // jest config
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
        // disabled because I have extended resolve module modulesDirectories in my webpack config,
        // and I don't know how to handle them correctly. webpack will complain about wrong imports anyway.
        'import/no-extraneous-dependencies': 'off',

        // airbnb:
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        // 'import/extensions': ['error', 'always', {
        //   js: 'never',
        //   mjs: 'never',
        //   jsx: 'never',
        // }],
        // ---
        // disabled until I found out how this works right (don't know why my imports throw errors)
        'import/extensions': 'off',

        // airbnb:
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

        // airbnb:
        // require or disallow use of semicolons instead of ASI
        // semi: ['error', 'always'],
        // ---
        // I like to have no semicolons
        semi: ['error', 'never'],
    },
}
