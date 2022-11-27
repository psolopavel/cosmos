const items = document.querySelectorAll('[data-cursor-mouse]')

if (items) {
   window.addEventListener('mousemove', function (event) {
      items.forEach(item => {
         item_sped = Number(item.getAttribute('data-cursor-mouse'))

         item.style.cssText = `
               transform: translate(${event.clientX / item.offsetWidth / item_sped}%, ${event.clientY / item.offsetWidth / item_sped}%);
            `

         if (item.getAttribute('data-cursor-mouse-revers') == 2) {
            item.style.cssText = `
               transform: translate(-${event.clientX / item.offsetWidth / item_sped}%, -${event.clientY / item.offsetWidth / item_sped}%);
            `
         }
      });
   })

}

document.addEventListener('scroll', function (event) {
   if (scrollY > 10) {
      document.querySelector('header').classList.add('_scroll-header')
   }
   if (scrollY < 10) {
      document.querySelector('header').classList.remove('_scroll-header')
   }
})

const paralax_parent = document.querySelector('[data-paralax-parent]')

document.addEventListener('scroll', function (event) {
   if (scrollY > 5) {
      paralax_parent.style.cssText = `
         transform: translateY(${scrollY / 3}px);
      `
   }
})