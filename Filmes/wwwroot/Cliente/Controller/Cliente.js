editarCliente();

function editarCliente()
{
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("id");
    const url = "https://localhost:5001/cliente/" + myParam;

    $("#btnCadastrar").show();
    $("#btnEditar").hide();

    if (myParam != null) {

        $("#btnCadastrar").hide();
        $("#btnEditar").show();

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        fetch(url, options).then(data => {
            if (data.ok) {
                return data.json();
            }
            else {
                throw new Error(data.statusText);
            }
        }).then(dados => {

            $("#nome").val(dados.nome);
            $("#cpf").val(dados.cpf);
            $("#email").val(dados.email);
            $("#telefone").val(dados.telefone);
            $("#endereco").val(dados.endereco);
            $("#numero").val(dados.numero);
            $("#complemento").val(dados.complemento);
            $("#cep").val(dados.cep);
            $("#bairro").val(dados.bairro);
            $("#cidade").val(dados.cidade);
            $("#uf").val(dados.uf);
            $("#observacoes").val(dados.observacoes);
            $("#id").val(dados.id);
            $("#paginaAtual").text("Edição de Cliente");
        }).catch((error) => {
            alert("Erro ao cadastrar novo cliente", error);

        });
    }
    else
    {
        $("#paginaAtual").text("Cadastro de Novo Cliente");
    }
}



function inserirCliente()
{
    const url = "https://localhost:5001/cliente";

    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cep = document.getElementById('cep').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const observacoes = document.getElementById('observacoes').value;

    let parametros = {
        nome,
        cpf,
        email,
        telefone,
        endereco,
        numero,
        complemento,
        cep,
        bairro,
        cidade,
        uf,
        observacoes
    }

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parametros),
    };

    fetch(url, options).then(data => {
        if (data.ok) {
            return data.json;
        }
        else {
            throw new Error(data.statusText);
        }
    }).then(dados => {
        alert("Novo cliente inserido com sucesso!");
        window.location.href = "../../index.html";
    }).catch((error) => {
        alert("Erro ao cadastrar novo cliente", error);
        
    });

}

function edicaoCliente()
{
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const endereco = document.getElementById('endereco').value;
    const numero = document.getElementById('numero').value;
    const complemento = document.getElementById('complemento').value;
    const cep = document.getElementById('cep').value;
    const bairro = document.getElementById('bairro').value;
    const cidade = document.getElementById('cidade').value;
    const uf = document.getElementById('uf').value;
    const observacoes = document.getElementById('observacoes').value;
    const id = document.getElementById('id').value;

    const url = "https://localhost:5001/cliente/" + id;

    let parametros = {
        id,
        nome,
        cpf,
        email,
        telefone,
        endereco,
        numero,
        complemento,
        cep,
        bairro,
        cidade,
        uf,
        observacoes
    }

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(parametros),
    };

    fetch(url, options).then(data => {
        if (data.ok) {
            return data.json;
        }
        else {
            throw new Error(data.statusText);
        }
    }).then(dados => {
        alert("Cliente editado com sucesso!");
        window.location.href = "../../index.html";

    }).catch((error) => {
        alert("Erro ao editar cliente", error);

    });

}