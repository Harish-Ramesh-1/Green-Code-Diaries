// Get the button
let mybutton = document.getElementById("scrollToTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
mybutton.onclick = function() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// Fetch and display blog posts
document.addEventListener("DOMContentLoaded", function() {
  const blogPostsContainer = document.getElementById("blog-posts");
  const rssUrl = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Fgreencodediaries.blogspot.com%2Ffeeds%2Fposts%2Fdefault";

  fetch(rssUrl)
    .then(response => response.json())
    .then(data => {
      if (data.status === "ok") {
        const posts = data.items;
        let html = "";
        posts.forEach(post => {
          // Parse the post HTML to find an inline image
          const parser = new DOMParser();
          const doc = parser.parseFromString(post.content, 'text/html');
          const firstImage = doc.querySelector('img');

          // Prefer explicit thumbnail or enclosure provided by the RSS/JSON feed
          const thumbnail = post.thumbnail || post.thumbnailUrl || null;
          const enclosureImage = (post.enclosure && post.enclosure.link) ? post.enclosure.link : null;

          // Choose the most relevant available image in order of preference
          const imageUrl = thumbnail || enclosureImage || (firstImage ? firstImage.src : 'https://res.cloudinary.com/jerrick/image/upload/v1497283958/iufq6qah7b1rsmhdwjwx.jpg');

          const excerpt = post.description || post.content_text || post.content.replace(/<[^>]*>/g, '').substring(0, 150) + '...';

          html += `
            <article class="article">
              <a href="${post.link}" target="_blank">
                <img src="${imageUrl}" alt="${post.title}" class="article-image">
              </a>
              <h3 class="article-title">${post.title}</h3>
              <a href="${post.link}" class="read-more" target="_blank">Read More</a>
            </article>
          `;
        });
        blogPostsContainer.innerHTML = html;
      }
    })
    .catch(error => {
      console.error("Error fetching blog posts:", error);
      blogPostsContainer.innerHTML = "<p>Unable to load blog posts at the moment. Please try again later.</p>";
    });
});
