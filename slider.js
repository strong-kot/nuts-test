let offset = 0

const cardLine = document.querySelector('.mob__cardLine')

document.querySelector('.mob__right__arrow').addEventListener('click', () => {
   offset += 305
   if (offset > 1120) {
      offset = 0
   }
   cardLine.style.left = -offset + 'px'
})

setInterval(() => {
   offset += 305
   if (offset > 1120) {
      offset = 0
   }
   cardLine.style.left = -offset + 'px'
}, 4000)

document.querySelector('.mob__left__arrow').addEventListener('click', () => {
   offset -= 305
   if (offset < -5) {
      offset = 910
   }
   cardLine.style.left = -offset + 'px'
})



