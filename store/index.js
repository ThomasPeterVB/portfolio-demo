import { reactive, ref } from "vue"

const colors = reactive({
    colfocus: '#833824',
    colhighlight: '#e0603e',
    colaccent: '#babec4',
    colbackground: '#1d1d1d'
})

function changeColor(color, value) {
    colors[color] = value
}

var currentImage = 'csharp-raw.png'
var imageList = ['vue-raw.png', 'react-raw.png', 'csharp-raw.png']
function nextImage(n){
    let next = imageList.indexOf(currentImage) + n === -1 ? imageList.length - 1 : (imageList.indexOf(currentImage) + n) % imageList.length
    currentImage = imageList[next]
    return imageList[next]
}

var skewAngle = ref('-10deg')
var colorarray = [
    {col: '#833824', highlight: '#e0603e'},
    {col: '#176708', highlight: '#1ed760'},
    {col: '#273c8c', highlight: '#3e60e0'},
    {col: '#832438', highlight: '#e03e60'},
    {col: '#80802e', highlight: '#e7e754'}
]

function changeSkew(deg) {
    skewAngle.value = deg
}

var submitStatus = ref(false)
function changeSubmitStatus() {
    submitStatus.value = true
}

function rotateColor(n) {
    var index = colorarray.map(color => color.highlight).indexOf(colors.colhighlight)
    var next = (index + n) % colorarray.length === -1 ? colorarray.length-1 : (index + n) % colorarray.length
    colors.colfocus = colorarray[next].col
    colors.colhighlight = colorarray[next].highlight
}

export {
    colors,
    changeColor,
    rotateColor,
    skewAngle,
    changeSkew,
    currentImage,
    imageList,
    nextImage,
    submitStatus,
    changeSubmitStatus
}
