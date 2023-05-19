<script lang="ts">
	import { formatClass } from "$lib/Utils/Utils";

    /** 
     * Set the width of the divider 
     * @example '!border-t-4' 
     */
    export let width: string = '!border-t-2'
    /**
     * Set the color of the divider
     * @example '!border-white'
     */
    export let color: string = 'border-surface-900/30'
    /**
     * Set the positioning of the divider (should be relative to grid or flex positioning)
     * @example: Grid - 'grid-col-span' | flex - 'inline-flex place-self-center'
     */
    export let position: string = 'col-span-full';
    /** Set the roundedness of the divider */
    export let rounded: string = 'rounded-full';
    // Reactives
    $: classesBase = `${formatClass('!', width)} ${formatClass('!', color)} ${position} ${rounded}`;
</script>
<hr class="{classesBase} {$$props.class ? $$props.class : ''}">
