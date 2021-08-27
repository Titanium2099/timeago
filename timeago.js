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
//check special => relative => normal
//Math.floor(Date.now() / 31536000000) + 1970 //year
(Date.now() - (Math.floor(Date.now() / 31536000000) * 31536000000))/86400000 //day of the year
}
timeago({"UTC":true,"TimeStamp":(Date.now() - 1000)})
