# eslint-config-christianrank

The eslint config I'm using in my projects

This config extends the famous [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).<br>
I included their source rule as a comment and a comment why I changed something there for every rule.

This config is always specific to my projects, and there's a lot to improve (see todo comments), so you may not want to use it.

## Installation

**NPM**<br>
`npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-christianrank`<br>

**Yarn**<br>
`yarn add -D eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-christianrank`

## Usage

To use this config, create an `.eslintrc.js` file in your project directory with the following content:

```javascript
module.exports = {
  extends: 'christianrank',
}
```

## License

MIT
