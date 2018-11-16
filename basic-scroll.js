const instance = basicScroll.create({
   elem: document.querySelector('h1'),
   from: '0px',
   to: '200px',
   direct: true,
   props: {
      '--position': {
         from: '0px',
         to: '-400px'
      },
      '--scale': {
         from: '1',
         to: '3'
      }
   }
})

instance.start()
