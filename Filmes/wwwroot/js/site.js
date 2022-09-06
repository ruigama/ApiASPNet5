const uri = 'https://localhost:5001/cliente';
let todos = [];

function getItems() {
    fetch(uri)
        .then(response => response.json())
        .then(data => _displayItems(data))
        .catch(error => console.error('Unable to get items.', error));

}

function addItem() {
    
    fetch(uri, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(item)
    })
        .then(response => response.json())
        .then(() => {
            getItems();
            addNameTextbox.value = '';
        })
        .catch(error => console.error('Unable to add item.', error));
}

function deleteItem(id)
{
    const btnExcluir = id;
    const url = 'https://localhost:5001/cliente/' + btnExcluir;
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    fetch(url, options).then(data => {
        if (data.ok) {
            alert("Cliente deletado com sucesso!");
            getItems();
        }
        else {
            throw new Error(data.statusText);
        }
    }).catch((error) => {
        alert("Erro ao deletar cliente", error);

    });
}

function _displayItems(data) {

    const templateRows = data.map(data => (
        `
            <tr>
                <td>${data.nome}</td>
                <td>${data.email}</td>
                <td>${data.telefone}</td>
                <td>${data.cidade}</td>
                <td>${data.uf}</td>
                <td><a href='./Cliente/View/novoCliente.html?id=${data.id}' class="btn btn-warning btn-sm">Editar</a></td>
                <td><button type="submit" id="btnExcluir" class="btn btn-danger btn-sm" onclick="deleteItem(${data.id})">Excluir</button></td>
            </tr>        

        `    
    ));
    document.getElementById("example").innerHTML = templateRows.join('');
    
}   

getItems();