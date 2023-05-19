import type { CssClasses } from "@skeletonlabs/skeleton"
import type { Selectors } from "../types"


export function formatClass(selector: Selectors = '!', cssClass: CssClasses) {
    const firstChar = cssClass.charAt(0);

    if(firstChar === selector) return cssClass;
    
    return `${selector}${cssClass}`;
}
