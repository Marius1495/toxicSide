
fetch('data.json').then((resposta) =>
{
    resposta.json().then((dados) =>
    {
       var nome = dados.usuarios.nome;
      
 
       //var data = JSON.stringify(dados.usuarios.nome)
       //console.log(data)
       dados.usuarios.map((usuario) =>
       {
        var data = JSON.stringify(usuario.nome)
        var data2 = JSON.stringify(usuario.idade)
         let ul = document.querySelector('#ul');
        ul.innerHTML += `<li>${usuario.nome} - ${usuario.idade} anos</li>`

       })
    })
    
}
    
)