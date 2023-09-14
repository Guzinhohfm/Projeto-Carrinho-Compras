let listaDeCompras = []
let auxListaCompras
let carrinhoCompras = []

function registrarProduto(){
    listaDeCompras = []
    listaDeCompras.push(document.getElementById('product').value)
    let list = document.getElementById('listaCompras')
    var fragList = document.createDocumentFragment()
    listaDeCompras.forEach(function (item){
        var li = document.createElement('li')
        li.textContent = item
        fragList.appendChild(li)
        let img = document.createElement('img')
        img.src = 'minus.png'
        img.width = 20
        img.height = 20
        img.style.cursor = "pointer"
        img.style.marginBottom = 20
        img.addEventListener("click", () => {
            console.log(listaDeCompras)
            listaDeCompras.pop()
            list.removeChild(li)
            list.removeChild(img)
        })
        fragList.appendChild(img)
    })

    
    // // 
   list.appendChild(fragList)

  
}






    



