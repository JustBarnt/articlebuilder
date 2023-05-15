<script lang='ts'>
    // Svelte Imports
    import {onMount, onDestroy} from 'svelte';

    // Library Imports
    import { Editor, type HTMLElement } from '@tiptap/core';
    import { StarterKit} from '@tiptap/starter-kit';
    import { Table } from '@tiptap/extension-table';
    import { TableRow } from '@tiptap/extension-table-row';
    import { TableHeader } from '@tiptap/extension-table-header';
    import { TableCell } from '@tiptap/extension-table-cell';
    import { Link } from '@tiptap/extension-link';
    import { Placeholder } from '@tiptap/extension-placeholder';
    import { FloatingMenu } from '@tiptap/extension-floating-menu';

    type HtmlEditor = HTMLElement['editor'];


    //Locals
    let element: HTMLDivElement;
    let editor: HtmlEditor;

    // Lifecycle
    onMount(() => {
        editor = new Editor({
            element: element,
            extensions:[
                StarterKit,
                Table,
                TableHeader,
                TableRow,
                TableCell,
                Link,
                Placeholder,
                FloatingMenu
            ],
            content: "Get to writing!",
            onTransaction: () => {
                editor = editor;
            },
            injectCSS: false,

        });
    });

    onDestroy(()=>{
        if(editor)
            editor.destroy();
    });


    // Rich Editor Functions
    const SetH1 = () =>{ 
        editor?.chain().focus().toggleHeading({ level: 1}).run(); 
    }

    // Reactives
    $: classActive = (name: string, args:{level: number}) => editor?.isActive(name, args) ? '!bg-secondary-500' : '';
</script>

<main class="ring-2 ring-surface-500 ring-opacity-70 h-4/5 w-full p-4 space-y-4 flex flex-col">
    <nav class="list-nav flex flex-auto w-full">
        {#if editor}
            <button class="btn {classActive('heading', { level: 1 })}" on:click={SetH1}>H1</button>
            <!-- <button class="btn {buttonActive}" on:click={SetH2}>H2</button>
            <button class="btn {buttonActive}" on:click={SetH3}>H3</button>
            <button class="btn {buttonActive}" on:click={SetH4}>H4</button>
            <button class="btn {buttonActive}" on:click={SetH5}>H5</button>
            <button class="btn {buttonActive}" on:click={SetH6}>H6</button>
            <button class="btn {buttonActive}" on:click={SetP}>¶</button> -->
        {/if}
    </nav>
    
    <content class="bg-secondary-500/30 w-full h-full flex p-2" >
        <div class="h-full w-full" bind:this={element} />
    </content>
</main>
