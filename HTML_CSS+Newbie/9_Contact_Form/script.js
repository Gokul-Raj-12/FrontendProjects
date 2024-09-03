const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    
    if (form.checkValidity()) {
        console.log('Form is valid, ready to submit');
        
    } else {
        console.log('Form is invalid');
    }
});

