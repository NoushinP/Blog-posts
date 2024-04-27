 allBlogs = JSON.parse(localStorage.getItem('blogs')) || []
 
 const userBlogs = document.querySelector('#blogs');
 var themeSwitcher= document.getElementById('theme-switcher');

 for (let i=0; i < allBlogs.length; i++) {
    console.log(allBlogs[i])

    blogPost = document.createElement('div');
    blogTitle = document.createElement('h3');
    blogContent = document.createElement('h3');
    blogUsername = document.createElement('h3');

    blogTitle.textContent = allBlogs[i].title;
    blogContent.textContent = allBlogs[i].content;
    blogUsername.textContent = allBlogs[i].username;
    blogPost.classList.add('square');
    blogPost.append(blogUsername,blogTitle,blogContent);

    userBlogs.appendChild(blogPost);
 }

 themeSwitcher.addEventListener('change',function(){
   var element = document.body;
   element.classList.toggle('dark-mode');
});

