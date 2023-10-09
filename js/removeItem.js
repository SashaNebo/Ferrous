window.addEventListener('click', event => {
  const activeSection = event.target.closest('[data-active="active"]')
  const currentProduct = event.target.closest('[data-id]')
  const removeButton = event.target.closest('.bag-buttons-remove')
  const wishlistButton = event.target.closest('.wish-button')

  if (removeButton) {
    removeItem()
  }
})
