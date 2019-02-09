function countUpFromTime(countFrom, id) {
 countFrom = new Date(countFrom).getTime();
 var now = new Date(),
     countFrom = new Date(countFrom),
     timeDifference = (now - countFrom);
   
 var secondsInADay = 60 * 60 * 1000 * 24,
     secondsInAHour = 60 * 60 * 1000;
   
 days = Math.floor(timeDifference / (secondsInADay) * 1);
 years = Math.floor(days / 365);
 if (years > 1){ days = days - (years * 365) }
 hours = Math.floor((timeDifference % (secondsInADay)) / (secondsInAHour) * 1);
 mins = Math.floor(((timeDifference % (secondsInADay)) % (secondsInAHour)) / (60 * 1000) * 1);
 secs = Math.floor((((timeDifference % (secondsInADay)) % (secondsInAHour)) % (60 * 1000)) / 1000 * 1);

 var idEl = document.getElementById(id);
 idEl.getElementsByClassName(id + '-years')[0].innerHTML = years + " years";
 idEl.getElementsByClassName(id + '-days')[0].innerHTML = days + " days";
 idEl.getElementsByClassName(id + '-hours')[0].innerHTML = hours + " hours";
 idEl.getElementsByClassName(id + '-minutes')[0].innerHTML = mins + " minutes";
 idEl.getElementsByClassName(id + '-seconds')[0].innerHTML = " and " + secs + " seconds "; 

 // clearTimeout(countUpFromTime.interval);
 countUpFromTime.interval = setTimeout(function(){ countUpFromTime(countFrom, id); }, 1000);
}

window.onload = function() {
 // Month Day, Year Hour:Minute:Second, id-of-element-container
 countUpFromTime("June 20, 2015 9:30:30", 'married'); // ****** Change this line!
 countUpFromTime("April 05, 2010 18:49:00", 'facebook'); // ****** Change this line!
 countUpFromTime("July 07, 2014 19:30:15", 'dating'); // ****** Change this line!
 
};