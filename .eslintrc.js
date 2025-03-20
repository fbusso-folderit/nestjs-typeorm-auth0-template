module.exports = {
   parser: '@typescript-eslint/parser',
   parserOptions: {
      project: 'tsconfig.json',
      tsconfigRootDir: __dirname,
      sourceType: 'module',
   },
   plugins: ['@typescript-eslint/eslint-plugin', 'import'],
   extends: [
      'eslint:recommended',
      'plugin:@typescript-eslint/recommended',
      'plugin:prettier/recommended',
      'plugin:import/recommended',
      'plugin:import/typescript',
   ],
   root: true,
   env: {
      node: true,
      jest: true,
   },
   ignorePatterns: ['.eslintrc.js', 'healthcheck.js'],
   rules: {
      'prettier/prettier': 'warn',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      'max-len': ['warn', { code: 120 }],
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'warn',
      semi: ['error', 'always'],
      camelcase: ['warn'],
      'sort-imports': [
         'error',
         {
            ignoreCase: false,
            ignoreDeclarationSort: true,
            ignoreMemberSort: false,
            memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
            allowSeparatedGroups: true,
         },
      ],
      'import/no-unresolved': 'error',
      'import/order': [
         'warn',
         {
            groups: ['builtin', 'external', 'internal', ['sibling', 'parent'], 'index', 'unknown'],
            'newlines-between': 'always',
            alphabetize: {
               order: 'asc',
               caseInsensitive: true,
            },
         },
      ],
   },
};
