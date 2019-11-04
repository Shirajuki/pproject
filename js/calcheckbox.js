let locations=document.querySelector("#locationBox")

let locationsfromdata=[]

for (item of calendar){
  let loc=item.sted
  if (locationsfromdata.includes(loc)===false){
    locationsfromdata.push(loc)
  }
}

for (place of locationsfromdata){
  let label=place.toLowerCase().replace(" ","")+"Checkbox"
  console.log(label);
  locations.innerHTML+='<div class="input"><input id='+label+" "+'type="checkbox" checked><label for='+label+'>'+place+'</label></div>'
}
