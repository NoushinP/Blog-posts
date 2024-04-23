 allBlogs = JSON.parse(localStorage.getItem('blogs')) || []
 
 const userBlogs = document.querySelector('#blogs');

 for (let i=0; i < allBlogs.length; i++) {
    console.log(allBlogs[i])

    blogPost = document.createElement('div')
    blogTitle = document.createElement('h1')
    blogContent = document.createElement('p')
    blogUsername = document.createElement('h2')

    blogTitle.textContent = allBlogs[i].title
    blogContent.textContent = allBlogs[i].blogContent
    blogUsername.textContent = allBlogs[i].username 

    blogPost.append(blogUsername,blogTitle,blogContent);

    userBlogs.appendChild(blogPost);
 }

