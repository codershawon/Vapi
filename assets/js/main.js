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

    /* Copy ID */
    $(".copy-id").click(function() {
        // Get the text inside the span
        var idText = $(this).closest('.rk-assistant-id-text').find('span').text();
  
        // Copy the text to the clipboard
        navigator.clipboard.writeText(idText).then(function() {
          // Show the copied ID in the modal
          $('#copiedIdText').text("Copied assistant ID!");
          $('#idModal').fadeIn(); // Show modal with fade-in effect
        }, function(err) {
          console.error("Error copying text: ", err);
        });
      });
  
      // Click event to close the modal when clicking the cross icon
      $("#closeModal").click(function() {
        $('#idModal').fadeOut();
      });

    /* Copy URL */
        $(".copy-demo-url").click(function() {
            var demoLink = "https://vapi.ai?demo=true&shareKey=8cc4f47d-cdc4-4841-82b3-2f5a291f8ded&assistantId=6e9f96aa-4e0c-474e-a2c3-e8f1d10d822b";
    
            navigator.clipboard.writeText(demoLink).then(function() {
                $('#copiedIdText').text("Copied demo link!");
                $('#idModal').fadeIn();
            }).catch(function(err) {
                console.error('Error copying text: ', err);
            });
        });
    
        // Click event to close the modal with the cross icon
        $("#closeModal").click(function() {
            $('#idModal').fadeOut();
        });

    // Toggle dropdown
    $('#dropdownToggle').on('click', function(event) {
        event.stopPropagation();
        $('#dropdownMenu').toggleClass('hidden open');
    });
    // Close dropdown when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#dropdownToggle, #dropdownMenu').length) {
            $('#dropdownMenu').removeClass('open').addClass('hidden');
        }
    });

    // Another Dropdown
    $('#dropdownToggle-two').on('click', function(event) {
        event.stopPropagation();
        $('#dropdownMenu-two').toggleClass('hidden open');
    });
    // Close dropdown when clicking outside
    $(document).on('click', function(event) {
        if (!$(event.target).closest('#dropdownToggle-two, #dropdownMenu-two').length) {
            $('#dropdownMenu-two').removeClass('open').addClass('hidden');
        }
    });
});

  