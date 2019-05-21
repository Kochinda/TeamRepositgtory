
var menu = new MEGAMENU(mega('#ms-topmenu'),["1","1"],779,["100","100","100","100","100"],0);
mega(window).load(function() {
    menu.updateScreen();
});
mega(window).resize(function() {
    menu.updateScreen();
});
