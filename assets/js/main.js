// Burger Menu
const burgerMenu = document.querySelector('.burger-menu');
const burgerMenuOpenBtn = document.querySelector('.burger-menu-open');
const burgerMenuCloseBtn = document.querySelector('.burger-menu-close');


function toggleBurgerMenuHandler() {
  burgerMenu.classList.toggle('burger-menu-active');
}

const contactForm = document.getElementById('contact-form');
const emailResponse = document.querySelector('.email-response');
const submitButton = document.getElementById('button');
const loader = document.getElementById('loader'); 

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  // Prikaži loader
  loader.style.display = 'block';
  submitButton.disabled = true; 

  // Regex patterns for validation
  const namePattern = /^[a-zA-Z\s]+$/;  // Allows only letters and spaces
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern
  const messagePattern = /.+/; // At least one character
  
  // Retrieve form data
  const fromName = document.getElementById('from_name');
  const replyTo = document.getElementById('reply_to');
  const message = document.getElementById('message');
  
  // Validate form data
  if (!namePattern.test(fromName.value)) {
    emailResponse.textContent = 'Molimo vas unesite validno ime.';
    fromName.parentNode.style.borderColor = '#FF867E';
    
    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    fromName.parentNode.style.borderColor = 'black';
  }

  if (!emailPattern.test(replyTo.value)) {
    emailResponse.textContent = 'Molimo vas unesite validnu email adresu.';
    replyTo.parentNode.style.borderColor = '#FF867E';
    
    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    replyTo.parentNode.style.borderColor = 'black';
  }

  if (!messagePattern.test(message.value)) {
    emailResponse.textContent = 'Molimo vas unesite poruku.';
    message.parentNode.style.borderColor = '#FF867E';
    
    // Sakrij loader i omogući dugme
    loader.style.display = 'none';
    submitButton.disabled = false;
    
    return;
  } else {
    emailResponse.textContent = '';
    message.parentNode.style.borderColor = 'black';
  }


  // Prepare form data for submission
  const formData = new FormData();
  formData.append('service_id', 'service_91t5rvf');
  formData.append('template_id', 'template_8re3o7f');
  formData.append('user_id', '8R2zmqL1zRDo5n1Ug');
  formData.append('from_name', fromName.value);
  formData.append('reply_to', replyTo.value);
  formData.append('message', message.value);

  // Send form data
  fetch('https://api.emailjs.com/api/v1.0/email/send-form', {
      method: 'POST',
      body: formData
  })
  .then(response => {
      if (response.ok) {
        fromName.value = '';
        replyTo.value = '';
        message.value = '';
        emailResponse.textContent = 'Vas email je uspesno poslat!';
        emailResponse.style.color = '#91D1FF';
      } else {
          throw new Error('Oops... Nesto nije uredu.');
      }
  })
  .catch(error => {
    emailResponse.textContent = 'Oops... Nesto nije uredu.';  
  })
  .finally(() => {
    // Sakrij loader i omogući dugme nakon završetka
    loader.style.display = 'none';
    submitButton.disabled = false;
  });
});
