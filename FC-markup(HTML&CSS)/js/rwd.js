$(document).ready(function() {
    var container = $(".menubar-container");
    var menubar = $(".menubar, .btn-menubar");
    var menu = $(".main-menu");
    var btn = $(".btn-menubar");
    var last = $(".main-menu li:last-child li:last-child a")

    menubar.click(function() {
        container.toggleClass("menubar-act");
        menu.toggleClass("menu-act");
        if(container.hasClass("menubar-act")){
            btn.text("메인메뉴 닫기");
        } else {
            btn.text("메인메뉴 열기");
        }
    });
    last.focusout(function() {
        menu.removeClass("menu-act");
        container.removeClass("menubar-act");
        btn.text("메인메뉴 열기");
    })

});