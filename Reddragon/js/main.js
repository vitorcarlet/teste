console.log(document);
var formulario = document.querySelector('form')
var resultado = document.createElement('p')

formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    var dados = new FormData(formulario)
    var nome = dados.get('nome')
    var email = dados.get('email')
    var turma = dados.get('turma')
    var motivo = dados.get('motivo')
    var menssagem = dados.get('menssagem')

    console.log(nome, email, turma, motivo, menssage);
   
    
    
    paragrafo.innerHTML = `
        <b>${nome}</b>, sua menssagem foi enviada com sucesso!
        `

    formulario.append(paragrafo)
})


