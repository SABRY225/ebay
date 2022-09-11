const quantityInput = document.getElementById('quantity-input')
const quantity = document.getElementById('quantity')

quantityInput.addEventListener('input', (e) => {
  let quantityPlaceholder = e.target.value
  if (parseInt(quantityPlaceholder) === 1) {
    quantity.innerHTML = "$3.50"
  } else if (parseInt(quantityPlaceholder) === 2) {
    quantity.innerHTML = "$2.98"
  } else if (parseInt(quantityPlaceholder) === 3) {
    quantity.innerHTML = "$2.80"
  } else if (parseInt(quantityPlaceholder) >= 4) {
    quantity.innerHTML = "$2.63"
  }
})