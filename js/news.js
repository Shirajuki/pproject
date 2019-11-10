const navbarList = document.getElementById("navbarList");
const articleList = document.getElementById("listWithArticles");

//loop takes data from the set "articles" and prepends it to list in html as html-code
window.addEventListener('load', () => {
  //prints the news articles: section and li-elements
  for (let i = 0; i < news.length; i++) {
    const liElement = document.createElement("li"); //declares new local variable, creates new element: li-node
    const secElement = `<section class="newsarticle"><a id="${news[i].id}" class="anchor"></a><div class="newsHeading"><h2>${news[i].title}</h2><span class="spanDate">${new Date(news[i].date).toNorwegianLocaleDateString()}</span></div><p>${news[i].info}</p></section><hr>`;
    liElement.innerHTML += secElement;  //fills the li-element with content
    articleList.prepend(liElement); //writes to html-element with id listWithArticles, prepends the node to the start of the list
  }
  //prints the anchor links in sidebar, only the latest news
  const newest = news.slice(-5); //the 3* latest articles (added to the bottom of the list "articles")
  for (let i = 0; i < newest.length; i++) {
    const liNavElement = document.createElement("li");
    const liNavAnchor = `<a href="#${newest[i].id}">${newest[i].title}</a>`;
    liNavElement.innerHTML = liNavAnchor;
    navbarList.prepend(liNavElement); //writes to html-element with id navbarList, prepends the node to the start of the list
  }
});
