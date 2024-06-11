let students = [
{
    name: "Raul",
    nota1: 10,
    nota2: 8
},
{
    name: "João",
    nota1: 5,
    nota2: 7.5
},
{
    name: "Marcio",
    nota1: 10,
    nota2: 10
}
]
function calcularMedia(nota1, nota2) {
    return (nota1 + nota2) / 2}
function verificarSucesso(media) {
        return media >= 7}
function processarAlunos(students) {
    for (var i = 0; i < students.length; i++) {
        var name = students[i];
        var media = calcularMedia(name.nota1, name.nota2);
        var sucesso = verificarSucesso(media);
        if (sucesso) {
            alert(name.name + " obteve sucesso com média " + media.toFixed(2));
        } else {
            alert(name.name + " não obteve sucesso com média " + media.toFixed(2));
        }
    }
}
processarAlunos(students);