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

function deleteItem(id) {
    
}

function displayEditForm(id) {
    
}

function updateItem() {
    
}

function closeInput() {
    
}

function _displayCount(itemCount) {
    
}

function _displayItems(data) {

    const templateRows = data.map(data => (
        `
            <tr>
                <td><a href='./Cliente/View/novoCliente.html?id=${data.id}'>${data.id}</a></td>
                <td>${data.nome}</td>
                <td>${data.email}</td>
                <td>${data.telefone}</td>
                <td>${data.cidade}</td>
                <td>${data.uf}</td>
            </tr>        

        `    
    ));
    document.getElementById("example").innerHTML = templateRows.join('');
    
}   

getItems();