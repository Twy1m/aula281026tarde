const token = localStorage.getItem('token')

if (!token) {
    location.href = '../index.html'
}

const btn_cadastrar = document.getElementById('btnList')
const resposta = document.getElementById('res')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()

    fetch('http://localhost:3000/motoristas', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    })
        .then(res => {
            if (!res.ok) {
                localStorage.clear()
                alert('Faça login novamente, tempo expirado!')
                location.href = '../index.html'
                throw new Error('Sessão expirada')
            }
            return res.json()
        })
        .then(dados => {
            res.innerHTML = ``
            res.innerHTML += `
            <table>
            ${criarThead()}
            ${criarTbody(dados)}
            </table>`
        })
        .catch(err => {
            console.error('Erro ao listar motorista:', err)
            resposta.innerHTML = '<p>Erro ao tentar conectar com o servidor.</p>'
        })
})


function criarTbody(dados) {
    let corpo = '<tbody>'
    dados.forEach(el => {
        corpo += `<tr>`
        corpo += `<td>${el.codMotorista}</td>`
        corpo += `<td>${el.nome}</td>`
        corpo += `<td>${el.cnh}</td>`
        corpo += `<td>${el.cpf}</td>`
        corpo += `<td>${el.telefone}</td>`
        corpo += `</tr>`
    })
    corpo += `</tbody>`
    return corpo
}

function criarThead() {
    return `
        <thead>
            <tr>
                <th>Código</th>
                <th>Nome</th>
                <th>CNH</th>
                <th>CPF</th>
                <th>Telefone</th>
            </tr>
        </thead>
    `
}


