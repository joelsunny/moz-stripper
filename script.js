var top_bar = document.getElementsByClassName("u-tintBgColor");
for(var i = 0; i < top_bar.length; i++){
   top_bar[i].parentNode.removeChild(top_bar[i]);
}

var w = document.getElementsByClassName("js-metabar");
for(var i = 0; i < w.length; i++){
    w[i].parentNode.removeChild(w[i]);
}

var w = document.getElementsByClassName("js-stickyFooter");
for(var i = 0; i < w.length; i++){
    w[i].parentNode.removeChild(w[i]);
}

var w = document.getElementsByClassName("js-postShareWidget");
for(var i = 0; i < w.length; i++){
    w[i].parentNode.removeChild(w[i]);
}

var w = document.getElementsByClassName("js-elevatePostActions");
for(var i = 0; i < w.length; i++){
    w[i].parentNode.removeChild(w[i]);
}