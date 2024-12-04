// Add any interactivity, like toggling between monthly and annual pricing.
document.querySelectorAll('.toggle-pricing').forEach(button => {
    button.addEventListener('click', () => {
    alert("Switching pricing view!");
    });
});

// Fetch blog content from JSON file
fetch('blog-content.json')
.then(response => response.json())
.then(blogs => {
    const blogGrid = document.getElementById('blogGrid');

    blogs.forEach(blog => {
    const blogCard = document.createElement('article');
    blogCard.className = 'blog-card';
    blogCard.innerHTML = `
        <img src="${blog.image}" alt="${blog.title}">
        <h3>${blog.title}</h3>
        <p>${blog.description}</p>
        <a href="${blog.link}" class="btn primary">Read More</a>
    `;
    blogGrid.appendChild(blogCard);
    });
})
.catch(error => console.error('Error loading blog content:', error));
