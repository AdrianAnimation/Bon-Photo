import eslintPluginPrettier from 'eslint-plugin-prettier';

export default [
  {
    files: ['**/*.js'], // Se aplica a todos los archivos JS
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        window: 'readonly',
        document: 'readonly',
        console: 'readonly',
      },
    },
    rules: {
      'prettier/prettier': ['error'],
      'no-console': 'off',
      'no-unused-vars': 'warn',
    },
    plugins: {
      prettier: eslintPluginPrettier,
    },
  },
];
