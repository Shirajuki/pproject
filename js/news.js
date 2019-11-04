//LIST OF ARTICLES
const articles = [
  {
    title: "Welcome, new members!",
    id_3char: "welcome_new_members", //makes it easier to create short-forms to use for id and anchor links //other possible solution: using split to remove whitespace and characters that are not letter -> get first 6 letters to make id/anchor link
    date: "15. September 2019", //chose to register date as just manual input string rather than the date (date obj.) it was "posted"/(added) because it was easier to write and the main focus of our site was elsewhere this time + didn't have time
    p_text: "A new semester has started, and new members have joined us. It's time to (officially) welcome the new members! We, here at LMR, hope that you are enjoying practicing with our team and that you already love the sport as much as we do. Until now it has been quite hectic, but the practices will soon fall into their normal routine. We recommend all new players read the rulebook (which can be found online, just a google search away). We hope to see you all next practice, and on all the practices, competitions and social events after that!"
  },
  {
    title: "Greet the new coach!",
    id_3char: "greet_the_new_coach",
    date: "29. September 2019",
    p_text: "We are very proud to introduce our new coach to the team! Ellen Klipp has extensive experience from coaching teams in the US and is dedicated to helping our team and athletes continue to grow and improve. Please give her a warm welcome in true LMR spirit!"
  },
  {
    title: "Tshirts available",
    id_3char: "tshirts_available",
    date: "6. October 2019",
    p_text: "Finally they have arrived! The new team t-shirts are here and they are fantastic! If you don't believe it yet, they will be available at next practice, both to view and order one for yourself. You can also contact us on e-mail to order yours today! Get matching outfits for the whole team!"
  },
  {
    title: "Rule change",
    id_3char: "rule_change",
    date: "22. October 2019",
    p_text: "Our organization plays by the US lawnmower racing rules. The official board has updated their (international) US rulebook. We advise every athlete, coach and member of the staff to read the updated version of the rulebook. The rulebook can be found on this site: <span><a href='http://letsmow.com/rules-tech/official-rules/' target='_blank'>letsmow.com</a></span>"
  },
  {
    title: "Have YOU seen the spooky ghost?",
    id_3char: "spooky_scary",
    date: "31. October 2019",
    p_text: "Halloween is upon us and so are the ghosts... This year, the ghost of the court, has been particularly fond of pranking us. Equipment have been 'misplaced' or hidden, mowers are starting up of their own, and one member of the staff even saw a mower taking off on its own! Even so, the most frightening sight was when a couple of our new athletes were on their way home. Taking the shortcut over the field, talking amongst each other, the wind suddenly started howling. All of a sudden they saw a ghostly shape on the court in front of them. The ghost, known as 'The Mower', sat on a ghost lawnmower, which took off faster than we have ever been able to on our own real lawnmowers, and disappeared... 'The Mower' have a history of pranking the team, and likes to freak out new members, but it has never done any real harm, so you don't need to worry! Walk safe and happy halloween!"
  },
  {
    title: "Competition qualification",
    id_3char: "competition_qualification",
    date: "10. November 2019",
    p_text: "Congratulations to our members that qualified for the national competition at Gresstun! Thank you for an amazing weekend and race, making it really interesting for the spectators to watch. We wish you all the best with upcoming practices and the new competition."
  }
]


//loop takes data from the set "articles" and prepends it to list in html as html-code
window.onload = function() {
  //prints the news articles: section and li-elements
  for(let i = 0; i<articles.length; i++) {
    let li_element = document.createElement("li"); //declares new local variable, creates new element: li-node
    let sec_element = '<section class="newsarticle"><div class="news_heading"><h2 id="' + articles[i].id_3char +'">' + articles[i].title + '</h2><span class="span_date">' + articles[i].date + '</span></div><p>' + articles[i].p_text + '</p></section>';
    li_element.innerHTML = sec_element;  //fills the li-element with content
    document.getElementById("list_with_articles").prepend(li_element); //writes to html-element with id list_with_articles, prepends the node to the start of the list
  }
  //prints the anchor links in sidebar, only the latest news
  let navbar_list = document.getElementById("navbar_list");
  let newest = articles.slice(-3); //the 3* latest articles (added to the bottom of the list "articles")
  for(let j = 0; j < newest.length; j++) {
    let li_nav_element = document.createElement("li"); //declares new local variable, creates new element: li-node
    let li_nav_anchor = document.createElement("a");
    // let a_element = '<a href="#' + newest[j].id_3char + '">' + newest[j].title + '</a>';
    li_nav_anchor.innerHTML = newest[j].title;  //fills the li-element with content
    li_nav_element.onclick = () => {
      const hash = newest[j].id_3char;
			document.getElementById(hash).scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
    };
    li_nav_element.appendChild(li_nav_anchor);
    navbar_list.prepend(li_nav_element); //writes to html-element with id navbar_list, prepends the node to the start of the list
  }
}
