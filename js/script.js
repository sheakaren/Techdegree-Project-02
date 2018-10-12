/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Add variables that store DOM elements you will need to reference and/or manipulate

// selects the entire list of students from the HTML doc
const studentList = document.querySelector('ul');
// selects the children of the UL
const indivStudent = studentList.children;
// holds the number of students each page will display
const studentsPerPage = 10;


// Create a function to hide all of the items in the list excpet for the ten you want to show
// Tip: Keep in mind that with a list of 54 studetns, the last page will only display four

// function that determines how many pages will be created based on number of studentsPerPage

const totalPages = () => {
    let pageNumbers = Math.ceil(indivStudent.length / studentsPerPage);
    return pageNumbers;
}

// function that displays 10 students per page

const tenPeople = () => {
    for (let i = 0; i < indivStudent.length; i++) {
        if (i < studentsPerPage) {
           indivStudent[i].style.display= '';
        } else {
            indivStudent[i].style.display= 'none';
        }
    }
}
// Create and append the pagination links - Creating a function that can do this is a good approach

const appendPageLinks = (list) => {
// select page class in the div,  put into a variable
  let page = document.body.querySelector('.page');
// create a div, give it the “pagination” class, and append it to the .page div
  const pageDiv = document.createElement('div');
  pageDiv.className = 'pagination';
  page.appendChild(pageDiv);
// add a ul to the “pagination” div
  let ulPage = document.createElement('ul');
  pageDiv.append(ulPage);
  let buttonPage = document.querySelector('.pagination ul');

// for every page add li and a tags with the page number text
    for (let i = 1; i <= totalPages(); i++) {
    let li = document.createElement('li');
    let a = document.createElement('a');
      a.href = '#';
      a.textContent = i;
      buttonPage.appendChild(li);
      li.appendChild(a);
    }
// add an event listener to the pagination div
  buttonPage.addEventListener('click',(event) => {
      let buttonNumber = parseInt(event.target.textContent);
      let maximum = buttonNumber * 10;
      let minimum = maximum - 10;
      for (let i = 0; i < indivStudent.length; i++) {
         if (i >= minimum && i < maximum) {
             indivStudent[i].style.display = '';
         }    else {
             indivStudent[i].style.display = 'none';
         }

      }
  })
};

// Add functionality to the pagination buttons so that they show and hide the correct items
// Tip: If you created a function above to show/hide list items, it could be helpful here

// runs the functions created above

totalPages();
tenPeople();
appendPageLinks();
