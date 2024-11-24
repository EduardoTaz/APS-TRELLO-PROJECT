

const cepCadastro = document.getElementById('cep');
const cpfCadastro = document.getElementById('cpf');
const emailCadastro = document.getElementById('email')

async function buscarCEP(cep) {
    try {
        if (!/^\d{8}$/.test(cep)) {
            throw new Error('CEP inválido. Insira um CEP com 8 números.');
        }
        const urlApi = `https://viacep.com.br/ws/${cep}/json/`;
        const response = await fetch(urlApi);

        if (!response.ok) {
            throw new Error('Erro ao buscar os dados do CEP.');
        }
        const dados = await response.json();
        if (dados.erro) {
            throw new Error('CEP não encontrado.');
        }

        return dados; 
    } catch (erro) {
        console.error(erro.message);
        return null; 
    }
}

cepCadastro.addEventListener('input', async function () {
    const cep = cepCadastro.value.replace(/\D/g, ''); 

    if (cep.length === 8) {
        const dados = await buscarCEP(cep);

        if (dados) {
            document.getElementById('logradouro').value = dados.logradouro;
            document.getElementById('bairro').value = dados.bairro;
            document.getElementById('cidade').value = dados.localidade;
            document.getElementById('estado').value = dados.uf;
        }
    }
});

function validarCpf(cpf) {
    // CONFERINDO SE O CPF NÃO TEM LETRAS
    cpf = cpf.replace(/[^\d]+/g, '');

    if (cpf.length !== 11) return false;

    // ELIMINA CPFS INVALIDOS CONHECIDOS
    if (/^(\d)\1+$/.test(cpf)) return false;

    let soma = 0;
    let resto;

    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpf.substring(i, i + 1)) * (10 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(9, 10))) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.substring(i, i + 1)) * (11 - i);
    }

    resto = (soma * 10) % 11;
    if (resto === 10 || resto === 11) resto = 0;
    if (resto !== parseInt(cpf.substring(10, 11))) return false;

    return true;
}

// Teste da função de validação
const cpf = cpfCadastro.value;
if (validarCpf(cpf)) {
    alert("CPF Válido: " + cpf);
} else {
    alert("CPF Inválido: " + cpf);
}

async function validarEmail(email){
    if( /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i.test(email)){
        console.log("Email válido!!")
        return true;
    }else{
        console.log("Email inválido!!")
        return false;
    }

}

emailCadastro.addEventListener('blur', function () {
    const email = emailCadastro.value;
    if (validarEmail(email) ) {
        emailCadastro.title = ""; 
    } else{
        emailCadastro.title = "Por favor, insira um email válido (ex: usuario@dominio.com).";
    }
});

document.getElementById('formCadastro').addEventListener('submit', function (event) {
    event.preventDefault(); // Impede o envio do formulário caso haja erro

    const email = emailCadastro.value.trim();
    const cpf = cpfCadastro.value.replace(/\D/g, '');
    const cep = cepCadastro.value.replace(/\D/g, '');

    if (!validarEmail(email)) {
        alert("Por favor, insira um email válido.");
        return;
    }

    if (!validarCpf(cpf)) {
        alert("Por favor, insira um CPF válido.");
        return;
    }

    if (cep.length !== 8) {
        alert("Por favor, insira um CEP válido.");
        return;
    }

    alert("Cadastro realizado com sucesso!");
    // Aqui você pode enviar os dados do formulário para o servidor
});
