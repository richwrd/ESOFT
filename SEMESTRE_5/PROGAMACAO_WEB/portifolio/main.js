

/* _________________________________________________________ */
// Função para alterar a cor do elemento SVG
function changeSvgColor(svgElement, color) {
    var svgDoc = svgElement.contentDocument;
    var paths = svgDoc.getElementsByTagName('path');
    for (var i = 0; i < paths.length; i++) {
        paths[i].setAttribute('fill', color);
    }
}

  // Obter todos os elementos <object> com classe "socialsvg"
var svgObjects = document.querySelectorAll('.socialsvg object');

  // Aguardar o carregamento de cada elemento SVG
svgObjects.forEach(function(svgObject) {
    svgObject.addEventListener('load', function() {
      // Alterar a cor do SVG quando clicado
    svgObject.addEventListener('click', function() {
        changeSvgColor(svgObject, 'blue');
    });
    });
});
/* _________________________________________________________ */