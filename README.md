.eslintrs.js

rules: {
    '@typescript-eslint/interface-name-prefix': 'off',                           // Оставьте это выключенным, если не требуется строгое соблюдение префиксов
    '@typescript-eslint/explicit-function-return-type': 'error',                 // Требует явного указания типа возвращаемого значения
    '@typescript-eslint/explicit-module-boundary-types': 'error',                // Требует указания типов на границе модулей
    '@typescript-eslint/no-explicit-any': 'error',                               // Запрещает использовать any
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // Предупреждение о неиспользуемых переменных, кроме тех, которые начинаются с "_"
    '@typescript-eslint/strict-boolean-expressions': 'error',                    // Ужесточает проверку булевых выражений
    '@typescript-eslint/no-inferrable-types': 'error',                           // Запрещает избыточное указание типа, если он выводится автоматически
    '@typescript-eslint/no-non-null-assertion': 'error',                         // Запрещает использование non-null assertion
    '@typescript-eslint/prefer-optional-chain': 'error',                         // Предлагает использовать опциональную цепочку вместо длинных цепочек с проверками
    '@typescript-eslint/prefer-nullish-coalescing': 'error',                     // Предлагает использовать оператор ?? вместо || для значений null/undefined
  },

  .prettierrc

  {
  "singleQuote": true,
  "trailingComma": "all",
  "tabWidth": 2,           // Ширина табуляции, 2 пробела – стандарт для большей читаемости
  "semi": true,            // Завершение всех строк точкой с запятой
  "printWidth": 80,        // Лимит длины строки (80 символов помогает поддерживать читаемость)
  "arrowParens": "always", // Добавляет скобки вокруг параметров стрелочных функций, повышая единообразие
  "endOfLine": "lf"        // Унификация окончания строки (LF предпочтителен для большинства ОС)
  }

tsconfig.json

{
  "compilerOptions": {
    "module": "commonjs",
    "declaration": true,
    "removeComments": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2021",
    "sourceMap": true,
    "outDir": "./dist",
    "baseUrl": "./",
    "incremental": true,
    "skipLibCheck": true,
    "strict": true,                           // Включает все строгие проверки
    "strictNullChecks": true,                 // Обязательные проверки на null и undefined
    "noImplicitAny": true,                    // Запрещает неявное использование any
    "strictBindCallApply": true,              // Ужесточает правила вызова bind/call/apply
    "forceConsistentCasingInFileNames": true, // Проверка регистра имен файлов
    "noFallthroughCasesInSwitch": true,       // Защита от ошибки fallthrough в switch
    "noUnusedLocals": true,                   // Сообщение об объявленных, но неиспользованных переменных
    "noUnusedParameters": true,               // Сообщение о неиспользуемых параметрах функций
    "noImplicitReturns": true,                // Требует явного возвращения из функций
    "noImplicitThis": true,                   // Защита от неявного this
    "alwaysStrict": true                      // Включает строгий режим для всех файлов
  }
}


