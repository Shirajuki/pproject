//LIST OF ARTICLES
////// SKAL OVERSETTE TIL ENGELSK - Synne //////
const articles = [
  {
    title: "Welcome, new members!",
    id_3char: "welcome_new_members", //makes it easier to create short-forms to use for id and anchor links //kan lage for loop som først bruker split or whatev på titleen og så setter de sammen med _
    date: "15. September 2019",
    p_text: "Maecenas euismod porttitor magna, condimentum blandit eros eleifend sit amet. Aliquam pharetra, libero vitae auctor dictum, sapien orci mollis enim, sit amet auctor ipsum arcu non augue. Mauris eget auctor velit, at tincidunt sem. Quisque vel leo sed felis tincidunt molestie. Suspendisse scelerisque nunc vitae velit aliquam viverra. Pellentesque purus orci, eleifend et sagittis at, fringilla ac lorem. Aliquam erat volutpat. Nulla facilisi. Sed venenatis, nunc eget egestas fringilla, tellus nisl viverra nulla, fermentum faucibus enim lectus aliquam est. Duis sodales tellus sed ipsum condimentum, at cursus ligula porttitor. Duis cursus elit porta sem semper, id fermentum nibh dignissim. Mauris finibus dolor urna, id blandit sapien cursus non.",
  },
  {
    title: "Greet the new coach!",
    id_3char: "greet_the_new_coach",
    date: "29. September 2019",
    p_text: "Nunc id cursus mi, id facilisis risus. Suspendisse sollicitudin, ipsum vitae rutrum ullamcorper, arcu sem tincidunt nisl, sit amet dignissim dui massa ut orci. Cras in velit vel lacus accumsan tristique eget convallis eros. Vestibulum eu pulvinar metus. Cras risus leo, tristique non nunc vel, venenatis venenatis nulla. Quisque nec dolor fringilla, mollis odio nec, malesuada ipsum. Quisque fringilla velit eu massa sagittis fermentum nec sit amet orci. Duis sed leo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pulvinar at tellus elementum aliquam. Proin posuere auctor leo laoreet pharetra. Curabitur arcu lorem, volutpat eu turpis et, tempus tempor ante. Nam vitae dui lectus. Maecenas egestas id neque sed vulputate.",
  },
  {
    title: "Tshirts available",
    id_3char: "tshirts_available",
    date: "6. October 2019",
    p_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Rule change!",
    id_3char: "rule_change",
    date: "22. October 2019",
    p_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Have YOU seen the spooky ghost?",
    id_3char: "spooky_scary",
    date: "31. October 2019",
    p_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    title: "Competition qualification!!",
    id_3char: "competition_qualification",
    date: "10. November 2019",
    p_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
]


//loop takes data from the set "articles" and prepends it to list in html as html-code
window.onload = function(){
  for(let i = 0; i<articles.length; i++){
    //section and li-elements
    let li_element = document.createElement("li"); //declares new local variable, creates new element: li-node
    let sec_element = '<section class="newsarticle"><div class="news_heading"><h3 id="' + articles[i].id_3char +'">' + articles[i].title + '</h3><span class="span_date">' + articles[i].date + '</span></div><p>' + articles[i].p_text + '</p></section>'
    li_element.innerHTML = sec_element;  //fills the li-element with input-element content
    document.getElementById("list_with_articles").prepend(li_element); //writes to html-element with id list, prepends the node (new task) to the start of the list
    //console.log(li_element);

    //ENDRING: SLIK AT BARE DE 3 NYESTE VISES I NAVEN
    //anchor links in sidebar
    let li_nav_element = document.createElement("li"); //declares new local variable, creates new element: li-node
    let a_element = '<a href="#' + articles[i].id_3char + '">' + articles[i].title + '</a>'
    li_nav_element.innerHTML = a_element;  //fills the li-element with input-element content
    document.getElementById("navbar_list").prepend(li_nav_element); //writes to html-element with id list, prepends the node (new task) to the start of the list
    //console.log(li_element2);
  }
}

//chose to register date as just manual input string rather than the date (date obj.) it was "posted"/(added) because it was easier to write and the main focus of our site was elsewhere this time



//burgermeny sidenav
// function showNavbar(){
//   let sidenav = document.getElementById("sidenav")
//   sidenav.innerHTML='<div id="mobile"><div class=""><li><a href="spooky_scary.html"><br/>hei</a></li></div></div>'
// }
// showNavbar()
