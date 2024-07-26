function carregar() {
    var msg = window.document.getElementById('msg') // Atribuindo variável a minha div
    var img = window.document.getElementById('imagem') // Atribuindo variável a minha div
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos!`
    if (hora >= 0 && hora < 12) {
        img.src = 'images/manha.jpg'
        document.body.style.background = '#EFD0BB'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'images/tarde.jpg'
        document.body.style.background = '#D96B2B'
    } else {
        img.src = 'images/noite.jpg'
        document.body.style.background = '#1D2840'
    }

}