/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

const page = document.querySelector("body div.page");
let people = document.querySelectorAll(".student-item");
const div = document.createElement("DIV");
const ul = document.createElement("UL");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

  

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage() {
    let people = document.querySelectorAll(".student-item");
    let chosenNumber = num;
	let number = (chosenNumber * 10);

	for (let i = 0; i < people.length; i++) {
		    document.querySelectorAll(".student-item")[i].style.display = "none";
		}
         
    for (let i = number; i < (number + 10); i++) {
        if (i < people.length) {
            document.querySelectorAll(".student-item")[i].style.display = "block";
        }
    }
}

const divForSearch = document.createElement("DIV");
divForSearch.setAttribute("class", "student-search");
const page_header = document.querySelector(".page-header");
page_header.appendChild(divForSearch);
let input = document.createElement("INPUT");
input.setAttribute("placeholder", "Search for students...");
input.setAttribute("type", "search");
input.setAttribute("id", "mySearch");
divForSearch.appendChild(input);
const button = document.createElement("BUTTON");
divForSearch.appendChild(button);
document.querySelectorAll("button")[0].style.marginLeft = "4px"; 
let search = document.createTextNode("Search");
button.appendChild(search);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.