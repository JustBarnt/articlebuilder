import type { Editor } from "@tiptap/core";
import type { BasicCommands, Level, TableCommands, TableCreationSettings, ImageSettings } from "./EditorHelpers";


export class Command {
    private editor: Editor;
    
    constructor(editor: Editor){
        this.editor = editor;
    }

    /** Allows updating selected text to set or unset as a block quote */
    public BlockQuote(commands: BasicCommands):  boolean {
        switch(commands){
            case 'Set':
                return this.editor.commands.setBlockquote();
            case 'Toggle':
                return this.editor.commands.toggleBlockquote();
            case 'Unset':
                return this.editor.commands.unsetBlockquote();
            default:
                return this.editor.commands.setBlockquote();
        }
    }

    /** Toggles selected text to be a bulleted list */
    public BulletList():  boolean {
        return this.editor.commands.toggleBulletList();
    }

    /** Allows updating selected text to set or unset as a code block */
    public CodeBlock(commands: BasicCommands):  boolean {
        switch(commands){
            case 'Set':
                return this.editor.commands.setCodeBlock();
            case 'Toggle':
                return this.editor.commands.toggleCodeBlock();
            case 'Unset':
                throw new TypeError('CodeBlock doesn\'t support type `Unset`');
            default:
                return this.editor.commands.setCodeBlock();
        }
    }

    /** Sets a hardbreak */
    public HardBreak():  boolean {
        return this.editor.commands.setHardBreak();
    }

    /** Sets the heading to the specified level */
    public Heading(level: Level):  boolean {
        return this.editor.commands.toggleHeading({level: level});
    }

    /** Sets a horizontal rule */
    public HorizontalRule():  boolean {
        return this.editor.commands.setHorizontalRule();
    }

    /** Sets an image with the provided image, with optional alt tag and title */
    public Image(imageSettings: ImageSettings):  boolean {
        return this.editor.commands.setImage(imageSettings);
    }

    /** 
     * Allows bullet or ordered list formating. 
     * @argument Split - Splits the list based of where the cursor is
     * @argument Sink - Moves the list item down one indent level
     * @argument Lift - Moves the list item up one indent level
     * */
    public ListItem(itemName = 'listItem', commands: 'Split' | 'Sink' | 'Lift'):  boolean {
        switch(commands){
            case 'Split':
                return this.editor.commands.splitListItem(itemName);
            case 'Sink':
                return this.editor.commands.sinkListItem(itemName);
            case 'Lift':
                return this.editor.commands.liftListItem(itemName);
            default:
                return this.editor.commands.splitListItem(itemName);
        }
    }

    /** Toggles an ordered (numbered) list */
    public OrderedList():  boolean {
        return this.editor.commands.toggleOrderedList();
    }

    /** Sets the selected text as a paragraph */
    public Paragraph():  boolean {
        return this.editor.commands.setParagraph();
    }

    /** Applies CRUD operations for deleting a table, or its contents. */
    public Table(commands: TableCommands, tableSettings: TableCreationSettings = {rows: 3, cols: 3, withHeaderRow: true}):  boolean { 
        switch (commands) {
            case 'TableAdd':
                return this.editor.commands.insertTable(tableSettings);
            case 'ColumnBefore':
                return this.editor.commands.addColumnBefore();
            case 'ColumnAfter':
                return this.editor.commands.addColumnAfter();
            case 'RowBefore':
                return this.editor.commands.addRowBefore();
            case 'RowAfter':
                return this.editor.commands.addRowAfter();
            case 'TableDelete':
                return this.editor.commands.deleteTable();
            case 'ColumnDelete':
                return this.editor.commands.deleteColumn();
            case 'RowDelete':
                return this.editor.commands.deleteRow();
            case 'MergeCells':
                return this.editor.commands.mergeCells();
            case 'SplitCell':
                return this.editor.commands.splitCell();
            case 'ToggleHeaderColumn':
                return this.editor.commands.toggleHeaderColumn();
            case 'ToggleHeaderRow':
                return this.editor.commands.toggleHeaderRow();
            case 'ToggleHeaderCell':
                return this.editor.commands.toggleHeaderCell();
            case 'MergeOrSplit':
                return this.editor.commands.mergeOrSplit();
            case 'FixTables':
                return this.editor.commands.fixTables();
            default:
                return this.editor.commands.insertTable(tableSettings);
          }
    }
  }
