# eslint-config-christianrank

The eslint config I'm using in my projects

--------------------------------------------------------------------------------

This config extends the famous [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb).<br>
I included their source rule as a comment and a comment why I changed something there for every rule.

This config is always specific to my projects, and there's a lot to improve (see todo comments), so you may not want to use it.

--------------------------------------------------------------------------------

# Install

**NPM**<br>
`npm install --save-dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-christianrank`<br>

**Yarn**<br>
`yarn add --dev eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-config-christianrank`

--------------------------------------------------------------------------------

# Documentation

To use this config, create an `.eslint` file in your project directory with the following content:

```javascript
{
    "extends": "christianrank"
}
```

--------------------------------------------------------------------------------

License: MIT
