const articles = [
  {
    title: "Welcome, new members!",
    id: "welcome-new-members", //makes it easier to create short-forms to use for id and anchor links //other possible solution: using split to remove whitespace and characters that are not letter -> get first 6 letters to make id/anchor link
    date: "2019-09-15",
    text: "A new semester has started, and new members have joined us. It's time to (officially) welcome the new members! We, here at LMR, hope that you are enjoying practicing with our team and that you already love the sport as much as we do. Until now it has been quite hectic, but the practices will soon fall into their normal routine. We recommend all new players read the rulebook (which can be found online, just a google search away). We hope to see you all next practice, and on all the practices, competitions and social events after that!"
  },
  {
    title: "Greet the new coach!",
    id: "greet-the-new-coach",
    date: "2019-09-29",
    text: "We are very proud to introduce our new coach to the team! Ellen Klipp has extensive experience from coaching teams in the US and is dedicated to helping our team and athletes continue to grow and improve. Please give her a warm welcome in true LMR spirit!"
  },
  {
    title: "Tshirts available",
    id: "tshirts-available",
    date: "2019-10-06",
    text: "Finally they have arrived! The new team t-shirts are here and they are fantastic! If you don't believe it yet, they will be available at next practice, both to view and order one for yourself. You can also contact us on e-mail to order yours today! Get matching outfits for the whole team!"
  },
  {
    title: "Rule change",
    id: "rule-change",
    date: "2019-10-22",
    text: "Our organization plays by the US lawnmower racing rules. The official board has updated their (international) US rulebook. We advise every athlete, coach and member of the staff to read the updated version of the rulebook. The rulebook can be found on this site: <a href='http://letsmow.com/rules-tech/official-rules/' target='_blank' rel='noopener'>letsmow.com</a>"
  },
  {
    title: "Have YOU seen the spooky ghost?",
    id: "spooky-scary",
    date: "2019-10-31",
    text: "Halloween is upon us and so are the ghosts... This year, the ghost of the court, has been particularly fond of pranking us. Equipment have been 'misplaced' or hidden, mowers are starting up of their own, and one member of the staff even saw a mower taking off on its own! Even so, the most frightening sight was when a couple of our new athletes were on their way home. Taking the shortcut over the field, talking amongst each other, the wind suddenly started howling. All of a sudden they saw a ghostly shape on the court in front of them. The ghost, known as 'The Mower', sat on a ghost lawnmower, which took off faster than we have ever been able to on our own real lawnmowers, and disappeared... 'The Mower' have a history of pranking the team, and likes to freak out new members, but it has never done any real harm, so you don't need to worry! Walk safe and happy halloween!"
  },
  {
    title: "Competition qualification",
    id: "competition-qualification",
    date: "2019-11-10",
    text: "Congratulations to our members that qualified for the national competition at Gresstun! Thank you for an amazing weekend and race, making it really interesting for the spectators to watch. We wish you all the best with upcoming practices and the new competition."
  }
]
const navbarList = document.getElementById("navbarList");
const articleList = document.getElementById("listWithArticles");

//loop takes data from the set "articles" and prepends it to list in html as html-code
window.addEventListener('load', () => {
  //prints the news articles: section and li-elements
  for (let i = 0; i < articles.length; i++) {
    const liElement = document.createElement("li"); //declares new local variable, creates new element: li-node
    const secElement = `<section class="newsarticle"><a id="${articles[i].id}" class="anchor"></a><div class="newsHeading"><h2>${articles[i].title}</h2><span class="spanDate">${new Date(articles[i].date).toLocaleDateString("nb-NO",{year: 'numeric', month: '2-digit', day: '2-digit'})}</span></div><p>${articles[i].text}</p></section><hr>`;
    liElement.innerHTML += secElement;  //fills the li-element with content
    articleList.prepend(liElement); //writes to html-element with id listWithArticles, prepends the node to the start of the list
  }
  //prints the anchor links in sidebar, only the latest news
  const newest = articles.slice(-5); //the 3* latest articles (added to the bottom of the list "articles")
  for (let i = 0; i < newest.length; i++) {
    const liNavElement = document.createElement("li");
    const liNavAnchor = `<a href="#${newest[i].id}">${newest[i].title}</a>`;
    liNavElement.innerHTML = liNavAnchor;
    navbarList.prepend(liNavElement); //writes to html-element with id navbarList, prepends the node to the start of the list
  }
});
