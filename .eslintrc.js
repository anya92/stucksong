module.exports = {
    "parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
        "no-shadow": "off",
        "linebreak-style": ["warn", "windows"],
        "react/jsx-filename-extension": "off",
        "react/destructuring-assignment": "off",
        "react/jsx-one-expression-per-line": "off",
        "react/no-array-index-key": "off",
    },
    "env": {
        "browser": true,
    },
};
