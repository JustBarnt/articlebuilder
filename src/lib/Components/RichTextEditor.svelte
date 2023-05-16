<script lang='ts'>
    // Svelte Imports
    import {onMount, onDestroy} from 'svelte';

    // TipTap Imports
    import {Editor} from '@tiptap/core';
    import StarterKit from '@tiptap/starter-kit';
    import Table from '@tiptap/extension-table';
    import TableHeader from '@tiptap/extension-table-header';
    import TableRow from '@tiptap/extension-table-row';
    import TableCell from '@tiptap/extension-table-cell';
    import Link from '@tiptap/extension-link';
    import Placeholder from '@tiptap/extension-placeholder';
    import Image from '@tiptap/extension-image';
    import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight';
    import Underline from '@tiptap/extension-underline';
    import { lowlight } from 'lowlight/lib/core';

    //Local Import
    import { MarkText, Command, type Level } from '$lib/EditorHelpers/EditorHelpers';

    //Locals
    let element: HTMLDivElement;
    let editor: Editor;
    let markup: MarkText | undefined;
    let command: Command | undefined;

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
                Image,
                Underline,
                CodeBlockLowlight.configure({
                    lowlight,
                }),
            ],
            parseOptions:{
                
            },
            editorProps:{
                attributes:{
                    class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-3 focus:outline-none w-full h-full'
                }
            },
            content: 'Get to writing!',
            onTransaction: () => {
                editor = editor;
            },
            injectCSS: false,
        });

        markup = new MarkText(editor);
        command = new Command(editor);
    });

    onDestroy(()=>{
        if(editor){
            editor.destroy();
            markup = undefined;
            command = undefined;
        }
    });

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

<main class="variant-glass-secondary ring-2 ring-surface-500/70 h-4/5 w-full p-4 space-y-4 flex flex-col rounded-md">
    <nav class="list-nav flex flex-row space-x-2">
        {#if editor}
            <button class="{buttonClasses} {headingsActive('heading', { level: 1 })}" on:click={handleHeading} data-param="1">Heading 1</button>
            <button class="{buttonClasses} {headingsActive('heading', { level: 2 })}" on:click={handleHeading} data-param="2">Heading 2</button>
            <button class="{buttonClasses} {headingsActive('heading', { level: 3 })}" on:click={handleHeading} data-param="3">Heading 3</button>
            <button class="{buttonClasses} {headingsActive('paragraph', undefined)}" on:click={handleParagraph}>Paragraph</button>
            <button class="{buttonClasses} {headingsActive('orderedList', undefined)}" on:click={handleOrderedList}>Ordered List</button>
            <button class="{buttonClasses} {headingsActive('bulletList', undefined)}" on:click={handleBulletList}>Bulleted List</button>
            <span class="divider-vertical border-l-2 !border-white m-0" />
            <button class="{buttonClasses} {headingsActive('bold', undefined)} on:click={handleBold}">Bold</button>
        {/if}
    </nav>
    
    <content class="variant-glass-primary w-full h-full shadow-innerXl ring-2 ring-tertiary-500 ring-opacity-50 rounded-md" >
        <div class="w-full h-full" bind:this={element} />
    </content>
</main>
