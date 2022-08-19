if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
  .then(reg => {console.log('registrado con exito'), reg})
  .catch(err => {console.log('error al registrar el service worker'), err});
} 