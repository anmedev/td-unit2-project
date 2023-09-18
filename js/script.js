/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Sets the number of student cards that will display per page
const studentsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage(list, page) {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;
   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         let studentItem = `
            <li class="student-item cf">
               <div class="student-details">
                  <img class="avatar" src="${list[i].picture.thumbnail}" alt="Profile Picture">
                  <h3>${list[i].name.first} ${list[i].name.last}</h3>
                  <span class="email">${list[i].email}</span>
               </div>
               <div class="joined-details">
                  <span class="date">Joined ${list[i].registered.date}</span>
               </div>
            </li>
         `
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}




/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination(list) {
   const numOfPages = Math.ceil(list.length / studentsPerPage);
   const linkList = document.querySelector(".link-list");
   linkList.innerHTML = "";

   for (let i = 1; i <= numOfPages; i++ ) {
      const pageButton = `
         <li>
            <button type="button">${i}</button>
         </li>
      `
      linkList.insertAdjacentHTML("beforeend", linkList);


   }




}



// Call functions
addPagination(list);
showPage(data, 1);