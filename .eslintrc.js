module.exports = {
    "extends": ["airbnb", "prettier"],
    "plugins": ["prettier"],
    "parser": "babel-eslint",
    "parserOptions": {
      "ecmaVersion": 2016,
      "sourceType": "module",
      "ecmaFeatures": {
        "jsx": true
      }
    },
    "env": {
      "es6": true,
      "browser": true,
      "node": true
    },
    "rules":{
      "linebreak-style": 0,
      "no-console": 0,
      "no-underscore-dangle": 0
    },
    "globals": {
      "describe": true,
      "it": true,
      "expect": true
    }
  }