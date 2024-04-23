const route = (event) => { //source cite it!! Web address
    event = event || window
    event.preventDefault();
    window.history.pushState({}, "", event.target.href);
}

window.route = route;

const userName = document.querySelector('#username');
const userTitle = document.querySelector('#title');
const userContent = document.querySelector('#content');
const msgDiv = document.querySelector('#form');
const submitButton = document.querySelector('#submit');

function displayMessage(type, message) {
    alert(message);
}



userName.textContent = username;
userTitle.textContent = title;
userContent.textContent = content;

submitButton.addEventListener('click', submitPost);

//when click "Submit the form" without user, title or content, get an alert to complete the form. when submit data is stored to local storage
function submitPost(event) {
    event.preventDefault();
   
    let username = userName.value;
    let title = userTitle.value;
    let content = userContent.value;

    console.log(username,title,content);

    if (username === '') {
        displayMessage('error', 'username cannot be blank');
    } else if (title === '') {
        displayMessage('error', 'title cannot be blank');
    } else if (content === '') {
        displayMessage('error', 'content cannot be blank');
    } 

    newBlog = {username,title,content};
    allBlogs = JSON.parse(localStorage.getItem('blogs')) || []
    allBlogs.push(newBlog);
    localStorage.setItem('blogs', JSON.stringify(allBlogs));

    window.location = "blog.html";


}

// when form submits, direct to New post page


//blog/posts page: add the light/dark 


//when clicking the light/dark button color style changes


//when view "content", list the posts that are pulled from local storage


// when view "localstorage", JSON array of post objects including username,title, and content

