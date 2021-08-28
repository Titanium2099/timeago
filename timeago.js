// structure - (* second(s) ago (1 -59)) - (* minute(s) ago(1-45)) - (about an hour ago (46-60 minutes)) - (* hour(s) ago (1-16)) - (about a day ago (17-23 hours)) - (* day(s) ago(1-6)) - about  a week ago ----- etc  
var uniqueTime = [] //right now and yesterday at *:** (am/pm)
var relativeTime = [
  ["minute", "hour", "day", "week", "month", "year"],
  [60000, 3600000, 86400000, 604800000, 2629800000, 31557600000],
  [], "about a ", " ago"
]; //sorted in [[text],[minimum value],[maximum value], generic text] value in milliseconds
var agoTime = [
  ["minute", "hour", "day", "week", "month", "year"], 'ago'
];

function timeago(e) {
  console.log(Date.now() - e.TimeStamp)
  for (var aa = 0; aa < relativeTime[1].length; aa++) {
    if ((relativeTime[1][(relativeTime[1].length - (aa + 1))] - 1) < (Date.now() - e.TimeStamp)) {
      console.log(relativeTime[3] + relativeTime[0][relativeTime[1].length - (aa + 1)] + relativeTime[4])
      break;
    }
  }

}
timeago({
  "UTC": true,
  "TimeStamp": (Date.now() - 70000)
})
