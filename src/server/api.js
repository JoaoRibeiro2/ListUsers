import axios from 'axios';

const api = axios.create({
    baseURL: 'https://itrampoficial.000webhostapp.com/server/controllers/authController.php'
})

export default api;


const url ='https://itrampoficial.000webhostapp.com/server/controllers/authController.php';
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(user)
    }).then(function (response) {
        return response.json();
    }).then(function (response) {
        if (response == 'senha_invalida') {
            console.log(response);
            alert('Senha Inválida')
        }else if(response == 'email_invalido'){
            console.log(response);
            console.log('Email inválido')
        }else{
            console.log('Logado com sucesso')
            let data = []

            data.push(response)
            let usuario = data[0]
            console.log(usuario.nome)
        }
    })