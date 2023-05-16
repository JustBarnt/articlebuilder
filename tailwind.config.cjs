/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
            boxShadow:{
                'innerXl': 'inset 0 7px 13px -10px rgb(0 0 0 / 0.33), inset 0 6px 7px -4px rgb(0 0 0 / 0.33)',
            }
        },
	},
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}
