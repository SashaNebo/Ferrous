// Create Wishlist
window.addEventListener('click', event => {
  const selectedWishButton = event.target.closest('.wish-button')
  if (!selectedWishButton) return

  const selectedId = +selectedWishButton.closest('[data-id]').dataset.id

  product.forEach(item => {
    if (item.id === selectedId) {
      !item.liked ? (item.liked = true) : (item.liked = false)
    }
  })

  !selectedWishButton.classList.contains('active')
    ? selectedWishButton.classList.add('active')
    : selectedWishButton.classList.remove('active')

  countWishlistButton()
})

// const checkLiked = () => {
//   product.forEach(item => {
//     if (item.liked) {
//       likedItem = document.querySelector(`[data-id="${item.id}"]`)
//       if (!likedItem) return
//       likedWishButton = likedItem.querySelector('.wish-button')
//       likedWishButton.classList.add('active')
//     }
//   })
// }

function checkLiked() {
  product.forEach(item => {
    if (item.liked) {
      likedItem = document.querySelector(`[data-id="${item.id}"]`)
      if (!likedItem) return
      likedWishButton = likedItem.querySelector('.wish-button')
      likedWishButton.classList.add('active')
    }
  })
}

const countWishlistButton = () => {
  const countWishlist = product.reduce((counter, item) => {
    item.liked ? counter++ : 0
    return counter
  }, 0)

  countWishlist > 0
    ? (wishlistButton.textContent = `like ${countWishlist}`)
    : (wishlistButton.textContent = `like`)
}
