// template_20dgp37
// service_r5gwq1p
// QlNSapPoO6bTuMzPb

function contact(event) {
    event.preventDefault();
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visable"

    emailjs
   .sendForm(
        'service_r5gwq1p',
        'template_20dgp37',
        event.target,
        'QlNSapPoO6bTuMzPb'
    ).then(() => {
        
       loading.classList.remove("modal__overlay--visable");
        success.classList += " modal__overlay--visable";
    }).catch(() => {
        loading.classList.remove("modal__overlay--visable");
        alert(
            "The email service is temporarily unavailable. Please contact me directly at journeywithjenne@gmail.com"
        );
    })    
}

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false
        return document.body.classList.remove("modal--open")
        
    }
    //toggle modal
    isModalOpen = true;
    document.body.classList += " modal--open";
}