<script lang="ts">
    // Dependency Imports
    import type { Editor } from '@tiptap/core';

    // Local Imports
	import type { MarkText, Command, Level } from '$lib/EditorHelpers/EditorHelpers';
	import ChipButton from './ChipButton.svelte';

    // Props
    export let editor: Editor;
    export let markup: MarkText | undefined;
    export let command: Command | undefined;

    // Locals

    //Handlers
    function handleHeading(event: Event ){
        const button = event.target as HTMLButtonElement;
        console.log(event);
        return command?.Heading(parseInt(button.getAttribute('data-param') as string) as Level);
    }

    const handleParagraph = (event: Event) => command?.Paragraph();
    const handleOrderedList = () => command?.OrderedList();
    const handleBulletList = () => command?.BulletList();
    const handleBold = () => markup?.Bold('Toggle');

    // Reactives
    //TODO: Convert to handling active in class.
    $: headingsActive = (name: string, args?:{level: number}) => editor?.isActive(name, args) ? '!variant-filled-primary !ring-2 !ring-secondary-300/30' : '';
    $: buttonClasses = 'btn-sm variant-ringed-tertiary ring-2 !rounded-md hover:variant-filled-secondary hover:ring-2 hover:ring-secondary-300/30';
</script>

<nav class="variant-glass-primary shadow-even shadow-surface-900/70 h-full flex flex-col items-center gap-2 p-2 rounded-md">
    {#if editor}
        <div class="text-formatting grid grid-cols-2 shadow-even shadow-black/10 rounded-md p-2 gap-2">
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="H1" tooltip="Insert or apply a heading one" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="H2" tooltip="Insert or apply a heading two" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="H3" tooltip="Insert or apply a heading three" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="Pa" tooltip="Insert or apply a paragraph" class="chip" />
            <hr class="!border-t-2 !border-surface-900/30 rounded-full">
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="B" tooltip="Insert or apply bold markup" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="I" tooltip="Insert or apply italic markup" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="U" tooltip="Insert or apply underline markup" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="S" tooltip="Insert or apply strikethrough markup" class="chip" />
            <hr class="!border-t-2 !border-surface-900/30 rounded-full">
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="</>" tooltip="Insert or apply inline code style" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="🔗" tooltip="Insert a link" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="📷" tooltip="Adds a new image" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent='""' tooltip="Creates a block Quote, or transforms selection into an blockquote." class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="->" tooltip="Indents selection in a level" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="<-" tooltip="Outdents selection out a level" class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="1." tooltip="Creates an ordered List, or transforms selection into an ordered list." class="chip" />
            <ChipButton background="variant-ringed" hover="hover:variant-filled-surface" textContent="•" tooltip="Creates a bulleted List, or transforms selection into an bulleted list." class="chip" />
        </div>
    {/if}
</nav>

<!-- <button class="chip" class="{buttonClasses} {headingsActive('heading', { level: 1 })}" on:click={handleHeading} data-param="1">Heading 1</button>
<button class="chip" class="{buttonClasses} {headingsActive('heading', { level: 2 })}" on:click={handleHeading} data-param="2">Heading 2</button>
<button class="chip" class="{buttonClasses} {headingsActive('heading', { level: 3 })}" on:click={handleHeading} data-param="3">Heading 3</button>
<button class="chip" class="{buttonClasses} {headingsActive('paragraph', undefined)}" on:click={handleParagraph}>Paragraph</button>
<button class="chip" class="{buttonClasses} {headingsActive('orderedList', undefined)}" on:click={handleOrderedList}>Ordered List</button>
<button class="chip" class="{buttonClasses} {headingsActive('bulletList', undefined)}" on:click={handleBulletList}>Bulleted List</button>
<span class="divider-vertical border-l-2 !border-white m-0" />
<button class="chip" class="{buttonClasses} {headingsActive('bold', undefined)} on:click={handleBold}">Bold</button> -->
