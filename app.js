function animatedForm() {
    // select all the arrow icons in the form
     const arrows = document.querySelectorAll('.fa-arrow-down');
     // attach Event Listener to each arrow and check if user input is correct
     // and determine if we should move on the next input box
     arrows.forEach( arrow => {
         arrow.addEventListener('click' , () => {
             // need to define what the next element will be (ie. next input box)
             const input = arrow.previousElementSibling;
             // get parent of current arrow
             const parent = arrow.parentElement;
             // get the next input form to appear
             const nextForm = parent.nextElementSibling;

             // check for user validation
             if( input.type === "text" && validateUser( input )) {
                 nextSlide(parent, nextForm);
             }  else if (input.type === 'email' && validateEmail(input)) {
                 nextSlide(parent, nextForm);
             }  else if(input.type === 'password' && validateUser(input)) {
                 nextSlide(parent, nextForm);
             }
         });
     });
}

// user validation - can't have entries with less than 6 characters
function validateUser( user ) {
    if( user.value.length < 6 ) {
        console.log('Must enter at least 6 characters')
        // call error function here
        error('salmon');
    }  else {
        error('#a9c1d9');
        return true;
    }
}

// create validation for email input
function validateEmail(email) {
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(validation.test(email.value)) {
        error("#a9c1d9");
        return true;
    }  else {
        error("salmon");
    }
}

// animate current input box out and next one in
// 'parent' refers to current slide
function nextSlide( parent, nextForm ) {
    parent.classList.add("inactive");
    parent.classList.remove("active");
    nextForm.classList.add("active");
}

// handle user errors
function error( color ) {
    document.body.style.backgroundColor = color;
}

animatedForm();
    
