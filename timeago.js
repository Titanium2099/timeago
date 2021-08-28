// structure - (* second(s) ago (1 -59)) - (* minute(s) ago(1-45)) - (about an hour ago (46-60 minutes)) - (* hour(s) ago (1-16)) - (about a day ago (17-23 hours)) - (* day(s) ago(1-6)) - about  a week ago ----- etc  
var uniqueTime = [] //right now and yesterday at *:** (am/pm)
var aTime = [
  ["minute", "hour", "day", "week", "month", "year"],
  [60000, 3600000, 86400000, 604800000, 2629800000, 31557600000],
  [], "about a ", " ago"
]; //sorted in [[text],[minimum value],[maximum value], generic text] value in milliseconds
var multiTime = [] //
function timeago(e) {
  var currDate = new Date();
var oldDate = new Date(e.TimeStamp);
if((currDate.getDate() == oldDate.getDate())&& ((Date.now() - e.TimeStamp) < 86400001)){
    //today at **:** (am/pm)
  function apm(){if(currDate.getHours()>11){return 'pm';}else{return 'am';}};
return "Today at "+(((currDate.getHours() - 12)*(currDate.getHours()>12))+((currDate.getHours())*(currDate.getHours()<13))) + ':' + currDate.getMinutes() + apm();
}else{
  for (var aa = 0; aa < aTime[1].length; aa++) {
    if ((aTime[1][(aTime[1].length - (aa + 1))] - 1) < (Date.now() - e.TimeStamp)) {
      return aTime[3] + aTime[0][aTime[1].length - (aa + 1)] + aTime[4]
      break;
    }
  }
}
}
console.log(timeago({
  "UTC": true,
  "TimeStamp": (Date.now() - 700000000)
}))
