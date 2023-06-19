import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";
const firebaseConfig = {
    databaseURL: "https://nematech-sport-default-rtdb.firebaseio.com/",
  };
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// function writeUserData(userId, name, email, imageUrl) {
//   // const db = getDatabase();
//   set(ref(db, 'users/' + userId), {
//     username: name,
//     email: email,
//     profile_picture : imageUrl
//   });
// }
const elements = [
  "Vitesse",
  "Resistance",
  "Longueur",
  "Hauteur",
  "Grimper",
  "Poids"
];
const sexes = [
  "Feminin",
  "Masculin"
];
function calcNotePerf(perf) {
  var perf =  perf;
  var secondes = perf.slice(0,2);
  var tierces = perf.slice(4);
  var value = parseInt(secondes) + parseInt(tierces)*(1/60);
  return value;
}
var classes = [];
var perfsLongueurF = [];
var perfsLongueurM = [];
function writeLongueurPerData(classe) {
  sexes.forEach(sex => {
    console.log("sexe ",sex);
    if(sex.startsWith("F")){
      elements.forEach(
        element =>{
          if(element.startsWith("L")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 440,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:294,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:286,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:270,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:260,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:250,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 453,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:294,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:286,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:270,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:260,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 440,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:294,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:286,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:270,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:262,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:250,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 453,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:294,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:288,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:270,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:262,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 460,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:447,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:436,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:422,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:410,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:398,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:388,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:375,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:365,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:354,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:344,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:334,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:324,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:315,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:306,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:297,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:288,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:280,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:272,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:264,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 466,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:453,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:294,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:286,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:270,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 480,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:466,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:453,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:294,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:286,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurF
            ); 
            console.log("envoi vers firebase");  
          }
        }
      )
      console.log("tableau F LONG ",perfsLongueurF);
    }
    else{
      elements.forEach(
        element => {
          if(element.startsWith("L")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 480,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:466,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:453,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:381,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:303,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:290,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:286,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:278,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 539,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:523,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:509,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:494,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:480,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:466,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:453,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:380,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:321,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:312,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 554,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:523,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:509,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:494,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:480,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:466,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:453,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:440,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:428,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:416,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:404,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:392,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:381,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:371,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:360,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:345,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:320,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 579,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:562,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:546,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:531,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:516,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:501,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:487,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:473,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:460,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:447,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:434,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:422,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:410,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:398,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:386,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:374,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:363,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:336,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 586,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:569,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:552,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:536,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:521,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:506,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:491,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:477,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:463,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:450,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:437,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:424,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:412,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:400,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:388,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:376,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:364,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:353,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:330,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 596,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:579,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:562,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:546,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:531,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:516,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:501,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:487,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:473,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:460,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:447,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:434,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:422,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:410,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:398,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:386,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:374,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:363,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:340,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("L")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf: 613,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:596,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:579,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:562,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:546,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:531,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:516,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:501,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:487,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:473,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:460,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(

                  {
                    perf:447,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:434,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:422,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:410,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:398,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:386,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:374,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:363,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:350,
                    note : note
                  }
                )
                perfsLongueurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsLongueurM
            ); 
            console.log("envoi vers firebase");  
          }
          console.log("fin if");
        })
        console.log("tableau M LONG ",perfsLongueurM);
    }
  })
}
var perfsHauteurM = [];
var perfsHauteurF = [];
function writeHauteurPerData(classe) {
  sexes.forEach(sex => {
    console.log("sexe ",sex);
    if(sex.startsWith("F")){
      elements.forEach(
        element => {
          if(element.startsWith("H")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:85,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:83,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:81,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:79,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:77,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:75,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:85,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:83,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:81,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:79,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:77,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:85,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:83,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:81,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:79,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:85,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:143,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:139,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:136,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:132,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:129,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:125,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:122,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:119,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:115,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:112,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:107,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:104,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:101,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:96,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:91,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:86,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:149,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurF
            ); 
            console.log("envoi vers firebase");  
          }
        }
      )
      console.log("tableau F HAUT ",perfsHauteurF);
    }
    else{
      elements.forEach(
        element => {
          if(element.startsWith("H")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:92,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:88,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:85,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:83,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:81,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:149,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:90,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:149,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:95,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:93,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:161,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:149,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:164,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:159,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:155,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:151,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:143,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:136,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:132,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:129,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:125,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:122,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:119,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:115,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:112,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:107,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:104,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:101,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:98,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:166,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:161,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:149,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:100,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("H")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:166,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:161,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:149,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(

                  {
                    perf:127,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:124,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:121,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:117,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:114,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:111,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:109,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:106,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:103,
                    note : note
                  }
                )
                perfsHauteurM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsHauteurM
            ); 
            console.log("envoi vers firebase");  
          }
          console.log("fin if");
        })
        console.log("tableau M HAUT ",perfsHauteurM);
    }
  })
}
var perfsGrimperM = [];
var perfsGrimperF = [];
function writeGrimperPerData(classe) {
  sexes.forEach(sex => {
    console.log("sexe ",sex);
    if(sex.startsWith("F")){
      elements.forEach(
        element =>{
          if(element.startsWith("G")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:18.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:230,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.00,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:18.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20.00,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:290,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:265,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:255,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.00,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20.00,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.083,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.083,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.066,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.133,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.0166,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.133,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.133,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.033,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperF
            ); 
            console.log("envoi vers firebase");  
          }

        }
      )
      console.log("tableau F GRIMP ",perfsGrimperF);
    }
    else{
      elements.forEach(
        element => { 
          if(element.startsWith("G")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.06,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.06,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.06,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.033,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:18.133,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:240,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:60,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.00,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.133,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.033,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.00,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.00,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:3.116,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:8.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==19){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:4.00,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:9.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
               
              }
              if(i==18){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:4.05,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:10.00,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==17){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:4.1,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:10.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==16){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:5.00,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:11.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==15){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:5.066,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:12.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==14){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:5.133,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:13.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==13){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:6.033,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:14.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==12){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:6.116,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:15.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==11){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:7.033,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:16.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==10){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:7.116,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:17.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==9){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:8.05,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:19.00,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==8){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:8.05,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:20.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==7){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:9.1,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:21.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==6){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:10.05,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:23.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==5){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:12.15,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:25.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==4){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:14.15,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:27.033,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==3){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:17.05,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:29.033,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==2){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:290,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:590,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
              if(i==1){
                var note = i;
                var markedFifthMetric = JSON.stringify(
                  {
                    metric:"5m",
                    perf:230,
                    note : note
                  }
                )
                var markedTenMetric = JSON.stringify(
                  {
                    metric:"10m",
                    perf:480,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedFifthMetric))
                perfsGrimperM.push(JSON.parse(markedTenMetric))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:19,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:21.15,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:600,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:480,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.133,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.133,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.1,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.133,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:19.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:600,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:480,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:19,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:20.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:600,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:480,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          if(element.startsWith("G")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.016,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;

                var markedPerf = JSON.stringify(
                  {
                    perf:14.5,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.066,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:17.116,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:19,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:600,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:480,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:300,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:120,
                    note : note
                  }
                )
                perfsGrimperM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsGrimperM
            ); 
            console.log("envoi vers firebase");  
          }
          console.log("non if");
        })
        console.log("tableau M GRIMP ",perfsGrimperM);
    }
  })
}
var perfsPoidsF = [];
var perfsPoidsM = [];
function writePoidsPerData(classe) {
  sexes.forEach(sex => {
    console.log("sexe ",sex);
    if(sex.startsWith("F")){
      elements.forEach(
        element =>{
          if(element.startsWith("P")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase 6e F");  
          }
          if(element.startsWith("P")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase 5e F");  
          }
          if(element.startsWith("P")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase 4e F");  
          }
          if(element.startsWith("P")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase 3e F");  
          }
          if(element.startsWith("P")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.50,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase 2nde F");  
          }
          if(element.startsWith("P")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase 1ere F");  
          }
          if(element.startsWith("P")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.20,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.00,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.70,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.40,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:3.90,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsF
            ); 
            console.log("envoi vers firebase Tle F");  
          }
        }
      )
      console.log("tableau F PDS ",perfsPoidsF);
    }
    else{
      elements.forEach(
        element => {
          if(element.startsWith("P")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.80,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.30,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.80,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.30,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.80,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.40,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.00,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.60,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.20,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.80,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.50,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.20,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.90,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.40,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.10,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.80,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.60,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.30,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.10,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase 6e M");  
          }
          if(element.startsWith("P")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.85,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.24,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.66,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.11,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.59,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.09,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.62,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.18,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.75,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.35,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.98,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.62,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.28,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.95,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.65,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.35,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.08,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.82,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.57,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.33,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase 5e M");  
          }
          if(element.startsWith("P")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.17,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.49,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.85,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.24,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.66,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.11,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.59,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.09,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.62,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.18,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.75,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.35,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.98,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.62,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.28,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.95,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.65,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.35,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.08,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.82,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase 4e M");  
          }
          if(element.startsWith("P")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.61,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.95,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.32,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.73,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.16,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.63,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.12,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.64,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.18,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.76,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.34,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.96,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.59,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.25,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.92,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.31,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.03,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.76,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.51,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase 3e M");  
          }
          if(element.startsWith("P")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.12,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.41,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.75,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.75,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.53,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.96,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.43,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.92,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.44,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.98,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.56,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.56,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.76,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.39,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.05,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.72,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.40,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.11,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.83,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.56,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase 2nde M");  
          }
          if(element.startsWith("P")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.32,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.61,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.95,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.32,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.73,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.16,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.63,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.12,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.64,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.18,
                    note : note
                  }
                )
                perfsPoidsF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.76,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.34,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.96,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.59,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.25,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.92,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.31,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.03,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:4.76,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase 1ere M");  
          }
          if(element.startsWith("P")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.06,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.32,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.61,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.95,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.32,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.73,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.16,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.63,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:9.12,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.64,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:8.18,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(

                  {
                    perf:7.76,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:7.34,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.96,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.59,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:6.25,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.92,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.60,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.31,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:5.03,
                    note : note
                  }
                )
                perfsPoidsM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsPoidsM
            ); 
            console.log("envoi vers firebase Tle M");  
          }
          console.log("non if");
        })
        console.log("tableau M PDS ",perfsPoidsM);
    }
  })
}
var perfsResistanceF = [];
var perfsResistanceM = [];
function writeResistancePerData(classe) {
  sexes.forEach(sex => {
    console.log("sexe ",sex);
    if(sex.startsWith("F")){
      elements.forEach(
        element => {
          if(element.startsWith("R")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.15,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150.15,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:154,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:160.06,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:167,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170.06,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173.15,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177.08,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181.01,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:184.13,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:188.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:192.06,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:196.03,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:200,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:203.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:207,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:210.01,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:214.01,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase 6e F");  
          }
          if(element.startsWith("R")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:142,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.15,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150.15,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:154,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:160.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:167,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173.15,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177.083,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177.083,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:184.133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:188.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:192.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:196.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:200,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:203.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:207,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase 5e F");  
          }
          if(element.startsWith("R")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:130.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:133.00,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:135.116,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:156.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:159.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:162.083,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:165.133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:169.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:172.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:176.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:179.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:183,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:188,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:190.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase 4e F");  
          }
          if(element.startsWith("R")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127.13,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:130.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:135.116,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:156.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:159.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:166,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:169.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:176.1,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:183,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:186,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase 3e F");  
          }
          if(element.startsWith("R")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:126.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:128.133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:131.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:134,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:136.116,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:139.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:142.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:145.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:148.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:151,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:154,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:160.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:164,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:167.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:174,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:184,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase 2nde F");  
          }
          if(element.startsWith("R")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:125.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127.133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:130.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:135.116,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:156.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:159.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:166.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:169.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:176.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:183,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase 1ere F");  
          }
          if(element.startsWith("R")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:122.13,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:125.03,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:127.13,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:130.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:133,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:135.116,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:138.066,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:141.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.05,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:156.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:159.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:166.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:169.033,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:176.016,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:180,
                    note : note
                  }
                )
                perfsResistanceF.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceF
            ); 
            console.log("envoi vers firebase Tle F");  
          }

        }
      )
      console.log("tableau F RES ",perfsResistanceF);
    }
    else{
      elements.forEach(
        element => {
          if(element.startsWith("R")&&classe.includes("Six")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:139.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:142,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:154,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157.016,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:160.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163.1,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:167,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177.083,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:184.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:188.1,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:192.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:196.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:199.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:202,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceM
            ); 
            console.log("envoi vers firebase 6e M"); 
          }
          if(element.startsWith("R")&&classe.startsWith("C")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:136.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:139.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:142,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:144.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:147.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:150.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:154,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157.016,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:160.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:163.1,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:167.016,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177.083,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:184.133,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:188.1,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:192.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:196.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:200.016,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceM
            ); 
            console.log("envoi vers firebase 5e M"); 
          }
          if(element.startsWith("R")&&classe.startsWith("Q")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:184.133,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:188.116,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:192.116,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:196.133,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:200.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:205.033,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:209.083,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:214,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:218.083,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:223.016,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:227.15,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:232.116,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:237.1,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:242.1,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:247.133,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:253,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:258.066,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:263.133,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:266.133,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceM
            ); 
            console.log("envoi vers firebase 4e M");  
          }
          
          if(element.startsWith("R")&&classe.includes("Tr")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:185,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:189,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:193,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:197,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:201,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:205,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:209,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:214,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:218,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:223,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:228,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:233,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:238,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:243,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:248,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:253,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:259,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:263,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceM
            ); 
            console.log("envoi vers firebase 3e M");  
          }  
          if(element.startsWith("R")&&classe.includes("Sec")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:175,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:179,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:183,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:187,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:191,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:195,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:199,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:203,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:207,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:212,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:216,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:221,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:226,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:231,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:238,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:241,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:246,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:251,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:257,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:261,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceM
            ); 
            console.log("envoi vers firebase 2nde M");  
          }
          
          if(element.startsWith("R")&&classe.startsWith("P")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:153,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:157,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:185,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:189,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:193,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:197,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:201,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:205,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:209,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:214,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:218,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:223,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:228,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:233,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:238,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:243,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:248,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:253,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:259,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
          set(
            ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
            perfsResistanceM
          ); 
          console.log("envoi vers firebase 1ere M"); 
          }
          if(element.startsWith("R")&&classe.includes("Ter")){
            for (var i =20;i>=1;i--) {
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:170,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:173,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
               
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:177,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:181,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:185,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:189,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:193,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:197,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:201,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:205,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:209,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:214,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:218,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:223,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:228,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:233,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==4){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:238,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==3){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:243,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==2){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:248,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:253,
                    note : note
                  }
                )
                perfsResistanceM.push(JSON.parse(markedPerf))
              }
            }     
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsResistanceM
            ); 
            console.log("envoi vers firebase Tle M");  
          }
          console.log("non if");
        })
        console.log("tableau M RES ",perfsResistanceM);
    }
  })
}
var perfsVitesseF = [];
var perfsVitesseM = [];
function writeVitessePerfData(classe) {
  sexes.forEach(sex => {
    console.log("sexe ",sex);
    if(sex.startsWith("F")){
      elements.forEach(
        element => {
          if(element.startsWith("V")&&classe.includes("Six")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.03,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.06,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase 6e F");     
          }
          if(element.startsWith("V")&&classe.startsWith("C")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.133,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.00,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.033,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.066,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:11.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase 5e F");     
          }
          if(element.startsWith("V")&&classe.startsWith("Q")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.00,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.033,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.066,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.1,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.133,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.00,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.033,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.066,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.1,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.133,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.00,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.033,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.066,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.1,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.133,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase 4e F");     
          }
          if(element.startsWith("V")&&classe.includes("Tr")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.116,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase 3e F");     
          }
          if(element.startsWith("V")&&classe.includes("Sec")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:117.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase 2nde F");     
          }
          if(element.startsWith("V")&&classe.startsWith("P")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase 1ere F");     
          }
          if(element.startsWith("V")&&classe.includes("Ter")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.1,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.133,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.083,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:15.116,
                    note : note
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:116.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : parseInt(note)
                  }
                )
               
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:17.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseF.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseF
            );  
            console.log("envoi vers firebase Tle F");     
          }
        }
      )
      console.log("tableau F V ",perfsVitesseF);
    }
    else{
      elements.forEach(
        element => {
          if(element.startsWith("V")&&classe.includes("Six")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.1,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.133,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.00,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.033,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.066,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.1,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase 6e M");  
          }
          if(element.startsWith("V")&&classe.startsWith("C")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.6,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:10.133,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.00,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.033,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.066,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase 5e M");   
          } 
          if(element.startsWith("V")&&classe.startsWith("Q")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:16.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.133,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.00,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.066,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.1,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.033,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.1,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.033,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.066,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase 4e M");   
          }
          if(element.startsWith("V")&&classe.includes("Tr")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:16.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase 3e M");  
          }
          if(element.startsWith("V")&&classe.includes("Sec")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.133,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.033,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.066,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.1,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.133,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.033,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.066,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.1,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.133,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:14,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.033,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.066,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.1,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.133,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.033,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.066,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.1,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase 2nd M"); 
          }
          if(element.startsWith("V")&&classe.startsWith("P")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase 1ere M");  
          }
          if(element.startsWith("V")&&classe.includes("Ter")){
            for(var i =20;i>=1;i--){
              if(i==20){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==19){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==18){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:11.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==17){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
    
              }
              if(i==16){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              
              }
              if(i==15){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==14){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.116,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==13){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:12.15,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==12){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.016,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
             
              }
              if(i==11){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.05,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
              if(i==10){
                var note = i;
                var markedPerf = JSON.stringify(
                  {
                    perf:13.083,
                    note : note
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==9){
                var note = "09";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==8){
                var note = "08";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==7){
                var note = "07";
                var markedPerf = JSON.stringify(
                  {
                    perf:13.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==6){
                var note = "06";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==5){
                var note = "05";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.083,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==4){
                var note = "04";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.116,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
               
              }
              if(i==3){
                var note = "03";
                var markedPerf = JSON.stringify(
                  {
                    perf:14.15,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
            
              }
              if(i==2){
                var note = "02";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.016,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
              }
              if(i==1){
                var note = "01";
                var markedPerf = JSON.stringify(
                  {
                    perf:15.05,
                    note : parseInt(note)
                  }
                )
                perfsVitesseM.push(JSON.parse(markedPerf))
                
              }
            }
            set(
              ref(db, 'baremes/' + classe+'/'+sex+'/'+element+'/'), 
              perfsVitesseM
            );  
            console.log("envoi vers firebase Tle M");
          }
        else{
          console.log("the else condition");
        }
      })
      console.log("tableau M V ",perfsVitesseM);
    }
});
}

//remplissage des performances pour la vitesse
// writeVitessePerfData("Sixieme")
// writeVitessePerfData("Cinquieme")
// writeVitessePerfData("Quatrieme")
// writeVitessePerfData("Troisieme")
// writeVitessePerfData("Seconde")
// writeVitessePerfData("Premiere")
writeVitessePerfData("Terminale")

//remplissage des performances pour la resistance
// writeResistancePerData("Sixieme")
// writeResistancePerData("Cinquieme")
// writeResistancePerData("Quatrieme")
// writeResistancePerData("Troisieme")
// writeResistancePerData("Seconde")
// writeResistancePerData("Premiere")
writeResistancePerData("Terminale")

//remplissage des performances pour la long

// writeLongueurPerData("Sixieme")
// writeLongueurPerData("Cinquieme")
// writeLongueurPerData("Quatrieme")
// writeLongueurPerData("Troisieme")
// writeLongueurPerData("Seconde")
// writeLongueurPerData("Premiere")
writeLongueurPerData("Terminale")

//remplissage des performances pour le grimper

// writeGrimperPerData("Sixieme")
// writeGrimperPerData("Cinquieme")
// writeGrimperPerData("Quatrieme")
// writeGrimperPerData("Troisieme")
// writeGrimperPerData("Seconde")
// writeGrimperPerData("Premiere")
writeGrimperPerData("Terminale")

//remplissage des performances pour la hauteur

// writeHauteurPerData("Sixieme")
// writeHauteurPerData("Cinquieme")
// writeHauteurPerData("Quatrieme")
// writeHauteurPerData("Troisieme")
// writeHauteurPerData("Seconde")
// writeHauteurPerData("Premiere")
writeHauteurPerData("Terminale")

//remplissage des performances pour le poids
// writePoidsPerData("Sixieme")
// writePoidsPerData("Cinquieme")
// writePoidsPerData("Quatrieme")
// writePoidsPerData("Troisieme")
// writePoidsPerData("Seconde")
// writePoidsPerData("Premiere")
writePoidsPerData("Terminale")



