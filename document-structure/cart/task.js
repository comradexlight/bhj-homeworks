'use strict'

const productList = document.getElementsByClassName('product');
const cartProducts = document.getElementsByClassName('cart__products')[0];

for (let i = 0; i < productList.length; i++) {
	const product = productList[i];
	const minusButton = product.getElementsByClassName('product__quantity-control product__quantity-control_dec')[0];
	const plusButton = product.getElementsByClassName('product__quantity-control product__quantity-control_inc')[0];
	const productQuantity = product.getElementsByClassName('product__quantity-value')[0];
	const productImage = product.getElementsByClassName('product__image')[0];
	const productAddButton = product.getElementsByClassName('product__add')[0];


	minusButton.addEventListener('click', function() {
		if (productQuantity.innerHTML >= 2) { 
			productQuantity.innerHTML--
		}
	})

	plusButton.addEventListener('click', function() {
		productQuantity.innerHTML++
	})

	productAddButton.addEventListener('click', function(event) {
		const productHTML = `
						<div class="cart__product" data-id=${product.dataset.id}>
					    	<img class="cart__product-image" src=${productImage.src}>
					    	<div class="cart__product-count">${productQuantity.innerHTML}</div>
						</div>
						`
		const isProductInBasket = cartProducts.querySelector('.cart__product[data-id="'+product.dataset.id+'"]'); 				
		if (!isProductInBasket) {
			cartProducts.insertAdjacentHTML('beforeend', productHTML);
		}
		else if (isProductInBasket) {
			let countProductInBasket = Number(isProductInBasket.querySelector('.cart__product-count').innerHTML);
			isProductInBasket.querySelector('.cart__product-count').innerHTML = Number(productQuantity.innerHTML) + countProductInBasket
		};
	})
};



