// ITERATION 1

function updateSubtotal(product) {

 const price = product.querySelector('.price span').innerHTML;
 //have to use product.query rather than document because you want to access each indivdual class product,
 //document. would return an entire list

 const quantity = product.querySelector('.quantity input').value; //always.value if targetting an input

 const total = price * quantity;
 
 const subtotal = product.querySelector('.subtotal span')
 subtotal.innerHTML = total;
 
return total
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  //const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const multipleProducts = document.getElementsByClassName('product');
  const multipleProductsArray = [...multipleProducts];
  
  /*multipleProductsArray.forEach(product => {
    updateSubtotal(product)
  })*/  // this would give you each subtotal for each product, but needed to be modified for iteration 3. 

  let totalPrice = 0; //declared outside the forEach so accessable 

  multipleProductsArray.forEach(product => {                    
    totalPrice = totalPrice + updateSubtotal(product)
  })


  // ITERATION 3
  const totalValue = document.querySelector('#total-value span');
  totalValue.innerHTML = totalPrice 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  
  //... your code goes here
  target.parentNode.parentNode.remove()
  
  /*const parent = target.parentNode.parentNode.parentNode;
  const child = target.parentNode.parentNode;

  parent.removeChild(child)*/

}

// ITERATION 5

function createProduct() {
  //... your code goes here
 
  const newRow = document.createElement('tr')
  const newProductName = document.querySelector('.create-product input').value;
  const newProductPrice =  document.querySelector("#newProductPrice").value;
  newRow.innerHTML = `
      <td class="name">
        <span>${newProductName}</span>
      </td>
      <td class="price">$<span>${newProductPrice}</span></td>
      <td class="quantity">
        <input type="number" value="0" min="0" placeholder="Quantity" />
      </td>
      <td class="subtotal">$<span>0</span></td>
      <td class="action">
        <button  class="btn btn-remove">Remove</button>
      </td>
  `
  const parent = document.querySelector('#cart tbody');
  newRow.className = 'product';
  parent.appendChild(newRow);
  const removeBtn = newRow.querySelector('.btn-remove');
  removeBtn.addEventListener('click', removeProduct)

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  
  const removeBtn = document.getElementsByClassName("btn-remove");
  const removeBtnArray = [...removeBtn];
  removeBtnArray.forEach(remove => {
  remove.addEventListener('click', removeProduct)
  })
  
  const createBtn = document.getElementById("create");
  createBtn.addEventListener('click', createProduct)
});
