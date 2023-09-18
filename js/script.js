/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/

// Sets the number of student cards that will display per page.
const studentsPerPage = 9;
// Selects the unordered list that the page numbers will be added to.
const linkList = document.querySelector(".link-list");

/**
 * Displays a page of nine cards with student data.
 * @param {array} list - An array of objects containing student data.
 * @param {number} page - The page number to be displayed on the page.
 */

function showPage(list, page) {
   const startIndex = (page * studentsPerPage) - studentsPerPage;
   const endIndex = page * studentsPerPage;
   let studentList = document.querySelector(".student-list");
   studentList.innerHTML = "";

   // Dynamically inserts each student's data as list items.
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
         // Dynamically inserts student data into unordered list.
         studentList.insertAdjacentHTML("beforeend", studentItem);
      }
   }
}

/**
 * Creates the page buttons that will be clicked on the page.
 * @param {array} list - An array of objects containing student data.
 */

function addPagination(list) {
   // Calculates the number of pages needed.
   const numOfPages = Math.ceil(list.length / studentsPerPage);
   linkList.innerHTML = "";
   // Dynamically creates each page button as list items.
   for (let i = 1; i <= numOfPages; i++ ) {
      const pageBtn = `
         <li>
            <button type="button">${i}</button>
         </li>
      `
      // Dynamically inserts page button as list items into unordered list.
      linkList.insertAdjacentHTML("beforeend", pageBtn);
   }

   const activeBtn = linkList.querySelector("button");
   activeBtn.className = "active";

   // Event Listener that fires when the page button is clicked.
   linkList.addEventListener('click', (e) => {
      if (e.target.tagName == "BUTTON") {
         const activeBtn = linkList.querySelector(".active");
         const clickedBtn = e.target;
         activeBtn.className = "";
         clickedBtn.className = "active";
         showPage(data, clickedBtn.textContent);
      }
   });
}

// Invokes functions.
addPagination(data);
showPage(data, 1);