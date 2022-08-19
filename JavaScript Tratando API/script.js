async function buscarEndereco(valueCEP) {
  var mensagemErro = document.getElementById('erro');
  mensagemErro.innerHTML = '';
  try {
    var consulta = await fetch(`https://viacep.com.br/ws/${valueCEP}/json/`)
      .then((resposta) => resposta.json())
      .catch((erro) => console.log(erro))
      .finally((mensagem) => console.log("Done."));
    console.log(consulta);

    var endereco = document.getElementById('endereco');
    var cidade = document.getElementById('cidade');
    var bairro = document.getElementById('bairro');
    var estado = document.getElementById('estado');
    var complemento = document.getElementById('complemento');

    cidade.value = consulta.localidade;
    bairro.value = consulta.bairro;
    estado.value = consulta.uf;
    endereco.value = consulta.logradouro;
    complemento.value = consulta.complemento;

  } catch (error) {
    mensagemErro.innerHTML = '<p style="color: red;"> CEP Inválido. Tente novamente.</p>'
    console.log(error);
  }
}
// elements
var cep = document.getElementById('cep');

cep.addEventListener('focusout', () => buscarEndereco(cep.value)
    
);

