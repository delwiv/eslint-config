module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true,
    node: true
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  globals: {
    expect: true,
    wait: true,
    mount: true,
    render: true,
    shallow: true,
    Raven: true
  },
  parser: "babel-eslint",
  plugins: ["react", "sort-imports-es6-autofix"],
  rules: {
    "array-bracket-spacing": "error",
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": [
      "error",
      {
        before: true,
        after: true
      }
    ],
    "block-scoped-var": "error",
    "block-spacing": "error",
    "brace-style": "error",
    "class-methods-use-this": "off",
    "comma-dangle": [
      "error",
      {
        arrays: "always-multiline",
        objects: "always-multiline",
        imports: "always-multiline",
        exports: "always-multiline",
        functions: "never"
      }
    ],
    "comma-spacing": "error",
    "comma-style": "error",
    curly: "error",
    "eol-last": "off",
    eqeqeq: "error",
    "generator-star-spacing": [
      "error",
      {
        before: false,
        after: true
      }
    ],
    "jsx-quotes": ["error", "prefer-single"],
    indent: [
      "error",
      2,
      {
        SwitchCase: 1
      }
    ],
    "key-spacing": "error",
    "keyword-spacing": "error",
    "max-len": ["error", 120],
    "no-alert": "error",
    "no-case-declarations": 0,
    "no-console": "warn",
    "no-duplicate-imports": "error",
    "no-else-return": "error",
    "no-empty": ["error", { allowEmptyCatch: true }],
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-extra-parens": "error",
    "no-extra-semi": "error",
    "no-global-assign": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": "error",
    "no-tabs": "error",
    "no-template-curly-in-string": "error",
    "no-trailing-spaces": "error",
    "no-unused-expressions": [
      "error",
      {
        allowShortCircuit: true
      }
    ],
    "no-useless-rename": "error",
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "one-var-declaration-per-line": "error",
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-rest-params": "error",
    "prefer-spread": "error",
    "prefer-template": "error",
    quotes: [
      "error",
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    radix: "error",
    "rest-spread-spacing": "error",
    semi: [2, "never"],
    "sort-imports-es6-autofix/sort-imports-es6": [
      2,
      {
        ignoreCase: false,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ["none", "all", "multiple", "single"]
      }
    ],
    "sort-vars": "error",
    "require-await": "error",
    "react/self-closing-comp": "error"
  }
};
