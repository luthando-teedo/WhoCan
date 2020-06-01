// VARIABLE DECLARATIONS
const loginBtn = document.querySelector('.log-in-btn');
const signUpBtn = document.querySelector('.sign-up-btn');
const findAJobBtn = document.querySelector('.find-a-job-btn');
const findSomeoneBtn = document.querySelector('.find-someone-btn');

const modalBackground = document.querySelector('.modal-background');
const loginForm = document.querySelector('.login-form-container');
const signupForm = document.querySelector('.sign-up-form-container');
const employersCatergories = document.querySelector('.employers-catergories');
const jobSeekersCatergories = document.querySelector('.jobseekers-catergories');




// EVENT LISTENERS
window.addEventListener('click', closeModal);
loginBtn.addEventListener('click', showLoginForm);
signUpBtn.addEventListener('click', showSignUpForm);
findAJobBtn.addEventListener('click', showJobseekersCatergories);
findSomeoneBtn.addEventListener('click', showEmployersCatergories);




// FUNCTION DECLARATIONS 
function showLoginForm() {
     signupForm.style = 'display: none';
     employersCatergories.style = 'display: none';
     jobSeekersCatergories.style = 'display: none';

     modalBackground.style = 'display: flex';
     loginForm.style = 'display: block';
}

function showSignUpForm() {
     loginForm.style = 'display: none';
     employersCatergories.style = 'display: none';
     jobSeekersCatergories.style = 'display: none';

     modalBackground.style = 'display: flex';
     signupForm.style = 'display: flex';
}

function showJobseekersCatergories() {
     loginForm.style = 'display: none';
     signupForm.style = 'display: none';
     employersCatergories.style = 'display: none';

     modalBackground.style = 'display: flex';
     jobSeekersCatergories.style = 'display: flex';
}

function showEmployersCatergories() {
     loginForm.style = 'display: none';
     signupForm.style = 'display: none';
     jobSeekersCatergories.style = 'display: none';

     modalBackground.style = 'display: flex';
     employersCatergories.style = 'display: flex';
}

function closeModal(e) {
     let target = e.target;

     if (target.className == 'modal-background') {
          modalBackground.style = 'display: none';
     }
}