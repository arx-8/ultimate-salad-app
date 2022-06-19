// @ts-check

/**
 * @type {import("eslint").Linter.Config}
 */
const config = {
  env: {
    browser: false,
  },
  extends: [
    "eslint:recommended",
    "standard",
    "plugin:promise/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "@react-native-community",
    "plugin:react-native/all",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:typescript-sort-keys/recommended",
    "prettier",
  ],
  overrides: [
    {
      // for expo entry point
      files: ["App.tsx"],
      rules: {
        "import/no-default-export": 0,
        "no-restricted-exports": 2,
      },
    },
    {
      files: ["*.ts", "*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": [
          2,
          {
            allowExpressions: true,
          },
        ],
        "@typescript-eslint/explicit-module-boundary-types": 2,
      },
    },
    {
      extends: ["plugin:jest/recommended"],
      files: ["*.test.ts", "*.test.tsx"],
      rules: {
        "jest/prefer-strict-equal": 2,
      },
    },
  ],
  parserOptions: {
    project: "./tsconfig.json",
  },
  plugins: ["sort-destructure-keys", "sort-keys-fix", "typescript-sort-keys"],
  rules: {
    "@typescript-eslint/ban-types": [
      2,
      {
        types: {
          /**
           * `React.FC/VFC` can only be a disadvantage, because generics cannot be defined.
           */
          "React.FC": {
            message: "Use `({...}: Props): JSX.Element => {...}` style instead",
          },
          "React.VFC": {
            message: "Use `({...}: Props): JSX.Element => {...}` style instead",
          },
        },
      },
    ],
    "@typescript-eslint/consistent-generic-constructors": 2,
    "@typescript-eslint/consistent-indexed-object-style": [
      2,
      "index-signature",
    ],
    "@typescript-eslint/consistent-type-assertions": 2,
    "@typescript-eslint/consistent-type-definitions": [2, "type"],
    "@typescript-eslint/naming-convention": [
      2,
      {
        // "type" naming should be PascalCase
        custom: {
          match: false,
          regex: "send|start|find",
        },
        format: ["PascalCase"],
        selector: "typeAlias",
      },
    ],
    "@typescript-eslint/no-useless-constructor": 2,
    "@typescript-eslint/prefer-readonly": 2,
    "@typescript-eslint/strict-boolean-expressions": [
      2,
      {
        allowAny: false,
        allowNullableBoolean: false,
        allowNullableNumber: false,
        allowNullableObject: false,
        allowNullableString: false,
        allowNumber: false,
        allowString: false,
      },
    ],
    camelcase: 0,
    "dot-notation": 0,
    "import/no-default-export": 2,
    "no-restricted-imports": [
      2,
      {
        paths: [
          {
            importNames: [
              "Button",
              "FlatList",
              "KeyboardAvoidingView",
              "ScrollView",
              "SectionList",
              "StyleSheet",
              "Text",
              "View",
            ],
            message: `Use "native-base" instead.`,
            name: "react-native",
          },
        ],
      },
    ],
    "no-restricted-syntax": [
      2,
      // available selector: https://babeljs.io/docs/en/babel-types
      {
        message:
          "for..in loops iterate over the entire prototype chain, which is virtually never what you want. Use Object.{keys,values,entries}, and iterate over the resulting array.",
        selector: "ForInStatement",
      },
      {
        message:
          "Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.",
        selector: "LabeledStatement",
      },
      {
        message:
          "`with` is disallowed in strict mode because it makes code impossible to predict and optimize.",
        selector: "WithStatement",
      },
      {
        message: "Do not use `class`. Use `Plain object` instead.",
        selector: "ClassDeclaration",
      },
      {
        message: "Do not declare function. Use arrow function instead.",
        selector: "FunctionDeclaration",
      },
      {
        message:
          "Do not use `enum`. Use `Plain object` or `Literal Types` instead.",
        selector: "TSEnumDeclaration",
      },
    ],
    // note you must disable the base rule as it can report incorrect errors
    "no-useless-constructor": 0,
    "prefer-template": 2,
    // Error occurred. Bug. Waiting for https://github.com/Intellicode/eslint-plugin-react-native/issues/270
    "react-native/no-raw-text": 0,
    // Error occurred. Bug?: `Error: Fixable rules must set the `meta.fixable` property to "code" or "whitespace".`
    "react-native/sort-styles": 0,
    "react/jsx-boolean-value": 2,
    "react/jsx-sort-props": 2,
    "react/jsx-uses-react": 0,
    "react/no-array-index-key": 2,
    "react/react-in-jsx-scope": 0,
    "sort-destructure-keys/sort-destructure-keys": 2,
    "sort-keys-fix/sort-keys-fix": 2,
    yoda: [2, "never", { onlyEquality: true }],
  },
}

module.exports = config
