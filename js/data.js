const calendar = [
	{
		type: "event",
		title: "Welcome Party!",
		informasjon: "Welcome party for new members! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
		dato: "2019-10-05",
		tid: "14:15",
		sted: "Solsiden",
		link:"2019-10-05-welcome-party",
		tag: "Social"
	},
	{type: "practice", title: "Group Practice #32", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-06", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Practice"},
	{type: "practice", title: "Group Practice #33", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-07", tid: "18:00", sted: "Tyholt", link:"javascript:void(0)", tag: "Practice"},
	{type: "practice", title: "Group Practice #34", informasjon: "Drifting. Instructor: Harald Gress", dato: "2019-10-12", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Practice"},
	{type: "event", title: "Drifting fun!", informasjon: "Drifting. Instructor: Harald Gress Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", dato: "2020-01-06", tid: "18:00", sted: "Solsiden", link:"javascript:void(0)", tag: "Social"},
	{type: "event", title: "Party at mine", informasjon: "We will have a great party at mine (near Gløshaugen) next friday in order to celebrate our great efforts so far this year", dato: "2019-10-29", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Social"},
	{type: "event", title: "Lets make some money", informasjon: "During this week we have a fundraising event to raise some money for the club. More info to come", dato: "2019-10-30", tid: "18:00", sted: "Gløshaugen", link:"javascript:void(0)", tag: "Fundraiser"},
	{type: "event", title: "Big competition in OSLO", informasjon: "The big racer competition is being held in Oslo on the 1.11.19. More information to come soon your way", dato: "2019-10-30", tid: "18:00", sted: "Oslo", link:"javascript:void(0)", tag: "Competition"},
];
Date.prototype.getWeekNumber = function() {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};
