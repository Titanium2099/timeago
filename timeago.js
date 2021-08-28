// structure - (* second(s) ago (1 -59)) - (* minute(s) ago(1-45)) - (about an hour ago (46-60 minutes)) - (* hour(s) ago (1-16)) - (about a day ago (17-23 hours)) - (* day(s) ago(1-6)) - about  a week ago ----- etc  
var uniqueTime = [] //right now and yesterday at *:** (am/pm)
var relativeTime = [["minute","hour","day","week", "month","year"],[60000,3600000,86400000,604800000,2629800000,31557600000],"about a ", " ago"]; //sorted in [[text],[minimum value],[maximum value], generic text] value in milliseconds
var agoTime = [["minute","hour","day","week", "month","year"], 'ago'];
function timeago(e){
  
}
timeago({"UTC":true,"TimeStamp":(Date.now() - 1000)})

//Math.floor(Date.now() / 31536000000) + 1970 //year
(Date.now() - (Math.floor(Date.now() / 31536000000) * 31536000000))/86400000 //day of the year
