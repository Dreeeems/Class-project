//Importation des deux csv
d3.csv("js/datas/MLW_Meta.csv").then(function(particules){
console.log(particules);



d3.csv("js/datas/atmosphère.csv").then( function(data) {
    console.log(data);
 data.forEach(datas => {
     
    
//créations des polygones
    let polygon = L.polygon([
        
        [datas.lat_y1, datas.lon_x1],
        [datas.lat_y2, datas.lon_x2]
    ]).addTo(map);
    
    polygon.on("click", function (event) {
        map.setView([datas.lat_y1,datas.lon_x1],18);
        filter(particules,datas);
    })
    
})
})
})


//création de la map
var map = L.map('map').setView([51.505, -0.09], 18);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'your.mapbox.access.token'
}).addTo(map);

//appel de la fonction qui permet de faire afficher le popup d'info
function filter(particules,data){
 let div=document.getElementById("Infomartions");
//console.log(particules);
//console.log(data);
//déplacement du popup
div.classList.remove("Infomartionsfalse");
div.className ="Infomartionstrue";
div.style.right = 0;
//création des informations du popup 
div.innerHTML=`<label> Beach Name <br> </label> <input type='text' placeholder='${data.BeachName}'readonly="readonly"> </input>
<br> 
<br> 
<label> Sea Region<br> </label>
<input type='text' placeholder='${data.BeachRegionalSea}'readonly="readonly"> </input>
<br> 
<br> 
<label> Event and date <br> </label>
<input type='text' placeholder='${data.EventType+"  "+data.EventDate}'readonly="readonly"> </input>
<br> 
<br> 
<label> Country Code<br> </label>
<input type='text' placeholder='${data.BeachCountrycode}'readonly="readonly"> </input>
<br> 
<br> 
<label> Beach Length <br> </label>
<input type='text' placeholder='${data.BeachLength_m}' readonly="readonly"> </input>
<br> 
<br> 
<div class="box">
<select name="G" id="Gselector">
`
    //création d'un objet qui tri pour ne faire apparaitre que les G
let newData = {};
let array=[];
console.log(particules);
Object.entries(data)
//filtrage des valeurs pour ne garder que celles qui continent un caractère
  .filter(([, value]) => value !== "")
  .forEach(([key, value]) => (newData[key] = value));
  //Variable qui prend en compte les clés que l'on veut effacer 
notallowed=[,"BeachCountrycode","BeachLength_m","BeachLocation" ,"BeachName","BeachRegionalSea","BeachType","CommunityName","EventDate","EventType","lat_y1", "lat_y2","lon_x1", "lon_x2"]
//filtrage avec la variable
Object.keys(newData)
  .filter(key => notallowed.includes(key))
  .forEach(key => delete newData[key]);
  for(let i=0;i<Object.values(newData).length; i++){
    array.push(Object.values(newData)[i]=Object.entries(particules)[i]);
  }

  /*Tentative de créer un tableau pour pouvoir regarder si newdata[i] pouvait être égale a particules[i] pour pouvoir 
  mettre en place la possibilité de voir que signifiait les G*/

  /*console.log(array);
  for(let i=0;i<Object.values(newData).length; i++){
    Object.keys(newData)
    .filter(key => notallowed.includes(key))
    .forEach(key => delete newData[key]);
  }*/
for(let i=0;i<Object.values(newData).length; i++){
    let Selector=document.getElementById("Gselector");

    Selector.innerHTML=Selector.innerHTML+ `<option value=""> type : ${Object.keys(newData)[i]} number: ${Object.values(newData)[i]}  </option>`;
   
}


//console.log(particules.Object.keys(newData)[0]);




console.log(Object.values([newData]));


}

 


