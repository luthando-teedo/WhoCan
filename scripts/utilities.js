const menu = document.querySelector('.menu');
const profileTab = document.querySelector('.info-bar');
const postSection = document.querySelector('.post-section');
const menuIcon = document.querySelector('.menu-icon-container');






menuIcon.addEventListener('click', toggleMenu);
window.addEventListener('DOMContentLoaded', savePeopleToLocalStorage)







function toggleMenu() {
     menu.classList.toggle('active');
     menuIcon.classList.toggle('active');
}

function toggleProfileTab() {
     profileTab.classList.toggle('active');
}

function togglePostForm() {
     postSection.classList.add('active');
}

function toggleFAB() {
     fab.classList.toggle('active');
}

function getListingById(id) {
     let localListings;

     if (localStorage.getItem('job listings') != null) {
          localListings = JSON.parse(localStorage.getItem('job listings'));
          let listingClicked;

          //NOW WE GOTTA LOOP THROUGH THE localListings(THAT IS THE LISTINGS STORED IN THE LOCAL STORAGE) TO FIND WHICHEVER 
          //MATCHES THE GIVEN ID
          localListings.forEach(function (listing) {
               if (listing.id == id) {
                    listingClicked = listing;
                    return;
               }
          })

          //RETURN listingClicked SO WE CAN USE THEIR DATA IN THE NEXT FUNCTION
          return listingClicked;
     }
}

function getPersonById(id) {
     let localPeople;

     if (localStorage.getItem('people') != null) {
          localPeople = JSON.parse(localStorage.getItem('people'));
          let personClicked;

          //NOW WE GOTTA LOOP THROUGH THE localPeople(THAT IS THE PEOPLE STORED IN THE LOCAL STORAGE) TO FIND WHOEVER 
          //MATCHES THE GIVEN ID
          localPeople.forEach(function (person) {
               if (person.id == id) {
                    personClicked = person;
                    return;
               }
          })

          //RETURN personClicked SO WE CAN USE THEIR DATA IN THE NEXT FUNCTION
          return personClicked;
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
          'img/tall.jpg',
          'img/sbu.jpg',
          'img/mihle.jpg',
          'img/Kuhle.jpg',
          'img/Angezwa.jpg',
          'img/Lusanda.jpg',
          'img/Zzpo.jpg',
          'img/Sphokazi.jpg',
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