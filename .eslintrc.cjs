module.exports = {
	root: true,
	env: { browser: true, es2020: true },
	extends: [
		'eslint:recommended',
		'plugin:@typescript-eslint/recommended',
		'plugin:import/recommended',
		'plugin:jsx-a11y/recommended',
		'plugin:react/recommended',
		'plugin:react/jsx-runtime',
		'plugin:react-hooks/recommended',
		'prettier'
	],
	ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
	parser: '@typescript-eslint/parser',
	settings: {
		react: {
			version: 'detect' // auto-detect React version from package.json.
		},
		'import/parsers': {
			'@typescript-eslint/parser': ['.ts', '.tsx'] // use typescript-eslint parser for .ts|tsx files.
		},
		'import/resolver': {
			typescript: {
				project: './tsconfig.eslint.json',
				alwaysTryTypes: true // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`.
			}
		}
	},
	rules: {}
};
