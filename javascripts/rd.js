
var currentLink = window.location.href;
var oldLink = document.referrer;
var newLink = oldLink.replace("jyeh.tk", "jasoryeh.tk"));
document.getElementsByTagName('head')[0].write('<meta http-equiv="refresh" content="0; URL=\'' + newLink + '\'\" />');
console.log(currentLink + oldLink + newLink);
