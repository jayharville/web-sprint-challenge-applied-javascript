// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.

get('https://lambda-times-api.herokuapp.com/articles')

.then((res) => {
    console.log('This is the response: ', res);
    const response = res.data.articles

    for (let key in response) {

        response[key].forEach((e) => {
            cardsContainer.appendChild(cards(e))
        });
    }
})


.catch((err) => {
    console.log('The error is :', err);

});

//creating cards structure
function cards(obj) {

    //creating elements
    const cardDiv = document.createElement('div');
    const headlineDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const imgDiv = document.createElement('div');
    const img = document.createElement('img');
    const authorSpan = document.createElement('span');

    //creating class to elements
    cardDiv.classList.add('card');
    headlineDiv.classList.add('headline');
    authorDiv.classList.add('author');
    imgDiv.classList.add('img-container');

    //adding children inside parent elements
    cardDiv.appendChild(headlineDiv);
    cardDiv.appendChild(authorDiv);
    authorDiv.appendChild(imgDiv);
    imgDiv.appendChild(img);
    authorDiv.appendChild(authorSpan);

    //adding key info to elements
    headlineDiv.textContent = obj.headline;
    img.src = obj.authorPhoto;
    authorSpan.textContent = obj.authorName;

    return cardDiv;

}

//to see card structure in the console
//console.log(cards());

const cardsContainer = document.querySelector('.cards-container');