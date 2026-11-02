function adicionar () {
    let selectedProduct = document.getElementById('produto').value.split(' - R$');
    let productName = selectedProduct[0];
    let productPrice = parseInt(selectedProduct[1]);
    let quantity = Number(document.getElementById('quantidade').value);
    let previousTotal = Number(document.getElementById('valor-total').innerHTML.substring(2));

    if (quantity < 1) {
        return alert("A quantidade mínima deve ser 1");
    }

    document.getElementById('lista-produtos').innerHTML += `<section class="carrinho__produtos__produto">
          <span class="texto-azul">${quantity}x</span> ${productName} <span class="texto-azul">R$${productPrice * quantity}</span>
        </section>`;
    document.getElementById('valor-total').innerHTML = `R$${previousTotal +( productPrice * quantity)}`;
    document.getElementById('quantidade').value = 0;
}

function limpar () {
    document.getElementById('lista-produtos').innerHTML = '';
    document.getElementById('valor-total').innerText = "R$0"
}