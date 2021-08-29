// structure - (* second(s) ago (1 -59)) - (* minute(s) ago(1-45)) - (about an hour ago (46-60 minutes)) - (* hour(s) ago (1-16)) - (about a day ago (17-23 hours)) - (* day(s) ago(1-6)) - about  a week ago ----- etc  
function timeago(e) {
  var aTime = [
  ["minute", "hour", "day", "week", "month", "year"],
  [60000, 3600000, 86400000, 604800000, 2629800000, 31557600000],
  [], "about a ", " ago"
]; //sorted in [[text],[minimum value],[maximum value], generic text] value in milliseconds
  if((Date.now() - e.TimeStamp) < 60000){
  return 'right now';
}
  var currDate = new Date();
var oldDate = new Date(e.TimeStamp);
if((currDate.getDate() == oldDate.getDate())&& ((Date.now() - e.TimeStamp) < 86400001)){
    //today at **:** (am/pm)
    function ot(a){if(a.toString().length == 1){return ('0'+ a.toString());}else{return a;}};
  function apm(){if(oldDate.getHours()>11){return 'pm';}else{return 'am';}};
return "Today at "+(((oldDate.getHours() - 12)*(oldDate.getHours()>12))+((oldDate.getHours())*(oldDate.getHours()<13))) + ':' + ot(oldDate.getMinutes()) + apm();
}else{
  //about a **** ago
  for (var aa = 0; aa < aTime[1].length; aa++) {
    if ((aTime[1][(aTime[1].length - (aa + 1))] - 1) < (Date.now() - e.TimeStamp)) {
      //about * *** ago
      console.log((Date.now() - e.TimeStamp)/(aTime[1][(aTime[1].length - (aa + 1))] - 1) > 1)
      if(Math.floor((Date.now() - e.TimeStamp)/(aTime[1][(aTime[1].length - (aa + 1))] - 1)) > 1){
        return 'about ' + Math.floor((Date.now() - e.TimeStamp)/(aTime[1][(aTime[1].length - (aa + 1))] - 1)) + ' ' +aTime[0][aTime[1].length - (aa + 1)] + 's' + aTime[4];
      }else{
      return aTime[3] + aTime[0][aTime[1].length - (aa + 1)] + aTime[4]
      break;
      }
    }
  }
}
}
console.log(timeago({
  "UTC": true,
  "TimeStamp": (Date.now() - 70000000)
}))
