// structure - (* second(s) ago (1 -59)) - (* minute(s) ago(1-45)) - (about an hour ago (46-60 minutes)) - (* hour(s) ago (1-16)) - (about a day ago (17-23 hours)) - (* day(s) ago(1-6)) - about  a week ago ----- etc  
// yesterday at *:** (am/pm)
const relativeTime = [["minute","hour","day","week", "month","year"],"about an ", " ago"];
const agoTime = [["minute","hour","day","week", "month","year"], 'ago'];
//({timestamp:'', UTC:''})
function timeago(e){
console.log(e);
}
timeago({"UTC":true,"TimeStamp":"2141234124"})
