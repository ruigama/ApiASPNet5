function JsonPost() {

    const utl = "https://localhost:5001/cliente";

    
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

    console.log(parametros);

    $.ajax({
        type: 'POST',
        data: JSON.stringify(parametros),
        url: "https://localhost:5001/cliente",
        contentType: "application/json"
        
    }).done(function (res) {
        console.log('res', res);
        // Do something with the result :)
    });

}