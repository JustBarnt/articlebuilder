/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{html,js,svelte,ts}', require('path').join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}')],
	theme: {
		extend: {
            boxShadow:{
                'even': '0 3px 20px rgb(var(--color-surface-900) / 0.25), 0 4px 10px -3px rgb(var(--color-surface-900) / 0.25)',
                'innerXl': 'inset 0 7px 13px -3px rgb(0 0 0 / 0.33), inset 0 6px 7px -4px rgb(0 0 0 / 0.33)',
                'innerBtn': 'inset 0 5px 8px -2px rgb(0 0 0 / 0.33), inset 0 3px 6px -2px rgb(0 0 0 / 0.33)',
                'sidebarLeft': '7px 0px 20px 0px rgb(var(--color-surface-900) / 0.25), 7px 0px 20px 0px rgb(var(--color-surface-900) / 0.25)'
            }
        },
	},
	plugins: [require('@tailwindcss/forms'),require('@tailwindcss/typography'),...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()],
}

/* --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color); */
