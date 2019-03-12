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

// function showPage(num, pag) {
//     let people = document.querySelectorAll(".student-item");
//     let chosenNumber = num;
//     let number = (chosenNumber * 10);
//     let y = 0;

// 	for (let i = 0; i < people.length; i++) {
// 		    document.querySelectorAll(".student-item")[i].style.display = "none";
// 		}
         
//     for (let i = number; i < (number + 10); i++) {
//         if (i < people.length) {
            
//             // document.querySelectorAll(".student-item")[i].style.display = "block";
//         }
//     }
// }

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

for(let i = 0; i < people.length; i++) {
    people[i].classList.add("matched");
}

appendPageLinks();
unhighlight();
highlight();

const searching = function (event) {
    let mySearch = document.querySelector("#mySearch").value;
    let name;
    let match1;
    let match2;
    let y = 0;
    for(let i = 0; i < document.querySelectorAll(".student-details").length; i++) {
        name = document.querySelectorAll(".student-details h3")[i].textContent;
        let variable = mySearch;
        let regex = new RegExp("^" + variable + ".*");
        // let string = "";
        // string.replace(regex, "replacement");
        match1 = mySearch.match(regex);
        match2 = name.match(regex);
        document.querySelectorAll(".student-item")[i].style.display = "none";
        if(match1 && match2) {
            if(y < 10) {
                document.querySelectorAll(".student-item")[i].style.display = "block";
                document.querySelectorAll(".student-item")[i].classList.add("matched");
            } else if (y >= 10){
                document.querySelectorAll(".student-item")[i].style.display = "none";
                document.querySelectorAll(".student-item")[i].classList.add("matched");
            }
            y++
        } else {
            document.querySelectorAll(".student-item")[i].classList.remove("matched");
        }
    }
}

function showPage(num) {
    let people = document.querySelectorAll(".student-item");
    let chosenNumber = num;
    let number = (chosenNumber * 10);

       for (let i = 0; i < people.length; i++) {
           document.querySelectorAll(".student-item")[i].style.display = "none";
       }
    
       for (let i = number; i < (number + 10); i++) {
          if (i < people.length) {
              if (document.querySelectorAll(".matched")[i]) {
                document.querySelectorAll(".matched")[i].style.display = "block";
              }
          }
       }
   }

// const showPageVar = showPage(0);

button.addEventListener("click", aSearching, false);
document.querySelectorAll("#mySearch")[0].addEventListener("keyup", aSearching, false);
document.querySelectorAll('.pagination ul li a')[1].addEventListener("click", aSearching, false);

button.addEventListener("click", appendPageLinks, false);
document.querySelectorAll("#mySearch")[0].addEventListener("keyup", appendPageLinks, false);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

function appendPageLinks() {
    let paginationLength = document.querySelectorAll(".pagination").length;
    // document.querySelectorAll(".pagination ul")[0].parentNode.removeChild(document.querySelectorAll(".pagination ul")[0]);
    const selectUl = document.querySelectorAll(".pagination ul");
    if (selectUl.length >= 1) {document.querySelectorAll(".pagination ul")[0].parentNode.removeChild(document.querySelectorAll(".pagination ul")[0]);}
    if (paginationLength >= 1) {document.querySelectorAll(".pagination")[0].parentNode.removeChild(document.querySelectorAll(".pagination")[0])}
    const div = document.createElement("DIV");
    div.classList.add("pagination");
    document.querySelector(".page").appendChild(div);
 
    const ul = document.createElement("UL");
    document.querySelector(".pagination").appendChild(ul);
 
    let x = document.querySelectorAll(".matched");
    let z = 0;
    for (let i = x.length - 1; i >= 0; i-=10) {
       z++;
 
       let li = document.createElement("LI");
       ul.appendChild(li);
       li.style.margin = "0 2px 0 2px";
 
       let a = document.createElement("A");
       li.appendChild(a);
       
       
       ul.firstChild.firstChild.setAttribute("class","active");
 
       number = document.createTextNode(z);
       a.appendChild(number);
       
 
 
       li.style.cursor = "pointer";
    
    }

    if(!document.querySelector(".pagination ul li a")) { 
        console.log("test");
    }

}

function unhighlight() {
    let link = document.querySelectorAll(".pagination ul li a");
    for(let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", linkInactive, false);
        function linkInactive() {
            for(let i = 0; i < link.length; i++) {
                link[i].classList.remove("active");
            }
        }
    }
}
    


    function highlight() {
        let link = document.querySelectorAll(".pagination ul li a");
        for(let i = 0; i < link.length; i++) {
            link[i].addEventListener("click", linkActive, false);
            function linkActive() {
                link[i].classList.add("active");
                showPage(i);
            }
        }
    }

    document.querySelector("#mySearch").addEventListener("keyup", unhighlight, false)
    button.addEventListener("click", unhighlight, false);

    document.querySelector("#mySearch").addEventListener("keyup", highlight, false)
    button.addEventListener("click", highlight, false);

function aSearching() {
    searching();
    let link = document.querySelectorAll(".pagination ul li a");
    for(let i = 0; i < link.length; i++) {
        link[i].addEventListener("click", linkActive, false);
        function linkActive() {
            link[i].classList.add("active");
            showPage(i);
        }  
    }
}

// function paginationClick() {
//     document.querySelector(".active");
// } 


aSearching()
// Remember to delete the comments that came with this file, and replace them with your own code comments.

// -Write my own comments
// -Write a search results message of no student found