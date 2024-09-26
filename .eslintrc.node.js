module.exports = {
  extends: [
    'plugin:import/recommended',
    'prettier',
    'standard',
  ],
  plugins: ['prettier', 'import', 'simple-import-sort'],
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
    },
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  env: {
    es2022: true,
    node: true,
  },
  rules: {
    'prettier/prettier': 'error',
    'simple-import-sort/imports': 'error',
  },
}
