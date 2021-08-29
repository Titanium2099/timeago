# timeago
A simple JS plugin that uses that format date '* days ago'.
# Usage
First, load the plugin:
```html
<script src="https://raw.githubusercontent.com/Titanium2099/timeago/main/timeago.min.js"></script>
```
then create a new timeago object:
```javascript
var ta = new timeago();
console.log(ta.timeago(Date.now()));
```
# Output patterns
* about a **** ago EG: about an hour ago
* about * *** ago EG: about 5 hours ago
* today at **:** (am/pm) EG: today at 5:47pm
* right now
