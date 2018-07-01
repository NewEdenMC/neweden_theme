jQuery(document).ready(function() {

    jQuery("header .banner .menus-toggle").click(function() {
        jQuery(this).children(".menus-icon").toggleClass("open");
        jQuery(this).siblings(".menus").toggleClass("open");
    });

});