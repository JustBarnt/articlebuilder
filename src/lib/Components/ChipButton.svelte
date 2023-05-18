<script lang='ts'>
    // Props

    /** Sets the text name for the button*/
    export let textContent: string = 'Unnamed';
    /** Sets data attribute for the tooltip text */
    export let tooltip: string = '';
    /** Sets the background color for the button */
    export let background: string = 'variant-filled-surface';
    /** Sets the hover color for the button */
    export let hover: string = 'hover:variant-ghost-surface';
    /** Sets the roundedness of the button */
    export let rounding: string = 'rounded-md';

    // Reactives
    $: classesBase = `${background} ${hover} ${rounding} ${$$props.class ? $$props.class : ''}`;
</script>

<button data-tooltip={tooltip} class="{classesBase} font-semibold text-sm w-8 h-8"> {textContent} </button>
