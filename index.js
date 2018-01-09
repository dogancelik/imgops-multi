var hasUrl = () => location.hash.length > 0 || location.search.length > 0;
var getUrl = () => (location.hash.length > 0 ? location.hash : location.search).substr(1);

function onLoad () {
  hasUrl() && changeSrc();
}

function changeSrc () {
  var url = document.getElementById('url');
  url.value = decodeURIComponent(getUrl());
  url.parentElement.submit();
}

document.addEventListener('hashchange', () => changeSrc(), false);
document.addEventListener('DOMContentLoaded', onLoad, false);
