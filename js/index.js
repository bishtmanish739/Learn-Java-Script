

    
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

setInterval(() => {
    a=new Date();
let date=a.toLocaleDateString();
let time=a.getHours()+':'+a.getMinutes()+':'+ (a.getSeconds()<10?('0'+a.getSeconds()):a.getSeconds());


document.getElementById('time').innerHTML=time+"<br> on "+ weekday[a.getDay()] +" "+date;
    
}, 1000);



