var data =[
    {
        type: 'Practice',
        date: '1.10.19',
        title: 'Group practice',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiisate!'
    },
    {
        type: 'Social',
        date: '12.10.19',
        title: 'Party at mine',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiisate!'
    },
    {
        type: 'Fundraiser',
        date: '21.10.19',
        title: 'Lets make some money',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiisate!'
    },
    {
        type: 'Competition',
        date: '22.10.19',
        title: 'Big competition in Oslo',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiisate!'
    },
    {
        type: 'Practice',
        date: '25.10.19',
        title: 'Group practice',
        mainText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse ex nam quo reprehenderit. Ad alias amet at blanditiisate!'
    }
];
window.onload = skrivUtArtikkel;
//Skrive ut alle artiklene som ligger lagret i "databasen"(data)
function skrivUtArtikkel(event) {
    event.preventDefault();

    for (i = 0; i <= data.length; i++){
       var type = data[i].type;
       var date = data[i].date;
       var title = data[i].title;
       var mainText = data[i].mainText;

        //var liste = document.getElementById('liste');
        var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
        var li = document.createElement('li');
        li.innerHTML = articleEl;
        document.getElementById('liste').prepend(li);


        }
    }


//Sorter type
function sorterType(type) {
    var liType = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].type == 'Practice') {
            liType.push(data[i]);


        }

    }
    var liste = document.getElementById('liste');
    liste.innerHTML = '';
    for (j = 0; j < data.length; j++) {
        var type = liType[j].type;
        var date = liType[j].date;
        var title = liType[j].title;
        var mainText = liType[j].mainText;


        var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
        var liPostType = document.createElement('li');
        liPostType.innerHTML = articleEl;
        liste.prepend(liPostType);
    }
}

document.getElementById('sortPractice').onclick = function() {sorterType('Practice')};
//Hente ut knapp til å sortere etter type=practice, og tildele funksjon


/*
//Sortere type Social
function sorterTypeSocial() {
    var liSoc = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].type == 'Social') {
            liSoc.push(data[i]);


        }

    }
    var liste = document.getElementById('liste')
    liste.innerHTML = '';
    for (j = 0; j < data.length; j++) {
        var type = liSoc[j].type;
        var date = liSoc[j].date;
        var title = liSoc[j].title;
        var mainText = liSoc[j].mainText;


        var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
        var liPostSoc = document.createElement('li');
        liPostSoc.innerHTML = articleEl;
        liste.prepend(liPostSoc);
    }
}

//Hente ut knapp til å sortere etter type=social, og tildele funksjon
var sortSocialHTML = document.getElementById('sortSocial');
sortSocialHTML.addEventListener('click',sorterTypeSocial);

//Sortere type fundraiser
function sorterTypeFundraiser() {
    var liFun = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].type == 'Fundraiser') {
            liFun.push(data[i]);


        }

    }
    var liste = document.getElementById('liste')
    liste.innerHTML = '';
    for (j = 0; j < data.length; j++) {
        var type = liFun[j].type;
        var date = liFun[j].date;
        var title = liFun[j].title;
        var mainText = liFun[j].mainText;


        var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
        var liPostFun = document.createElement('li');
        liPostFun.innerHTML = articleEl;
        liste.prepend(liPostFun);
    }
}
//Hente ut knapp til å sortre etter type=fundraiser, og tildele funksjon
var sortFundraiserHTML = document.getElementById('sortFundraiser');
sortFundraiserHTML.addEventListener('click',sorterTypeFundraiser);

//Sortere type Competition
function sorterTypeCompetition() {
    var liCom = [];
    for (i = 0; i < data.length; i++) {
        if (data[i].type == 'Competition') {
            liCom.push(data[i]);


        }

    }
    var liste = document.getElementById('liste')
    liste.innerHTML = '';
    for (j = 0; j < data.length; j++) {
        var type = liCom[j].type;
        var date = liCom[j].date;
        var title = liCom[j].title;
        var mainText = liCom[j].mainText;


        var articleEl =  '<article><h2>'+title+'</h2><br> <p class="date">POSTED: '+date+'</p> <p class="type">TAG: '+type+'</p> <p class="mainText">'+mainText+'</p></article>';
        var liPostCom = document.createElement('li');
        liPostCom.innerHTML = articleEl;
        liste.prepend(liPostCom);
    }
}

//Hente ut knapp til å sortre etter type=fundraiser, og tildele funksjon
var sortCompetitionHTML = document.getElementById('sortCompetition');
sortCompetitionHTML.addEventListener('click',sorterTypeCompetition);*/
