import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import globals from "globals";
import prettier from "eslint-config-prettier";

export default [
	{
		ignores: ["node_modules/", "dist/", ".astro/"],
	},

	js.configs.recommended,

	...tseslint.configs.recommended,

	...astro.configs.recommended,

	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},
		},
	},

	prettier,
];
