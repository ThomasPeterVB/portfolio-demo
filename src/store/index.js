import { reactive } from "vue";

const colors = reactive({
    colfocus: '#e0603e',
    colfocustwo: '#833824',
    colaccent: '#babec4',
    colprimary: '#23252c',
    colbackground: '#333',
    colcontrast: '#3e60e0'
})

function changeColor(color, value) {
    colors[color] = value;
}


export {colors, changeColor}