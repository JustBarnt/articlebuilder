import type { Editor } from "@tiptap/core";
import type { BasicCommands, LinkSettings } from "./EditorHelpers";

export class MarkText {
    private editor: Editor;
    
    constructor(editor: Editor){
        this.editor = editor;
    }

    /** Allows for toggling, setting, or un-setting of bold text */
    public Bold(commands: BasicCommands): boolean{
        switch(commands){
            case 'Set':
                return this.editor.chain().focus().setBold().run();
            case 'Toggle':
                return this.editor.chain().focus().toggleBold();
            case 'Unset':
                return this.editor.commands.unsetBold();
        }
    }

    /** Allows for toggling, setting, or un-setting of code wrapped text */
    public Code(commands: BasicCommands): boolean{
        switch(commands){
            case 'Set':
                return this.editor.commands.setCode();
            case 'Toggle':
                return this.editor.commands.toggleCode();
            case 'Unset':
                return this.editor.commands.unsetCode();
        }
    }

    /** Allows for toggling, setting, or un-setting of italic text */
    public Italic(commands: BasicCommands): boolean{
        switch(commands){
            case 'Set':
                return this.editor.commands.setItalic();
            case 'Toggle':
                return this.editor.commands.toggleItalic();
            case 'Unset':
                return this.editor.commands.unsetItalic();
        }
    }

    /** Allows for toggling, setting, or un-setting of struck-through text */
    public Strike(commands: BasicCommands): boolean{
        switch(commands){
            case 'Set':
                return this.editor.commands.setStrike();
            case 'Toggle':
                return this.editor.commands.toggleStrike();
            case 'Unset':
                return this.editor.commands.unsetStrike();
        }
    }

    /** Allows for toggling, setting, or un-setting of underlined text */
    public Underline(commands: BasicCommands): boolean{
        switch(commands){
            case 'Set':
                return this.editor.commands.setUnderline();
            case 'Toggle':
                return this.editor.commands.toggleUnderline();
            case 'Unset':
                return this.editor.commands.unsetUnderline();
        }
    }

    /** Allows for toggling, setting, or un-setting of hyperlinked text */
    public Link(commands: BasicCommands, linkSettings: LinkSettings): boolean {
        switch(commands){
            case 'Set':
                return this.editor.commands.setLink(linkSettings);
            case 'Toggle':
                return this.editor.commands.toggleLink(linkSettings);
            case 'Unset':
                return this.editor.commands.unsetLink();
            default:
                return this.editor.commands.setLink(linkSettings);
        }
    }
}
