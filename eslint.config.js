import js from '@eslint/js'
import globals from 'globals'
import tseslint from 'typescript-eslint'
import eslintReact from 'eslint-plugin-react'
import eslintReactHooks from 'eslint-plugin-react-hooks'
import eslintReactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-plugin-prettier'
import eslintConfigPrettier from 'eslint-config-prettier'

export default tseslint.config(
	{ ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js', 'build', '.prettierrc.js', 'env.d.ts'] },
	{
		extends: [js.configs.recommended, ...tseslint.configs.recommended],
		files: ['**/*.{ts,tsx,js,jsx}'],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		},
		plugins: {
			'@typescript-eslint': tseslint.plugin,
			react: eslintReact,
			'react-hooks': eslintReactHooks,
			'react-refresh': eslintReactRefresh,
			prettier: prettierPlugin
		},
		rules: {
			...eslintReactHooks.configs.recommended.rules,
			...eslintConfigPrettier.rules,
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'prefer-const': 'error',
			'react/react-in-jsx-scope': 'off',
			quotes: 'off',
			'@typescript-eslint/no-explicit-any': 'off',
			'@typescript-eslint/no-unused-expressions': 'off',
			'no-extra-boolean-cast': 'off',
			'@typescript-eslint/ban-ts-comment': 'off',
			'import/prefer-default-export': 'off',
			'no-unused-vars': 'warn',
			'@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
			'@typescript-eslint/no-empty-object-type': 'off'
		}
	}
)
