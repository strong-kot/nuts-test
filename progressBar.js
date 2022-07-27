function move() {
   let elem = document.querySelector('.indicator')
   let width = 80
   function frame() {
      if (width >= 320) {

      } else {
         width++
         elem.slyle.width = width + '%'
         document.querySelector('label').innerHTML = width * 1 + '%'
      }
   }
}







