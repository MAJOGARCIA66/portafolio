//console.log("Hola Mundo! desde la conosola");
var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true
});

typewriter.typeString('Desarrolladora Frontend Jr. | Programadora')
    .pauseFor(2500)
    .deleteAll()
    .typeString(' Si lo puedes imaginar,lo puedes Programar!')
    .pauseFor(2500)
    .deleteChars(6)
    .start();