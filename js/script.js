let people = document.querySelectorAll(".student-item");

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


button.addEventListener("click", aSearching, false);
document.querySelectorAll("#mySearch")[0].addEventListener("keyup", aSearching, false);
document.querySelectorAll('.pagination ul li a')[1].addEventListener("click", aSearching, false);

button.addEventListener("click", appendPageLinks, false);
document.querySelectorAll("#mySearch")[0].addEventListener("keyup", appendPageLinks, false);

function appendPageLinks() {
    let paginationLength = document.querySelectorAll(".pagination").length;
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
        const noMatchesFound = document.createElement("DIV");
        noMatchesFound.innerHTML = "No matches found!";
        document.querySelector(".student-list").appendChild(noMatchesFound);
        noMatchesFound.classList.add("noMatchesFound");
        if(document.querySelectorAll(".noMatchesFound").length > 1) {
            document.querySelector(".noMatchesFound").parentNode.removeChild(document.querySelector(".noMatchesFound"));
        }
    } else {
        if(document.querySelector(".noMatchesFound")) {
            document.querySelector(".noMatchesFound").parentNode.removeChild(document.querySelector(".noMatchesFound"));
        }
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

aSearching()
