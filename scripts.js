function enviarMensagem(event){
    event.preventDefault()
    console.log(event)
    let nome = document.querySelector("#nome").value;
    let mensagem = document.querySelector("#mensagem").value;
    const telefone = "555492415580";

    const texto = `Olá, me chamo ${nome}, ${mensagem}`;
    const mensagemFormatada = encodeURIComponent(texto);

    const url = `https://wa.me/${telefone}?text=${mensagemFormatada}`;
    console.log(url)
    window.open(url, "_blank");
    nome.value = "";
    mensagem.value = "";
}