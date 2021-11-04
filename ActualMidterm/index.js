// The below code for bringing in the current date was found at https://www.w3resource.com/javascript-exercises/javascript-date-exercise-2.php
var curday = function(sp){
today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1;
var yyyy = today.getFullYear();

if(dd<10) dd='0'+dd;
if(mm<10) mm='0'+mm;
return (mm+sp+dd+sp+yyyy);
}

const d = new Date();
let day = d.getDay();

//Attempts to properly iterate through the days of the week didn't seem to work, so I've resorted to assigning each one individually
if(day==0){
  document.getElementById("day").innerHTML = "<h7>Sunday</h7>";
}
if(day==1){
  document.getElementById("day").innerHTML = "<h7>Monday</h7>";
}
if(day==2){
  document.getElementById("day").innerHTML = "<h7>Tuesday</h7>";
}
if(day==3){
  document.getElementById("day").innerHTML = "<h7>Wednesday</h7>";
}
if(day==4){
  document.getElementById("day").innerHTML = "<h7>Thursday</h7>";
}
if(day==5){
  document.getElementById("day").innerHTML = "<h7>Friday</h7>";
}
if(day==6){
  document.getElementById("day").innerHTML = "<h7>Saturday</h7>";
}

document.getElementById("date").innerHTML=(curday('/'));


let careItems=["1. Exercise for at least 30 minutes.<br><br>2. Go grocery shopping for healthy meals for the week.<br><br>3. Turn off your brain as much as possible.","1. Go to class.<br><br>2. Catch up on dishes.<br><br>3. Spend at least an hour reading.","1. Actually eat breakfast.<br><br>2. Take a walk.<br><br>3. Spend some time catching up with friends and family.","1. Regardless of how formal, spend some time meditating/contemplating things.<br><br>2. Give yourself extra time to get ready.<br><br>3. Catch up on any homework.", "1. Spend some time outside.<br><br>2. Work on music.<br><br>3. Make something nice for dinner.","1. Make a better-than-usual cup of coffee.<br><br>2. Generally relax.<br><br>3. Spend an hour reading, or doing anything mentally stimulating.","1.Take a bike ride.<br><br>2. Go on a photography walk- just shoot photos of anything interesting you see.<br><br>3. Talk to/visit with friends."];

for(i=0; i<document.getElementsByClassName("boxone").length; i++){
  document.getElementsByClassName("boxone")[i].innerHTML="<h5>"+careItems[day]+"</h5>";
}

let dailyReminder=["Remember to drink a borderline unhealthy amount of water!","Be open to new opportunities!","Learn something new about literally anything today!","Focus on being helpful to others today!","Don't get too in-your-own-head about things you can't control!","Don't let perfection get in the way of progress!","Check in with the people you care about!"];

for(i=0; i<document.getElementsByClassName("boxtwo").length; i++){
  document.getElementsByClassName("boxtwo")[i].innerHTML="<h6>"+dailyReminder[day]+"</h6>";
}

//To add a simple music player, I combined the concepts from class with this: https://javascript-tutor.net/index.php/playing-music-using-javascript/
let dailySound=["Dawn.wav","Ego Death (Intro).wav","tropics.wav","MusicVideoEDIT.wav","SURPRISE.wav","DreamScoreMaster.wav","Discovery.wav"]

for(i=0; i<document.getElementsByClassName("audio").length; i++){
  document.getElementsByClassName("audio")[i].innerHTML="<source src='assets/"+dailySound[day]+"' type='audio/wav'>";
}

let dailyPhoto=["AMCMotion.jpg","Containers.jpg","MuralMotion.jpg","HuronMotion.jpg","HorsetoothHouses.jpg","PlazaMotion.jpg","PlantersMotion.jpg"]

for(i=0; i<document.getElementsByClassName("picture").length; i++){
  document.getElementsByClassName("picture")[i].innerHTML="<img src='assets/"+dailyPhoto[day]+"'>";
}

let weeklyGoal=["This week, try to spend at least 30 minutes a day focusing on physical wellness.","This week, spend some time every day focus on mental wellness.","This week, reach out to the friends and family members you don't speak to often.","This week, spend some time each day expanding your knowledge of something you're passionate about.","This week, work on your hobbies and improving at the things you enjoy doing.","This week, take time to consider ways to acheive your long-term goals.","This week, focus on cleaning and decluttering your living space."]

for(i=0; i<document.getElementsByClassName("weekly").length; i++){
  document.getElementsByClassName("weekly")[i].innerHTML="<p>"+weeklyGoal[day]+"</p>";
}
