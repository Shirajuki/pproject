//LIST OF ARTICLES
const articles = [
  {
    overskrift: "Welcome!",
    id_3char: "wel",
    date: "15. September 2019",
    p_text: "Maecenas euismod porttitor magna, condimentum blandit eros eleifend sit amet. Aliquam pharetra, libero vitae auctor dictum, sapien orci mollis enim, sit amet auctor ipsum arcu non augue. Mauris eget auctor velit, at tincidunt sem. Quisque vel leo sed felis tincidunt molestie. Suspendisse scelerisque nunc vitae velit aliquam viverra. Pellentesque purus orci, eleifend et sagittis at, fringilla ac lorem. Aliquam erat volutpat. Nulla facilisi. Sed venenatis, nunc eget egestas fringilla, tellus nisl viverra nulla, fermentum faucibus enim lectus aliquam est. Duis sodales tellus sed ipsum condimentum, at cursus ligula porttitor. Duis cursus elit porta sem semper, id fermentum nibh dignissim. Mauris finibus dolor urna, id blandit sapien cursus non.",
  },
  {
    overskrift: "Greet the new coach!",
    id_3char: "gre",
    date: "29. September 2019",
    p_text: "Nunc id cursus mi, id facilisis risus. Suspendisse sollicitudin, ipsum vitae rutrum ullamcorper, arcu sem tincidunt nisl, sit amet dignissim dui massa ut orci. Cras in velit vel lacus accumsan tristique eget convallis eros. Vestibulum eu pulvinar metus. Cras risus leo, tristique non nunc vel, venenatis venenatis nulla. Quisque nec dolor fringilla, mollis odio nec, malesuada ipsum. Quisque fringilla velit eu massa sagittis fermentum nec sit amet orci. Duis sed leo tellus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pulvinar at tellus elementum aliquam. Proin posuere auctor leo laoreet pharetra. Curabitur arcu lorem, volutpat eu turpis et, tempus tempor ante. Nam vitae dui lectus. Maecenas egestas id neque sed vulputate.",
  },
  {
    overskrift: "Tshirts available",
    id_3char: "tsh",
    date: "6. October 2019",
    p_text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  }
]

window.onload = function(){
  for(let i = 0; i<articles.length; i++){
    //making section-elements and li-elements, printing to list
    let sec_element = '<section class="nyhetsartikkel"><div class="nyhet_heading"><h3 id="' + articles[i].id_3char +'">' + articles[i].overskrift + '</h3><span class="span_date">' + articles[i].date + '</span></div><p>' + articles[i].p_text + '</p></section>'
    let li_element = document.createElement("li"); //declares new local variable, creates new element: li-node
    li_element.innerHTML = sec_element;  //fills the li-element with input-element content
    document.getElementById("liste_med_articles").prepend(li_element); //writes to html-element with id list, prepends the node (new task) to the start of the list
    console.log(li_element);

    //making anchor links in sidebar
    let a_element = '<a href="#' + articles[i].id_3char + '">' + articles[i].overskrift + '</a>'
    let li_element2 = document.createElement("li"); //declares new local variable, creates new element: li-node
    li_element2.innerHTML = a_element;  //fills the li-element with input-element content
    document.getElementById("navbar_liste").prepend(li_element2); //writes to html-element with id list, prepends the node (new task) to the start of the list
    console.log(li_element2);

    console.log("--------");
  }
}
