// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


axios.

get('https://lambda-times-api.herokuapp.com/topics')

.then((res) => {
    console.log('This is the response: ', res);
    const response = res.data.topics
    response.forEach((e) => {
        topicsContainer.appendChild(tabs(e));
    })

})

.catch((err) => {
    console.log('The error is : ', err);
});

//creating the tab structure 
function tabs(arr) {

    const tabDiv = document.createElement('div');

    tabDiv.classList.add('tab');

    tabDiv.textContent = arr;

    return tabDiv;

}

//to check tab structure in the console
console.log(tabs());

const topicsContainer = document.querySelector('.topics');