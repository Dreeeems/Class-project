// recupération de l'url
const firstpart = 'https://api.waqi.info/feed/';
const token="/?token=fc03379d78b510890bcf257c00130ed32e5ebcd7";
//let type_de_resultat='max';




function city2(){
    secondoption.className="divdisplayyes";
}
function search(){
  //récupération des divers éléments et informations
    const searchbar=document.getElementById("searchbar");
    const searchbar2=document.getElementById("searchbar2");
    
    let select = document.getElementById('Selector');
    let type_de_resultat = select.options[select.selectedIndex].value;
  

    let city=document.getElementById("searchbar").value;
    let city2=document.getElementById("searchbar2").value;

    // Création d'une alerte si une des deux valeurs des villes sont vide.
    if(city==""|| city2==""){
        alert('You must give at least two cities to compare them');
    }
    //console.log(city);
    //console.log(city2);

    //On vide le champs des inputs type text pour faire plus prore
     document.getElementById("searchbar").value="";
     document.getElementById("searchbar2").value="";
     let url=firstpart+city+token;
     let url2=firstpart+city2+token;
     //console.log(url);
     
                /*On va fetch l'url pour pouvoir récupérer les données. Une fois fait
                nous allons les transformer en json*/     
 
         console.log("rien n'est mémorisé");
 
         fetch(url).then(function (response) {
             return response.json();
             //Création d'un local storage
         }).then(function (my_json) {
             //console.log(my_json);
             
            
             const string = JSON.stringify(my_json);
             localStorage.setItem('citys', string);



             fetch(url2).then(function (response) {
                return response.json();
                
            }).then(function (my_json2) {
                console.log(my_json2);
                
                
                const string = JSON.stringify(my_json2);
                localStorage.setItem('citys2', string);

                const citys = localStorage.getItem('citys');
     const citys2 =localStorage.getItem("citys2");
     my_json = JSON.parse(citys);
        my_json2 = JSON.parse(citys2);

//Attribution des variables
// PARTIE o3
let moyenne_o3_1 = 0;
let max_o3_1 = 0;
let min_o3_1=my_json.data.forecast.daily.o3[0].min;
// PARTIE pm10
let moyenne_pm10_1 = 0;
let max_pm10_1 = 0;
let min_pm10_1=my_json.data.forecast.daily.pm10[0].min;
// PARTIE pm25
let moyenne_pm25_1 = 0;
let max_pm25_1 = 0;
let min_pm25_1=my_json.data.forecast.daily.pm25[0].min;
// PARTIE uvi
let moyenne_uvi_1 = 0;
let max_uvi_1 = 0;
let min_uvi_1=my_json.data.forecast.daily.uvi[0].min;


//--------------------------------------------------------

// PARTIE o3 2
let moyenne_o3_2 = 0;
let max_o3_2 = 0;
let min_o3_2=my_json2.data.forecast.daily.o3[0].min;
// PARTIE pm10 2
let moyenne_pm10_2 = 0;
let max_pm10_2 = 0;
let min_pm10_2=my_json2.data.forecast.daily.pm10[0].min;
// PARTIE pm25 2
let moyenne_pm25_2 = 0;
let max_pm25_2 = 0;
let min_pm25_2=my_json2.data.forecast.daily.pm25[0].min;
// PARTIE uvi 2
let moyenne_uvi_2 = 0;
let max_uvi_2 = 0;
let min_uvi_2=my_json2.data.forecast.daily.uvi[0].min;




//===========================O3================================================  
//calcul de la moyenne o3
for(let i=0; i<my_json.data.forecast.daily.o3.length;i++){
  moyenne_o3_1= moyenne_o3_1 + my_json.data.forecast.daily.o3[i].max
};
moyenne_o3_1=moyenne_o3_1 / 7;
    console.log(moyenne_o3_1);

//calcul de la valeur max o3
for(let i=0; i<my_json.data.forecast.daily.o3.length;i++){
    if(my_json.data.forecast.daily.o3[i].max>max_o3_1){max_o3_1=my_json.data.forecast.daily.o3[i].max;}
    console.log(max_o3_1);
}

//calcul de la valeur min o3
for(let i=0; i<my_json.data.forecast.daily.o3.length;i++){
 if(my_json.data.forecast.daily.o3[i].min<min_o3_1){min_o3_1=my_json.data.forecast.daily.o3[i].min;}
    console.log(min_o3_1);
}
//===========================PM10================================================       

//calcul de la moyenne pm10
for(let i=0; i<my_json.data.forecast.daily.pm10.length;i++){moyenne_pm10_1= moyenne_pm10_1 + my_json.data.forecast.daily.pm10[i].max};
moyenne_pm10_1=moyenne_pm10_1 / 7;


//calcul de la valeur max pm10
for(let i=0; i<my_json.data.forecast.daily.pm10.length;i++){
if(my_json.data.forecast.daily.pm10[i].max>max_pm10_1){max_pm10_1=my_json.data.forecast.daily.pm10[i].max;}
console.log(max_pm10_1);
}

//calcul de la valeur min pm10
for(let i=0; i<my_json.data.forecast.daily.pm10.length;i++){
if(my_json.data.forecast.daily.pm10[i].min<min_pm10_1){min_pm10_1=my_json.data.forecast.daily.pm10[i].min;}

}
//===========================PM25================================================  
//calcul de la moyenne pm25
for(let i=0; i<my_json.data.forecast.daily.pm25.length;i++){moyenne_pm25_1= moyenne_pm25_1 + my_json.data.forecast.daily.pm25[i].max};
moyenne_pm25_1=moyenne_pm25_1 / 7;


//calcul de la valeur max pm25
for(let i=0; i<my_json.data.forecast.daily.pm25.length;i++){
if(my_json.data.forecast.daily.pm25[i].max>max_pm25_1){max_pm25_1=my_json.data.forecast.daily.pm25[i].max;}
console.log(max_pm25_1);
}

//calcul de la valeur min pm25
for(let i=0; i<my_json.data.forecast.daily.pm25.length;i++){
if(my_json.data.forecast.daily.pm25[i].min<min_pm25_1){min_pm25_1=my_json.data.forecast.daily.pm25[i].min;}

}

//===========================UVI================================================  
//calcul de la moyenne uvi
for(let i=0; i<my_json.data.forecast.daily.uvi.length;i++){moyenne_uvi_1= moyenne_uvi_1 + my_json.data.forecast.daily.uvi[i].max};
moyenne_uvi_1=moyenne_uvi_1 / 7;


//calcul de la valeur max uvi
for(let i=0; i<my_json.data.forecast.daily.uvi.length;i++){
if(my_json.data.forecast.daily.uvi[i].max>max_uvi_1){max_uvi_1=my_json.data.forecast.daily.uvi[i].max;}

}

//calcul de la valeur min uvi
for(let i=0; i<my_json.data.forecast.daily.uvi.length;i++){
if(my_json.data.forecast.daily.uvi[i].min<min_uvi_1){min_uvi_1=my_json.data.forecast.daily.uvi[i].min;}

}




//-----------------------------------------------------------------------------------------------------------------------------------
//===========================O3================================================  
//calcul de la moyenne o3
for(let i=0; i<my_json2.data.forecast.daily.o3.length;i++){
    moyenne_o3_2= moyenne_o3_2 + my_json2.data.forecast.daily.o3[i].max
  };
  moyenne_o3_2=moyenne_o3_2 / my_json2.data.forecast.daily.o3.length;
      console.log(moyenne_o3_2);

  //calcul de la valeur max o3
  for(let i=0; i<my_json2.data.forecast.daily.o3.length;i++){
      if(my_json2.data.forecast.daily.o3[i].max>max_o3_2){max_o3_2=my_json2.data.forecast.daily.o3[i].max;}
      console.log(max_o3_2);
  }

  //calcul de la valeur min o3
  for(let i=0; i<my_json2.data.forecast.daily.o3.length;i++){
   if(my_json2.data.forecast.daily.o3[i].min<min_o3_2){min_o3_2=my_json2.data.forecast.daily.o3[i].min;}
      console.log(min_o3_2);
  }
//===========================PM10 2================================================       

//calcul de la moyenne pm10
for(let i=0; i<my_json2.data.forecast.daily.pm10.length;i++){moyenne_pm10_2= moyenne_pm10_2 + my_json2.data.forecast.daily.pm10[i].max};
moyenne_pm10_2=moyenne_pm10_2 / my_json2.data.forecast.daily.pm10.length;


//calcul de la valeur max pm10
for(let i=0; i<my_json2.data.forecast.daily.pm10.length;i++){
if(my_json2.data.forecast.daily.pm10[i].max>max_pm10_2){max_pm10_2=my_json2.data.forecast.daily.pm10[i].max;}
console.log(max_pm10_2);
}

//calcul de la valeur min pm10
for(let i=0; i<my_json2.data.forecast.daily.pm10.length;i++){
if(my_json2.data.forecast.daily.pm10[i].min<min_pm10_2){min_pm10_2=my_json2.data.forecast.daily.pm10[i].min;}

}
//===========================PM25================================================  
//calcul de la moyenne pm25
for(let i=0; i<my_json2.data.forecast.daily.pm25.length;i++){moyenne_pm25_2= moyenne_pm25_2 + my_json2.data.forecast.daily.pm25[i].max};
moyenne_pm25_2=moyenne_pm25_2 / my_json2.data.forecast.daily.pm25.length;


//calcul de la valeur max pm25
for(let i=0; i<my_json2.data.forecast.daily.pm25.length;i++){
if(my_json2.data.forecast.daily.pm25[i].max>max_pm25_2){max_pm25_2=my_json2.data.forecast.daily.pm25[i].max;}
console.log(max_pm25_2);
}

//calcul de la valeur min pm25
for(let i=0; i<my_json2.data.forecast.daily.pm25.length;i++){
if(my_json2.data.forecast.daily.pm25[i].min<min_pm25_2){min_pm25_2=my_json2.data.forecast.daily.pm25[i].min;}

}

//===========================UVI================================================  
//calcul de la moyenne uvi
for(let i=0; i<my_json2.data.forecast.daily.uvi.length;i++){moyenne_uvi_2= moyenne_uvi_2 + my_json2.data.forecast.daily.uvi[i].max};
moyenne_uvi_2=moyenne_uvi_2 / my_json2.data.forecast.daily.uvi.length;


//calcul de la valeur max uvi
for(let i=0; i<my_json2.data.forecast.daily.uvi.length;i++){
if(my_json2.data.forecast.daily.uvi[i].max>max_uvi_2){max_uvi_2=my_json2.data.forecast.daily.uvi[i].max;}

}

//calcul de la valeur min uvi
for(let i=0; i<my_json2.data.forecast.daily.uvi.length;i++){
if(my_json2.data.forecast.daily.uvi[i].min<min_uvi_2){min_uvi_2=my_json2.data.forecast.daily.uvi[i].min;}

}







// console.log( my_json.data.city);
//console.log(city);
   
  //console.log(my_json.data.forecast.daily);






// On crée un tableau qui contiendra toutes les valeursq que l'on souhaite avoir pour le graphique
const MesDataCustom =[{
ville : city,
type:"o3",
valeur : max_o3_1,
},
{
    ville : city,
    type:"pm10",
    valeur : max_pm10_1,
    },
    {
        ville : city,
        type:"pm25",
        valeur : max_pm25_1,
        },
        {
            ville : city,
            type:"uvi",
            valeur : max_uvi_1,
            }

,];
//console.log(MesDataCustom);



/* Création du chart avec un tri en fonction du bouton sur lequel on a appuyé*/


if (type_de_resultat=="max"){
const chart = new CanvasJS.Chart("myChart", {            
title:{
text: "Amount of particulate matter in the air by city"              
},

data: [    
{ 

type: "column",
showInLegend:true,
name: city,
dataPoints: [

{ label: "O3", y: max_o3_1 },
{ label: "PM10", y: max_pm10_1 },
{ label: "PM25", y: max_pm25_1 },                                    
{ label: "UVI", y: max_uvi_1 },


]
},
{ //dataSeries - second quarter

type: "column",
showInLegend:true,
name: city2,                
dataPoints: [
{ label: "O3", y: max_o3_2 },
{ label: "PM10", y: max_pm10_2 },
{ label: "PM25", y: max_pm25_2 },                                    
{ label: "UVI", y: max_uvi_2 },

]
}
]
});

chart.render();
}
else if (type_de_resultat=="min"){
const chart = new CanvasJS.Chart("myChart", {            
title:{
text: "Amount of particulate matter in the air by city"              
},

data: [  //     
{ 

type: "column",
showInLegend:true,
name: city,
dataPoints: [

{ label: "O3", y: min_o3_1 },
{ label: "PM10", y: min_pm10_1 },
{ label: "PM25", y: min_pm25_1 },                                    
{ label: "UVI", y: min_uvi_1 },


]
},
{ //dataSeries - second quarter

type: "column",
showInLegend:true,
name: city2,                
dataPoints: [
 { label: "O3", y: min_o3_2 },
 { label: "PM10", y: min_pm10_2 },
 { label: "PM25", y: min_pm25_2 },                                    
 { label: "UVI", y: min_uvi_2 },

]
}
]
});

chart.render();
}
else if (type_de_resultat=="moyenne"){
const chart = new CanvasJS.Chart("myChart", {            
 title:{
   text: "Amount of particulate matter in the air by city"              
 },

 data: [  //     
 { 
  
  type: "column",
  showInLegend:true,
  name: city,
  dataPoints: [
    
  { label: "O3", y: moyenne_o3_1 },
  { label: "PM10", y: moyenne_pm10_1 },
  { label: "PM25", y: moyenne_pm25_1 },                                    
  { label: "UVI", y: moyenne_uvi_1 },
  
  
  ]
},
{ //dataSeries - second quarter

 type: "column",
 showInLegend:true,
 name: city2,                
 dataPoints: [
     { label: "O3", y: moyenne_o3_2 },
     { label: "PM10", y: moyenne_pm10_2 },
     { label: "PM25", y: moyenne_pm25_2 },                                    
     { label: "UVI", y: moyenne_uvi_2 },
 
 ]
}
]
});

chart.render();
}


            });


         });
 
         
        
        
        

    }
