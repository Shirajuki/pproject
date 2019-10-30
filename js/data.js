const calendar = [
  {
    type: "event",
    title: "Welcome Party!",
    informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		dato: "2019-10-05",
    tid: "14:15",
    sted: "Solsiden",
    link:"2019-10-05-welcome-party",
    tag: "social"
  },
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-06", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-07", tid: "18:00", sted: "Tyholt", link:"javascript:void(0)", tag: ""},
  {type: "practice", title: "", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: ""},
  {type: "event", title: "Drifting fun!", informasjon: "Drifting. Instructor: Harald Gress Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", dato: "2020-01-06", tid: "18:00", sted: "Solsiden", link:"javascript:void(0)", tag: ""},
  {type: "event", title: "Drifting fun!", informasjon: "Drifting. Instructor: Harald Gress Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", dato: "2020-01-06", tid: "18:00", sted: "Solsiden", link:"javascript:void(0)", tag: ""},
];
Date.prototype.getWeekNumber = function() {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};
