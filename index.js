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
        // this option sets a specific tab width for your code
        // http://eslint.org/docs/rules/indent
        // indent: ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
        // ---
        // changed because we use 4 spaces
        // todo: check the documentation for updated MemberExpression properties and if that setting is useful
        indent: ['error', 4, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],

        // airbnb:
        // Enforce JSX indentation
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent.md
        // 'react/jsx-indent': ['error', 2],
        // ---
        // changed because we use 4 spaces
        'react/jsx-indent': ['error', 4],

        // airbnb:
        // Validate props indentation in JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-indent-props.md
        // 'react/jsx-indent-props': ['error', 2],
        // ---
        // changed because we use 4 spaces
        'react/jsx-indent-props': ['error', 4],

        // airbnb:
        // disallow declaration of variables that are not used in the code
        // 'no-unused-vars': ['error', { vars: 'local', args: 'after-used' }],
        // ---
        // changed because we don't want to use all function variables we declare
        'no-unused-vars': ['error', { vars: 'local', args: 'none' }],

        // airbnb:
        // suggest using template literals instead of string concatenation
        // http://eslint.org/docs/rules/prefer-template
        // 'prefer-template': 'error',
        // ---
        // changed because we use normal string concatination with variables
        'prefer-template': 'off',

        // airbnb:
        // disallow use of multiple spaces
        // 'no-multi-spaces': 'error',
        // ---
        // changed because we use multi-spaces for some exceptions for better code layout
        'no-multi-spaces': ['error', {
            exceptions: {
                Property: true,
                VariableDeclarator: true,
                ImportDeclaration: true,
            },
        }],

        // airbnb:
        // specify the maximum length of a line in your program
        // http://eslint.org/docs/rules/max-len
        // 'max-len': ['error', 100, 2, {
        //   ignoreUrls: true,
        //   ignoreComments: false,
        //   ignoreStrings: true,
        //   ignoreTemplateLiterals: true,
        // }],
        // ---
        // changed to only throw a warning and a line length of 120
        // also, our tab-length is 4 (but we use spaces anyway)
        'max-len': ['warn', 120, 4, {
          ignoreUrls: true,
          ignoreComments: false,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
        }],

        // airbnb:
        // require function expressions to have a name
        // 'func-names': 'warn',
        // ---
        // changed because we don't enforce function names
        // todo: check how this can be useful and change later or remove this todo
        'func-names': 'off',

        // airbnb:
        // ensure imports point to files/modules that can be resolved
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-unresolved.md
        // 'import/no-unresolved': ['error', { commonjs: true }],
        // ---
        // disabled because we have extended resolve module modulesDirectories in our webpack config,
        // and i don't know how to handle them correctly. webpack will complain about wrong imports anyway.
        // todo: try the external-module-folders setting
        'import/no-unresolved': 'off',

        // airbnb:
        // require a capital letter for constructors
        // 'new-cap': ['error', { newIsCap: true }],
        // ---
        // adding exception for CSSModules
        'new-cap': ['error', {
            newIsCap: true,
            capIsNewExceptions: ['CSSModules']
        }],

        // airbnb:
        // disallow unnecessary constructor
        // http://eslint.org/docs/rules/no-useless-constructor
        // 'no-useless-constructor': 'error',
        // ---
        // disabled this because useless constructors can always become useful.
        // i like to have them always there and ready to use.
        'no-useless-constructor': 'off',

        // airbnb:
        // Require stateless functions when not using lifecycle methods, setState or ref
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prefer-stateless-function.md
        // 'react/prefer-stateless-function': 'error',
        // ---
        // disabled this because we are using react classes everywhere and will change it later...
        'react/prefer-stateless-function': 'off',

        // airbnb:
        // Prevent missing props validation in a React component definition
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/prop-types.md
        // 'react/prop-types': ['error', { ignore: [], customValidators: [] }],
        // ---
        // changed to a warning, because i think it's okay to not have all prop types defined during development
        'react/prop-types': ['warn', { ignore: [], customValidators: [] }],

        // airbnb:
        // disallow dangling underscores in identifiers
        // 'no-underscore-dangle': ['error', { allowAfterThis: false }],
        // ---
        // disabled this because our mongodb objects contain _id wich i don't want to change for now
        'no-underscore-dangle': 'off',

        // airbnb:
        // require parens in arrow function arguments
        // http://eslint.org/docs/rules/arrow-parens
        // 'arrow-parens': ['error', 'as-needed', {
        //     requireForBlockBody: true,
        // }],
        // ---
        // i am a brace and i find this offensive.
        'arrow-parens': ['error', 'always'],

        // airbnb:
        // disallow certain syntax forms
        // http://eslint.org/docs/rules/no-restricted-syntax
        // 'no-restricted-syntax': [
        //   'error',
        //   'ForInStatement',
        //   'LabeledStatement',
        //   'WithStatement',
        // ],
        // ---
        // removed ForInStatement
        // todo: find better alternative to iterate over Objects
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],

        // airbnb:
        // enforces no braces where they can be omitted
        // http://eslint.org/docs/rules/arrow-body-style
        // TODO: enable requireReturnForObjectLiteral?
        // 'arrow-body-style': ['error', 'as-needed', {
        //  requireReturnForObjectLiteral: false,
        // }],
        // ---
        // disabled because sometimes unneeded braces are better for readability
        'arrow-body-style': 'off',

        // airbnb:
        // Forbid the use of extraneous packages
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/no-extraneous-dependencies.md
        // 'import/no-extraneous-dependencies': ['error', {
        //     devDependencies: false,
        //     optionalDependencies: false,
        // }],
        // ---
        // disabled this because i want to import devDependencies
        'import/no-extraneous-dependencies': 'off',

        // airbnb:
        // only .jsx files may have JSX
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-filename-extension.md
        // ---
        // we use jsx only in .js files
        'react/jsx-filename-extension': ['error', { extensions: ['.js'] }],

        // airbnb:
        // warn against using findDOMNode()
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-find-dom-node.md
        // 'react/no-find-dom-node': 'error',
        // ---
        // disabled this just to quickly fix our build
        // todo: update the code and enable this again
        'react/no-find-dom-node': 'off',

        // airbnb:
        // Prevent using string references
        // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-string-refs.md
        // 'react/no-string-refs': 'error',
        // ---
        // disabled this just to quickly fix our build
        // todo: update the code and enable this again
        'react/no-string-refs': 'off',

        // airbnb:
        // enforce that class methods use "this"
        // http://eslint.org/docs/rules/class-methods-use-this
        // 'class-methods-use-this': 'error',
        // ---
        // disabled because i don't get it why i have to use "this", even if i don't need it
        'class-methods-use-this': 'off',

        // airbnb:
        // disallow href "#"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/href-no-hash.md
        // 'jsx-a11y/href-no-hash': ['error', ['a']],
        // ---
        // disabled until i found a good alternative for href="#"
        // todo: update the code and enable this again
        'jsx-a11y/href-no-hash': ['off'],

        // airbnb:
        // Enforce that anchors have content
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/anchor-has-content.md
        // 'jsx-a11y/anchor-has-content': ['error', ['']],
        // ---
        // disabled because my nav bullets don't have and will not have content
        'jsx-a11y/anchor-has-content': 'off',

        // airbnb:
        // Enforce that DOM elements without semantic behavior not have interaction handlers
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/no-static-element-interactions.md
        // 'jsx-a11y/no-static-element-interactions': 'error',
        // ---
        // disabled because i'm too lazy now to fix the code
        // todo: update the code and enable this again
        'jsx-a11y/no-static-element-interactions': 'off',

        // airbnb:
        // require that JSX labels use "htmlFor"
        // https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-for.md
        // 'jsx-a11y/label-has-for': ['error', ['label']],
        // ---
        // disabled because for checkboxes and radios inside the tag they don't need to be associated with the control
        'jsx-a11y/label-has-for': 'off',

        // airbnb:
        // Ensure consistent use of file extension within the import path
        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
        // 'import/extensions': ['error', 'always', {
        //   js: 'never',
        //   jsx: 'never',
        // }],
        // ---
        // disabled until i found out how this works right (don't know why my imports throw errors)
        'import/extensions': 'off',

        // airbnb:
        // require trailing commas in multiline object literals
        // 'comma-dangle': ['error', {
        //   arrays: 'always-multiline',
        //   objects: 'always-multiline',
        //   imports: 'always-multiline',
        //   exports: 'always-multiline',
        //   functions: 'always-multiline',
        // }],
        // ---
        // ignore in functions because it's annoying in the map callback function
        'comma-dangle': ['error', {
          arrays: 'always-multiline',
          objects: 'always-multiline',
          imports: 'always-multiline',
          exports: 'always-multiline',
          functions: 'ignore',
        }],
    },
}
