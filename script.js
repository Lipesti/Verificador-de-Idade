function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.getElementById('resu')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] Informe os dados para prosseguir')
    }else{
        var fsex = document.getElementsByName('radisex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 9){
                img.setAttribute('src', 'bebeH.png')
            }else if(idade < 21 ){
                img.setAttribute('src', 'jovemH.png')

            }else if (idade < 50){
                img.setAttribute('src', 'homem.png')

            }else{
                img.setAttribute('src', 'idoso.png')


            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 9){
                img.setAttribute('src', 'bebeM.png')
            }else if(idade < 25 ){
                img.setAttribute('src', 'jovemM.png')

            }else if (idade < 50){
                img.setAttribute('src', 'Mulher.png')

            }else{
                img.setAttribute('src', 'idosa.png')


            }
        }
        resu.style.textAlign = 'center'
        resu.innerHTML = `Detectamos ${genero}, e sua idade é ${idade} anos`
        resu.appendChild(img)

    }
}