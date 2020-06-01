// VARIABLE DACLARATIONS
const previewSectionContentContainer = document.querySelector('.preview-section__content-container');
const jobListingsContainer = document.querySelector('.job-listings__content-container');
const previewSection = document.querySelector('.preview-section');
const profileEditBtn = document.querySelector('.profile-edit');
const profileContainer = document.querySelector('.profile');
const postBtn = document.querySelector('.post');
const fab = document.querySelector('.fab');







// EVENT LISTENERS
fab.addEventListener('click', toggleFAB);
postBtn.addEventListener('click', togglePostForm);
profileEditBtn.addEventListener('click', toggleProfileTab);
window.addEventListener('DOMContentLoaded', initialisePage);
jobListingsContainer.addEventListener('click', function (e) {
     let clickedItem = e.target;
     console.log(clickedItem.className);


     //IF THE CLASSNAME OF WHATEVER WAS CLICKED ON IS EQUAL TO 'request' THEN CALL THE showPreview() FUNCTION
     if (clickedItem.className == 'request-btn primary-btn btn') {
          let listingId = clickedItem.id;
          let jobListing = getListingById(listingId);
          renderPreview(jobListing);
     }
})
window.addEventListener('click', (e) => {
     let target = e.target;
     console.log(target.className);


     if (target.className == 'preview-section' || target.className == 'post-section active') {
          postSection.classList.remove('active');
          previewSection.style = 'display: none';
     }
})




// FUNCTION DECLARATIONS
function initialisePage() {
     savePeopleToLocalStorage();
     saveListingsToLocalStorage();
     loadCurrentUserProfile();
     renderJobListings();
}

function saveListingsToLocalStorage() {
     let localPeople;
     let localListings;
     let jobListingIds = [0, 1, 2, 3, 4, 5, 6, 7]

     //DECLARE AND INITIALISE THE ARRAYS THAT HOLD THE DATA
     if (localStorage.getItem('people') != null) {
          localPeople = JSON.parse(localStorage.getItem('people'));
     }

     let jobListingPostedBy = [
          localPeople[0],
          localPeople[1],
          localPeople[2],
          localPeople[3],
          localPeople[4],
          localPeople[5],
          localPeople[6],
          localPeople[7],
     ];

     let jobListingNames = [
          'Lawn Mower',
          'Home Painter',
          'Tutor',
          'Domestic Worker',
          'Laundry Washer',
          'Carpenter',
          'Car Washer',
          'Baby Sitter'
     ];

     let jobListingDescriptions = [
          'Hi, I need my front yard moed. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need my house painted. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need a tutor. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need a domestic worker. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need someone to do my laundry. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need a carpenter. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need my car washed. I will be available only on weekends, if you are interrested please contact me.',
          'Hi, I need a baby sitter. I will be available only on weekends, if you are interrested please contact me.'
     ];

     let jobListingPictures = [
          'img/tall.jpg',
          'img/Kuhle.jpg',
          'img/Lusanda.jpg',
          'img/sbu.jpg',
          'img/Angezwa.jpg',
          'img/Sphokazi.jpg',
          'img/Zzpo.jpg',
          'img/mihle.jpg',
     ];


     //CHECK IF THE PEOPLE ARRAY EXISTS IN THE DATABASE
     if (localStorage.getItem('job listings') == null) {
          localListings = [];

          //IF IT DOESNT EXIST THEN LOOP THROUGH THE ARRAY OF NAMES AN MAKE A NEW OBJECT CALLED listingDetails
          for (let i = 0; i < jobListingNames.length; i++) {

               listingDetails = {
                    id: jobListingIds[i],
                    name: jobListingNames[i],
                    picture: jobListingPictures[i],
                    location: localPeople[i].location,
                    description: jobListingDescriptions[i],
                    ownerOfPost: jobListingPostedBy[i]
               }

               //ONCE DATA IS ADDED, PUSH(ADD) THE listingDetails TO THE localListings(JUST AN ARRAY THAT WILL HOLD EVERYONES DATA) ARRAY
               localListings.push(listingDetails);

               //LOCAL STORAGE CANT HOLD JS OBJECTS SO YOU GOTTA TURN IT INTO A JSON(WHICH IS JUST STRING)
               //localStorage.setItem() JUST SAVES THE DATA TO THE LOCAL STORAGE
               localStorage.setItem('job listings', JSON.stringify(localListings));
          }
     }
}

function savePeopleToLocalStorage() {
     //DECLARE AND INITIALISE THE ARRAYS THAT HOLD THE DATA
     let peoplesNames = [
          'Anele Magada',
          'Sibusiso Nkosi',
          'Mihle Mdudu',
          'Silindokuhle Lindani',
          'Angezwa Gagayi',
          'Lusanda Dingwayo',
          'Zizipho Nakani',
          'Sipholazi khethani'
     ];

     let peoplesEmails = [
          'Anele@gmail.com',
          'Sibusiso@gmail.com',
          'Mihle@gmail.com',
          'Silindokuhle@gmail.com',
          'Angezwa@gmail.com',
          'Lusanda@gmail.com',
          'Zizipho@gmail.com',
          'Sipholazi@gmail.com'
     ];

     let peoplesSpecialities = [{
               skillNumber1: 'Barber',
               skillNumber2: 'Computer Repairs',
               skillNumber3: 'Electricitain'
          },
          {
               skillNumber1: 'Barber',
               skillNumber2: 'Computer Repairs',
               skillNumber3: 'Grass cutter'
          },
          {
               skillNumber1: 'Barber',
               skillNumber2: 'Computer Repairs',
               skillNumber3: 'Painter'
          },
          {
               skillNumber1: 'Hairstylist',
               skillNumber2: 'House chores',
               skillNumber3: 'Nails'
          },
          {
               skillNumber1: 'Hairstylist',
               skillNumber2: 'Baby Sitter',
               skillNumber3: 'Extra classes'
          },
          {
               skillNumber1: 'Barber',
               skillNumber2: 'Wood works',
               skillNumber3: 'Painter'
          },
          {
               skillNumber1: 'Makeup artist',
               skillNumber2: 'Baby Sitter',
               skillNumber3: 'House chores'
          },
          {
               skillNumber1: 'Technician',
               skillNumber2: 'Computer Repairs',
               skillNumber3: 'Baby sitter'
          },
     ];

     let peoplesLocations = [
          'Cape town / Makhaza',
          'Cape town / Makhaza',
          'Cape town / Makhaza',
          'Cape town / Khayelitsha',
          'Cape town / Khayelitsha',
          'Cape town / Site B',
          'Cape town / Langa',
          'Cape town / Monclair',
     ];

     let peoplesPictures = [
          'img/Angezwa.jpg',
          'img/Kuhle.jpg',
          'img/Lusanda.jpg',
          'img/sbu.jpg',
          'img/Sphokazi.jpg',
          'img/tall.jpg',
          'img/Zzpo.jpg',
          'img/mihle.jpg',
     ];

     let peoplesRatings = [2, 9, 5, 3, 4, 5, 5];
     let peoplesIds = [0, 1, 2, 3, 4, 5, 6, 7]
     let localpeople;

     //CHECK IF THE PEOPLE ARRAY EXISTS IN THE DATABASE
     if (localStorage.getItem('people') == null) {
          localpeople = [];

          //IF IT DOESNT EXIST THEN LOOP THROUGH THE ARRAY OF NAMES AN MAKE A NEW OBJECT CALLED personsDetails
          for (let i = 0; i < peoplesNames.length; i++) {

               personsDetails = {
                    id: peoplesIds[i],
                    name: peoplesNames[i],
                    email: peoplesEmails[i],
                    rating: peoplesRatings[i],
                    picture: peoplesPictures[i],
                    location: peoplesLocations[i],
                    speciality: peoplesSpecialities[i]
               }

               //ONCE DATA IS ADDED, PUSH(ADD) THE personsDetails TO THE localPeople(JUST AN ARRAY THAT WILL HOLD EVERYONES DATA) ARRAY
               localpeople.push(personsDetails);

               //LOCAL STORAGE CANT HOLD JS OBJECTS SO YOU GOTTA TURN IT INTO A JSON(WHICH IS JUST STRING)
               //localStorage.setItem() JUST SAVES THE DATA TO THE LOCAL STORAGE
               localStorage.setItem('people', JSON.stringify(localpeople));
          }
     }
}

function renderJobListings() {
     let localListings;

     //IF people DOESNT EXIST IN LOCAL STORAGE, DO NOTHING 
     if (localStorage.getItem('job listings') == null) {
          console.log('doesnt exist');
     } else {

          //BUT IF IT DOES...DO THIS
          localListings = JSON.parse(localStorage.getItem('job listings'));
          //WE ARE LOOPING THROUGH ALL THE LISTINGS COMING FROM THE DATABASE AND CREATING A "PROFILE" IN THE personas HTML
          localListings.forEach(function (listing, i) {
               //person.name JUST MEANS WE GOING INTO THE PERSON OBJECT TO GET THE NAME
               //WE GIVE IT AN ID OF ITS INDEX SO WE CAN USE IT TO KNOW WHICH ITEM WAS CLICKED
               jobListingsContainer.innerHTML += `
                                             <div id="${i}" class="listing">
                                                  <div class="image-container">
                                                       <img src="${listing.picture}" class="tall-img">
                                                  </div>
                                                  <div class="listing-info">
                                                       <h5>${listing.name}</h5>
                                                       <h6>${listing.description}</h6>
                                                       
                                                       <p class="location">${listing.location}</p>
                                                       <button id="${i}" class="request-btn primary-btn btn">VIEW JOB</button>
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

function renderPreview(listing) {
     previewSectionContentContainer.innerHTML = `<div class="preview-section__content-container--preview">
                                                       <div class="content-container--preview-image-container">
                                                                 <img src="${listing.picture}" class="tall-img">
                                                            </div>

                                                            <div class="content-container--preview-profile-container">
                                                                 <div class="persona1-info">
                                                                      <div class="personal-info-container">
                                                                           <div class="personal-info">
                                                                                <h1 style="font-size: 35px">${listing.name}</h1>
                                                                           </div>
                                                                           <div class="close-preview-btn-container">
                                                                                <div class="close-preview-btn"></div>
                                                                           </div>
                                                                      </div>    

                                                       
                                                                      <p class="location" style="font-size: 15px">${listing.location}</p>
                                                                      <br>
                                                                      <p style="font-size: 15px">${listing.description}
                                                                      </p>
                                                                      <br>
                                                                      <button class="request-btn primary-btn btn">REQUEST</button>
                                                                 </div>				
                                                            </div>
                                                       </div>`

     previewSection.style = 'display: flex';
}