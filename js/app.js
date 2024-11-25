

let btnDupTam = document.getElementById("dupTam");

btnDupTam.addEventListener('click', function() {
    
    var elemento = document.getElementById("miElemento");
    
    var fontSize = window.getComputedStyle(elemento).fontSize;
    
    var fontSizeValue = parseFloat(fontSize);
    
    var newFontSize = fontSizeValue * 2;
    
    elemento.style.fontSize = newFontSize + "px";
    
});
