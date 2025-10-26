const articlesContainer = document.getElementById("articles-container");

fetch("articles.json") // or "data/articles.json" if in data folder
  .then(response => response.json())
  .then(data => {
    data.forEach(article => {
      const articleEl = document.createElement("div");
      articleEl.className = "article";
      articleEl.innerHTML = `
        <h2>${article.title}</h2>
        <small>${article.date}</small>
        <p>${article.content}</p>
        <hr>
      `;
      articlesContainer.appendChild(articleEl);
    });
  })
  .catch(err => {
    console.error("Error loading articles:", err);
    articlesContainer.innerHTML = "<p>Unable to load articles at the moment.</p>";
  });
