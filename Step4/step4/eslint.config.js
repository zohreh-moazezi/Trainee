import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

module.exports(

  {root: true},
  {env: { browser: true, es2020: true }},
  {extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  
    'prettier',
  ]},
  {ignorePatterns: ['dist', '.eslintrc.cjs']},
  {parser: '@typescript-eslint/parser'},
  {parserOptions: {
    ecmaVersion: 2020, 
    sourceType: 'module',
  }},
  {globals: globals.browser},
  {plugins: {
    '@typescript-eslint': tseslint, 
    'react-hooks': reactHooks,
    'react-refresh': reactRefresh,
  }},
  {rules: {
    ...reactHooks.configs.recommended.rules, 
    '@typescript-eslint/explicit-module-boundary-types': 'off', 
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ], 
  }},

 
)
