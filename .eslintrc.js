module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: 'tsconfig.json',
    tsconfigRootDir: __dirname,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
  ],
  root: true,
  env: {
    node: true,
    jest: true,
  },
  ignorePatterns: ['.eslintrc.js'],
  rules: {
    '@typescript-eslint/interface-name-prefix': 'off', // Оставьте это выключенным, если не требуется строгое соблюдение префиксов
    '@typescript-eslint/explicit-function-return-type': 'error', // Требует явного указания типа возвращаемого значения
    '@typescript-eslint/explicit-module-boundary-types': 'error', // Требует указания типов на границе модулей
    '@typescript-eslint/no-explicit-any': 'error', // Запрещает использовать any
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Предупреждение о неиспользуемых переменных, кроме тех, которые начинаются с "_"
    '@typescript-eslint/strict-boolean-expressions': 'error', // Ужесточает проверку булевых выражений
    '@typescript-eslint/no-inferrable-types': 'error', // Запрещает избыточное указание типа, если он выводится автоматически
    '@typescript-eslint/no-non-null-assertion': 'error', // Запрещает использование non-null assertion
    '@typescript-eslint/prefer-optional-chain': 'error', // Предлагает использовать опциональную цепочку вместо длинных цепочек с проверками
    '@typescript-eslint/prefer-nullish-coalescing': 'error', // Предлагает использовать оператор ?? вместо || для значений null/undefined
  },
};
