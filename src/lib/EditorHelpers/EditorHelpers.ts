//@tiptap imports
import type { Editor } from "@tiptap/core";
import { MarkText } from "./Markdown";
import { Command } from './Command'

//* Declared Type Module
/** Settings for link markup */
export declare type LinkSettings = {
    /** The URL to the link */
    href: string, 
    /** Optional, target should be how the window opens, be that a new window or same tab. */
    target?: string
};

/** All heading levels */
export declare type Level = 1 | 2 | 3 | 4 | 5 | 6;

/** Image Settings */
export declare type ImageSettings = {
    /** URL to the image source */
    src: string, 
    /** Alt text depicting the image */
    alt?: string, 
    /** Title of the image */
    title?: string
};

/** Commands for table creation */
export declare type TableCommands = 'TableAdd' | 'ColumnBefore' | 'ColumnAfter' | 'RowBefore' | 'RowAfter' | 'TableDelete' | 'ColumnDelete' | 'RowDelete' | 'MergeCells' | 'SplitCell' | 'ToggleHeaderColumn' | 'ToggleHeaderRow' | 'ToggleHeaderCell' | 'MergeOrSplit' | 'FixTables';

/** Settings for inserting a table */
export declare type TableCreationSettings = {
    /** Number of rows to create */
    rows: number;
    /** Number of columns to create */
    cols: number;
    /** Boolean flag indicating if the table should have a header row */ 
    withHeaderRow: boolean;
};

/** Basic commands for toggling, setting, and un-setting marks and some nodes. */
export declare type BasicCommands = 'Set'|'Toggle'|'Unset';

export { MarkText, Command };
