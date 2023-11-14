var listaDeUsuarios = [
    {
        nome: 'admin',
        data_nascimento: '01/01/2022',
        email: 'admin@admin.com',
        senha: 'admin'
    }
];


function visualizar() {
    let area_login = document.getElementById("area-login")
    let area_cadastro = document.getElementById("area-cadastro")

    area_login.classList.toggle("esconder")
    area_cadastro.classList.toggle("esconder")
}

function validarUsuario() {

    let login = document.getElementById('login').value;
    let senha = document.getElementById('password').value;
    let teste = false


    console.table(listaDeUsuarios)
    console.log(login,senha);

    listaDeUsuarios.forEach(usuario => {
        if (usuario.email == login && usuario.senha == senha) {
            teste = true
        }
    })

    if (teste == true) {
        alert('Login feito com sucesso.')
        window.location.href = './paginas/home.html';

    } else {
        alert('Error')
    }
}




function cadastrarUsuarios() {

    let name = document.getElementById('nome').value;
    let date = document.getElementById('data_nascimento').value;
    let login = document.getElementById('e-mail').value;
    let password = document.getElementById('cadastro_senha').value;
    let password2 = document.getElementById('cadastro_senha2').value;

    if (password != password2) {
        alert('As senhas digitadas não são iguais. Digite novamente.')
        return
    }

    var novoUsuario = {
        nome: name,
        data_nascimento: date,
        email: login,
        senha: password
    }

    listaDeUsuarios.push(novoUsuario)
    console.table(listaDeUsuarios);

    alert('Usuario cadastrado com sucesso')

    document.getElementById('nome').value = '';
    document.getElementById('data_nascimento').value = '';
    document.getElementById('e-mail').value = '';
    document.getElementById('cadastro_senha').value = '';
    document.getElementById('cadastro_senha2').value = '';
    
    visualizar()
}
