import {tween} from "./tween.js";

//tweenColor function ! (tween on R,G, & B of two different colors!)
    //col1, col2 : HEXADECIMAL STRING
export function tweenColors(col1,col2,t){
    //isolate col1&col2 RGB components
    col1={
        r: parseInt(col1.substring(1, 3), 16),
        g: parseInt(col1.substring(3, 5), 16),
        b: parseInt(col1.substring(5, 7), 16)
    };
    col2={
        r: parseInt(col2.substring(1, 3), 16),
        g: parseInt(col2.substring(3, 5), 16),
        b: parseInt(col2.substring(5, 7), 16)
    };
    //create finalCol utilizing `tween`, rgb, & `t`
    let finalCol = {
        r: tween(col1.r,col2.r,t),
        g: tween(col1.g,col2.g,t),
        b: tween(col1.b,col2.b,t),
    }

    //convert back to HEX
    let finalColHex = "#" + [finalCol.r, finalCol.g, finalCol.b]
        .map(c => Math.round(c).toString(16).padStart(2, "0"))
        .join("");

    // Print using RGB directly
    console.log(
    `\x1b[38;2;${Math.round(finalCol.r)};${Math.round(finalCol.g)};${Math.round(finalCol.b)}m${Math.round(t * 100)}% cooked\x1b[0m`
);
}