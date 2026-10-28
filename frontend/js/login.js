const btn_login = document.getElementById('btnLogin')
const resposta = document.getElementById('res')

btn_login.addEventListener('click', (e) => {
    e.preventDefault()

    const email = document.getElementById('email').value
    const senha = document.getElementById('senha').value

    const valores = {
        email: email,
        senha: senha
    }

    fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
        .then(res => res.json())
        .then(dados => {
            resposta.innerHTML = `<p>${dados.message}</p>`
            if (dados.token) {
                localStorage.setItem('token', dados.token)
                localStorage.setItem('nomeFuncionario', dados.nome)
            }
        })
        .catch(err => {
            console.error('Erro no login:', err)
            resposta.innerHTML = `<p>Erro ao tentar conectar com o servidor.</p>`
        })
})
