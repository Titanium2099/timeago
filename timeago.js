// structure - (* second(s) ago (1 -59)) - (* minute(s) ago(1-45)) - (about an hour ago (46-60 minutes)) - (* hour(s) ago (1-16)) - (about a day ago (17-23 hours)) - (* day(s) ago(1-6)) - about  a week ago ----- etc  
// yesterday at *:** (am/pm)
//not working if time stamp the same
var relativeTime = [["minute","hour","day","week", "month","year"],"about an ", " ago"];
var agoTime = [["minute","hour","day","week", "month","year"], 'ago'];
//right now
//({timestamp:'', UTC:''})
function timeago(e){
  var timeagoTime = [];
//calulate time diffrence => the turn to months etc, then timeago
//check relative => normal
  console.log(parseInt(Date.now().toString()));
  console.log(Date.now().toString() - e.TimeStamp)
var date = new Date(parseInt(Date.now().toString()) - e.TimeStamp);
  timeagoTime.push(date.getUTCFullYear() - 1970)//years
  timeagoTime.push(date.getMonth() + 1) //zero is Jan
console.log(timeagoTime);
  console.log(date);
}
timeago({"UTC":true,"TimeStamp":(Date.now() - 1000)})

//Math.floor(Date.now() / 31536000000) + 1970 //year
(Date.now() - (Math.floor(Date.now() / 31536000000) * 31536000000))/86400000 //day of the year
