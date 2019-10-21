window.onload = () => {
  setTimeout(() => {
    document.getElementById("loader").style.visibility = "hidden";
    document.getElementById("loader").style.opacity = 0;
    document.getElementById("main").style.display = "block";
  },300)
  setTimeout(() => {
    document.getElementById("loader").style.display = "none";
  },800)
}
const calendar = [
  {
    type: "event",
    title: "Welcome Party!",
    informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores assumenda deserunt doloribus eligendi iure odio ratione saepe sequi ullam. Asperiores debitis enim esse fugit itaque, neque odit suscipit voluptate!", dato: "2019-10-05",
    tid: "14:15",
    sted: "Solsiden",
    link:"2019-10-05-welcome-party",
    tag: "social"
  },
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-05", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
];
