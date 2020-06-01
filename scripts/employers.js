const previewSection = document.querySelector('.preview-section');
employersSection = document.querySelector('.employers__content-container');
previewSectionContentContainer = document.querySelector('.preview-section__content-container--preview')
const profileEditBtn = document.querySelector('.profile-edit');
const profileContainer = document.querySelector('.profile');
const postBtn = document.querySelector('.post');
const fab = document.querySelector('.fab');







// EVENT LISTENERS
fab.addEventListener('click', toggleFAB);
postBtn.addEventListener('click', togglePostForm);
profileEditBtn.addEventListener('click', toggleProfileTab);

window.addEventListener('DOMContentLoaded', renderPeople);
window.addEventListener('click', (e) => {
     let target = e.target;
     console.log(target.className);


     if (target.className == 'preview-section' || target.className == 'preview-section__content-container') {
          previewSection.style = 'display: none';
     }
})
employersSection.addEventListener('click', e => {
     let clickedItem = e.target;
     console.log(clickedItem.className);


     //IF THE CLASSNAME OF WHATEVER WAS CLICKED ON IS EQUAL TO 'request' THEN CALL THE showPreview() FUNCTION
     if (clickedItem.className == 'primary-btn btn request') {
          let employerId = clickedItem.id;
          let employer = getPersonById(employerId);
          renderPreview(employer);
     }
})




function renderPeople() {
     let localPeople;

     //IF people DOESNT EXIST IN LOCAL STORAGE, DO NOTHING 
     if (localStorage.getItem('people') == null) {
          console.log('doesnt exist');
     } else {

          //BUT IF IT DOES...DO THIS
          localPeople = JSON.parse(localStorage.getItem('people'));
          //WE ARE LOOPING THROUGH ALL THE PEOPLE COMING FROM THE DATABASE AND CREATING A "PROFILE" IN THE personas HTML
          localPeople.forEach(function (person, i) {
               //person.name JUST MEANS WE GOING INTO THE PERSON OBJECT TO GET THE NAME
               //WE GIVE IT AN ID OF ITS INDEX SO WE CAN USE IT TO KNOW WHICH ITEM WAS CLICKED
               employersSection.innerHTML += `
                                             <div id="${i}" class="employer">
                                                  <div class="image-container">
                                                       <img src="${person.picture}" class="employers profile image">
                                                  </div>
                                                  <div class="employer--info">
                                                       <h1>${person.name}</h1>
                                                       <h3>${person.speciality.skillNumber1} | ${person.speciality.skillNumber2} |
                                                            ${person.speciality.skillNumber3}</h3>
                                                       <div>
                                                            <img src="./img/filled-star.png" style="width: 25px; height: 25px;" class="stars">
                                                            <img src="./img/filled-star.png" style="width: 25px; height: 25px;" class="stars">
                                                            <img src="./img/filled-star.png" style="width: 25px; height: 25px;" class="stars">
                                                            <img src="./img/filled-star.png" style="width: 25px; height: 25px;" class="stars">
                                                            <img src="./img/star.png" style="width: 25px; height: 25px;" class="stars">
                                                       </div>
                                                       <p class="location">${person.location}</p>
                                                       <button id="${i}" class="primary-btn btn request">VIEW PROFILE</button>
                                                  </div>
                                             </div>
                                              `
          });
     }
}

function loadCurrentUserProfile() {
     if (localStorage.getItem('people') == null) {
          console.log('doesnt exist');
     } else {
          let localPeople = JSON.parse(localStorage.getItem('people'));

          localPeople.forEach((person, i) => {
               profileContainer.innerHTML = `<div class="profile-pic">
                                                  <img src="${person.picture}" alt="profile image">
                                             </div>
                                             <div class="profile-info">
                                                  <h3>${person.name}</h3>
                                                  <h4>${person.email}</h4>
                                                  <button id="${i}" class="edit-profile-btn secondary-btn btn">Edit Profile</button>
                                             </div>`
          })
     }
}

function renderPreview(employer) {
     console.log(employer);

     previewSectionContentContainer.innerHTML = `<div class="preview-section__content-container--preview">
                                                       <div class="content-container--preview-image-container">
                                                                 <img style="width: 400px" src="${employer.picture}" class="tall-img">
                                                            </div>

                                                            <div class="content-container--preview-profile-container">
                                                                 <div class="persona1-info">
                                                                      <div class="personal-info-container">
                                                                           <div class="personal-info">
                                                                                <h1 style="font-size: 30px">${employer.name}</h1>
                                                                                <h3 style="font-size: 20px">${employer.speciality.skillNumber1} | ${employer.speciality.skillNumber2} |
                                                                                ${employer.speciality.skillNumber3}</h3>
                                                                           </div>
                                                                           <div class="close-preview-btn-container">
                                                                                <div class="close-preview-btn"></div>
                                                                           </div>
                                                                      </div>    

                                                                      <div>
                                                                           <img style="width: 30px" src="./img/filled-star.png" class="stars">
                                                                           <img style="width: 30px" src="./img/filled-star.png" class="stars">
                                                                           <img style="width: 30px" src="./img/filled-star.png" class="stars">
                                                                           <img style="width: 30px" src="./img/filled-star.png" class="stars">
                                                                           <img style="width: 30px" src="./img/star.png" class="stars">
                                                                      </div>
                                                                      <p class="location">${employer.location}</p>
                                                                      <br>
                                                                      <p>${employer.email}
                                                                      </p>
                                                                      <br>
                                                                      <div>
                                                                           <img style="width: 60px" src="./img/work1.jpg" class="stars">
                                                                           <img style="width: 60px" src="./img/work2.jpg" class="stars">
                                                                           <img style="width: 60px" src="./img/work3.jpg" class="stars">
                                                                           <img style="width: 60px" src="./img/work4.jpg" class="stars">
                                                                      </div>
                                                                      
                                                                      <button class="request-btn primary-btn btn">WORK WITH ME</button>
                                                                 </div>				
                                                            </div>
                                                       </div>`

     previewSection.style = 'display: flex';
}