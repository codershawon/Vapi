$(document).ready(function() {
    /* In Click submenu show & hide functionality */
    // Initially hide all submenus
    $(".rk-vapi-submenu-container").css({
        "height": "0",
        "opacity": "0", 
        "transition": "height 0.3s ease, transform 0.3s ease"
    });
    // Toggle the specific submenu on click
    $(".rk-vapi-menus-inner").click(function() {
        var submenu = $(this).next(".rk-vapi-submenu-container");

        if (submenu.height() === 0) {
            // Expand the submenu
            var fullHeight = submenu.prop('scrollHeight') + "px";
            submenu.css({
                "height": fullHeight,
                "transform": "translateY(0)",
                "opacity": 1
            });
        } else {
            // Collapse the submenu
            submenu.css({
                "height": "0",
                "transform": "translateY(-10%)",
                "opacity": 0
            });
        }
    });
});

  