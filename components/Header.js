// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    
            //adding header elements
    const headerDiv = document.createElement('div');
    const dateSpan = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const tempSpan = document.createElement('span');

    //adding classes to elements
    headerDiv.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp');

    //adding child to parent elements 
    headerDiv.appendChild(dateSpan);
    headerDiv.appendChild(headerTitle);
    headerDiv.appendChild(tempSpan);

    //adding text content to elements
    dateSpan.textContent = 'MARCH 28, 2019';
    headerTitle.textContent = 'Lambda Times';
    tempSpan.textContent = '98°';

    return headerDiv;

}

//to check HTML structure in the console
console.log(Header());

const headerContainer = document.querySelector('.header-container');

headerContainer.appendChild(Header());
