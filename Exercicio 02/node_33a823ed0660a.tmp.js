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
function processarAlunos(listaAlunos) {
    for (var i = 0; i < listaAlunos.length; i++) {
        var aluno = listaAlunos[i];
        var media = calcularMedia(aluno.nota1, aluno.nota2);
        var sucesso = verificarSucesso(media);
        if (sucesso) {
            alert(aluno.nome + " obteve sucesso com média " + media.toFixed(2));
        } else {
            alert(aluno.nome + " não obteve sucesso com média " + media.toFixed(2));
        }
    }
}
processarAlunos(listaAlunos);