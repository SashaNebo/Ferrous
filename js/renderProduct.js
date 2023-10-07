window.addEventListener('click', event => {
  const activeSection = document.querySelector('[data-active="active"]')
  const selectedProduct = event.target.closest('[data-id]')

  if (
    activeSection.id === 'product' ||
    event.target.closest('.wish-button') ||
    event.target.closest('.bag-buttons-remove')
  )
    return

  const renderProduct = event => {
    const selectedId = +selectedProduct.dataset.id

    console.log(selectedId)
  }

  selectedProduct ? renderProduct() : 0
})
