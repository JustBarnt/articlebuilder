<script lang='ts'>
    // Svelte Imports
    import {onMount, onDestroy} from 'svelte';

    // Skeleton Imports
    import { AppShell } from '@skeletonlabs/skeleton'; 

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
	import RichTextEditorNav from './RichTextEditorNav.svelte';

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
</script>

<AppShell class="!overflow-visible w-full p-2 space-y-4 rounded-md" slotSidebarLeft="!overflow-visible p-2 w-28" regionPage="hide-scrollbar">
    <svelte:fragment slot="sidebarLeft">
        <RichTextEditorNav editor={editor} markup={markup} command={command} />
    </svelte:fragment>

    <content class="variant-glass-primary w-full h-full" >
        <div class="w-full h-full" bind:this={element} />
    </content>
</AppShell>
