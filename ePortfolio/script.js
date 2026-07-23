// template_20dgp37
// service_r5gwq1p
// QlNSapPoO6bTuMzPb

function contact(event) {
    //event.preventDefault()
    //emailjs
   //.sendForm(
        //'service_r5gwq1p',
        //'template_20dgp37',
       // event.target,
       // 'QlNSapPoO6bTuMzPb'
   // ).then(() => {
      // console.log('this worked')
   // })
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visable"
    setTimeout(() => {
        console.log('it worked 1')
    }, 1000);

    
}
