const calendar = [
	{ type: "event", title: "Welcome Party!", info: "Welcome party for new members! Its been some time since school started again, but  its never to late to have a welcome party to get to know the new members of the team! Lets gather to have a good time, meet new people, and party the night away. Make sure to bring some good vibes. PS: puking should happen outside.", date: "2019-10-05", time: "14:15", location: "Solsiden", link:"2019-10-05-welcome-party", tag: "Social" },
	{ type: "practice", title: "Group Practice #17", : "Today: Tweaking. Instructor: Harald Gress", date: "2019-10-16", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
	{ type: "practice", title: "Group Practice #16", info: "Today: Speed. Instructor: Harald Gress", date: "2019-10-13", time: "18:00", location: "Tyholt", link:"", tag: "Practice" },
	{ type: "practice", title: "Group Practice #15", info: "Today: Drifting. Instructor: Harald Gress", date: "2019-10-09", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
	{ type: "event", title: "Drifting fun!", info: "Drifting spectacular. Instructor: Harald Gress Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiis cupiditate debitis delectus ea eligendi eum facilis inventore qui repellendus unde, vel. Lorem ipsum dolor sit amet, consectetur adipisicing elit.", date: "2020-01-06", time: "18:00", location: "Solsiden", link:"2020-01-06-drifting-fun", tag: "Social" },
	{ type: "event", title: "Party at mine", info: "It's that time of year again! No, not Christmas (yet). ITS HALLOWEEN. THE SPOOKIES TIME OF YEAR. And it's time to party. It's my honor to invite the entire team  home to me and party the spooky night away into christmas! \n" +"Dress code: costumes (spooky or sexy or funny, everyone is accepted)", date: "2019-10-31", time: "19:00", location: "Samfundet", link:"2019-10-31-party-at-mine", tag: "Social" },
	{ type: "event", title: "Lets make some money", info: "Time to make some money for this rockin' team!\n" +"During this Sunday a fundraiser will be held. We'll sell cakes, waffles, coffee and 'lodd' where you can win some sweet prices! Invite your friends and family. Hope to see you there. ", date: "2019-10-30", time: "18:00", location: "Gløshaugen", link:"2019-10-30-lets-make-some-money", tag: "Fundraiser" },
	{ type: "event", title: "Big competition in Oslo", info: "The coming week there will be held the annual Norwegian Winter Lawnracers Race  (NWLR) for the 3rd time. The group registered to compete will travel together by train on Friday, whilst the lawnmowers will be shipped in a big trailer (like in Cars, the movie). When we arrive in Oslo, will go to the hotel together (unless you have somewhere else to sleep), and have a \"quiet\" night in. The weekend will be dedicated to racing and some socializing.  A party can be guaranteed! Hope to see you there :)", date: "2019-11-15", time: "18:00", location: "Oslo", link:"2019-10-05-big-competition-in-oslo", tag: "Competition" },
	{ type: "practice", title: "Group Practice #18", info: "Today: Drifting. Instructor: Harald Gress", date: "2019-10-20", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
	{ type: "practice", title: "Group Practice #19", info: "Today: Speed. Instructor: Harald Gress", date: "2019-10-23", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
	{ type: "practice", title: "Group Practice #20", info: "Today: Tweaking. Instructor: Harald Gress", date: "2019-10-27", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
	{ type: "practice", title: "Group Practice #21", info: "Today: Speed. Instructor: Harald Gress", date: "2019-10-30", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
	{ type: "practice", title: "Group Practice #22", info: "Today: Drifting. Instructor: Harald Gress", date: "2019-11-03", time: "18:00", location: "Gløshaugen", link:"", tag: "Practice" },
];

Date.prototype.getWeekNumber = function() {
  let d = new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
  let dayNum = d.getUTCDay() || 7;
  d.setUTCDate(d.getUTCDate() + 4 - dayNum);
  let yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
  return Math.ceil((((d - yearStart) / 86400000) + 1)/7)
};
