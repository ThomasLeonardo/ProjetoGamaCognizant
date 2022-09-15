document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        if(!localStorage.livros) {
            localStorage.setItem("livros", {});
        }
    }
};

let tablLivros = document.getElementById("livros");

document.addEventListener("submit", function(event) {
    var formLivros = event.target;
    var title = formLivros.titulo.value;
    var descricao = formLivros.descricao.value;
    var autor = formLivros.autor.value;
    var editora = formLivros.editora.value;

    var newBookRow = tablLivros.insertRow();

    [title, descricao, autor, editora].forEach(element => {
        var newBookCell = newBookRow.insertCell();
        newBookCell.appendChild(document.createTextNode(element));
    });
});

function apagaLivro(){

}

function alteraLivro(){

}

function consultaLivro(){

}