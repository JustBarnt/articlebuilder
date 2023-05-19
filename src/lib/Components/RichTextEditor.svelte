<script lang="ts">
    // Svelte Imports
    import { onMount, onDestroy } from 'svelte';

    // Third-party Imports
    import { Editor } from '@tiptap/core';
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
    import SimpleBar from 'simplebar';
    import 'simplebar/dist/simplebar.css';
    //import ResizeObserver from 'resize-observer-polyfill';

    //Local Import
    import { MarkText, Command, type Level } from '$lib/EditorHelpers/EditorHelpers';
    import RichTextEditorNav from './RichTextEditorNav.svelte';

    //window.ResizeObserver = ResizeObserver;

    //Locals
    let element: HTMLDivElement;
    let editor: Editor;
    let markup: MarkText | undefined;
    let command: Command | undefined;

    // Lifecycle
    onMount(() => {
        editor = new Editor({
            element: element,
            extensions: [
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
                    lowlight
                })
            ],
            parseOptions: {},
            editorProps: {
                attributes: {
                    class: 'prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-3 focus:outline-none max-w-full'
                }
            },
            content: 'Get to writing!',
            onTransaction: () => {
                editor = editor;
            },
            injectCSS: false
        });

        markup = new MarkText(editor);
        command = new Command(editor);
    });

    onDestroy(() => {
        if (editor) {
            editor.destroy();
            markup = undefined;
            command = undefined;
        }
    });
</script>

<svelte:head >
    <noscript>
        <style>
          /**
          * Reinstate scrolling for non-JS clients
          */
          .simplebar-content-wrapper {
            scrollbar-width: auto;
            -ms-overflow-style: auto;
          }
      
          .simplebar-content-wrapper::-webkit-scrollbar,
          .simplebar-hide-scrollbar::-webkit-scrollbar {
            display: initial;
            width: initial;
            height: initial;
          }
        </style>
      </noscript>
</svelte:head>

<!-- https://remixicon.com/ -->

<main id="Shell" class="flex h-full w-full space-x-2 rounded-md p-2">
    <div class="flex h-full w-full flex-auto gap-2 overflow-hidden p-2">
        <aside id="Toolbar" class="w-28 flex-none">
            <RichTextEditorNav {editor} {markup} {command} />
        </aside>
        <content id="EditorContent" class="h-full w-full overflow-x-hidden rounded-md bg-primary-700/40 shadow-lg shadow-surface-900/70">
            <div class="w-full h-full ring-2 ring-tertiary-500 p-4" bind:this={element} data-simplebar/>
            </content>
        </div>
</main>
