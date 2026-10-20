function cadastrarAluno() {

    let nome = document.getElementById("nome").value.trim();

    let idade = Number(document.getElementById("idade").value);

    let email = document.getElementById("email").value.trim();

    let curso = document.getElementById("curso").value;

    let mensagem = document.getElementById("mensagem");


    // LIMPA A MENSAGEM ANTERIOR

    mensagem.innerHTML = "";

    mensagem.className = "";


    /*
       VALIDAÇÃO DO NOME
    */

    if (nome === "") {

        mensagem.innerHTML = "Informe o nome do aluno.";

        mensagem.className = "erro";

        return;

    }


    if (!Number.isFinite(idade) || idade < 14 || idade > 100) {

        mensagem.innerHTML =
            "A idade deve estar entre 14 e 100 anos.";

        mensagem.className = "erro";

        return;

    }


    if (!email.includes("@")) {

        mensagem.innerHTML =
            "Informe um e-mail válido com @.";

        mensagem.className = "erro";

        return;

    }

    if (curso === "") {

        mensagem.innerHTML =
            "Selecione um curso.";

        mensagem.className = "erro";

        return;

    }


    /*
       CADASTRO DO ALUNO
    */

    adicionarNaTabela(
        nome,
        idade,
        email,
        curso
    );


    mensagem.innerHTML =
        "Aluno cadastrado com sucesso!";

    mensagem.className = "sucesso";


    limparCampos();

}



/*
    ADICIONA O ALUNO NA TABELA
*/

function adicionarNaTabela(nome, idade, email, curso) {

    let tabela =
        document.getElementById("listaAlunos");


    let linha =
        tabela.insertRow();


    let colunaNome =
        linha.insertCell(0);

    let colunaIdade =
        linha.insertCell(1);

    let colunaEmail =
        linha.insertCell(2);

    let colunaCurso =
        linha.insertCell(3);


    colunaNome.textContent = nome;

    colunaIdade.textContent = idade;

    colunaEmail.textContent = email;

    colunaCurso.textContent = curso;

}



/*
    LIMPA OS CAMPOS
*/

function limparCampos() {

    document.getElementById("nome").value = "";

    document.getElementById("idade").value = "";

    document.getElementById("email").value = "";

    document.getElementById("curso").value = "";

}