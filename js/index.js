const cepCadastro = document.getElementById('cep');
const btnSub = document.getElementById('submit');

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

