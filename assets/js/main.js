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

 /* Create Assistant Modal */

  $('#openModalButton').click(function() {
    $('#modal-another').fadeIn();
    });

    $('#closeModalButton').click(function() {
        $('#modal-another').fadeOut();
    });

    $('.modal-another-content').click(function(event) {
        event.stopPropagation();
    });

    $(document).click(function(event) {
        if (!$(event.target).closest('.modal-another-content, #openModalButton').length) {
            $('#modal-another').fadeOut();
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

    /*------- Toggle dropdown-------- */
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

/*------ Dropdown Toggle and Selection---------- */

$('.dropdown-toggle').on('click', function(event) {
    event.stopPropagation();
    
    $(this).next('.dropdown-menu').toggleClass('hidden').siblings('.dropdown-menu').addClass('hidden');
    });

    // Close dropdown when clicking outside
    $(document).on('click', () => $('.dropdown-menu').addClass('hidden'));

    $('.dropdown-menu').on('click', (event) => event.stopPropagation());

    // Handle menu item selection and add active class with checkmark
    $('.dropdown-menu li').on('click', function() {
        var selectedText = $(this).text();
        
        $(this).closest('.dropdown-container').find('.dropdown-toggle span').text(selectedText);

        $('.dropdown-menu li').removeClass('active');
        $(this).addClass('active');
    });


/* Multiple Item Selector */

$('.dropdown-toggle-two').on('click', function(event) {
    event.stopPropagation();
    $(this).next('.dropdown-menu-two').toggleClass('invisible');
});

// Close dropdown when clicking outside
$(document).on('click', () => $('.dropdown-menu-two').addClass('invisible'));

// Handle multiple selection and update text
$('.dropdown-menu-two li').on('click', function() {
    $(this).toggleClass('active');
    const selectedItems = $('.dropdown-menu-two li.active').map(function() {
        return $(this).text();
    }).get().join(', ') || 'Web';
    $(this).closest('.dropdown-container-two').find('.dropdown-toggle-two span').text(selectedItems);
});


  /* Latency Color Picker */
changeWidth('web');

$('#dropdownMenu-two li').on('click', function() {
    var menu = $(this).data('menu');
    
    // Call the changeWidth function with the selected menu
    changeWidth(menu);
});

function changeWidth(menu) {
    // Select the three divs
    var div1 = $('#div1');
    var div2 = $('#div2');
    var div3 = $('#div3');
    
    if (menu === 'web') {
        div1.css('width', '50%');
        div2.css('width', '30%');
        div3.css('width', '20%');
    } else if (menu === 'twilio') {
        div1.css('width', '40%');
        div2.css('width', '40%');
        div3.css('width', '20%');
    } else if (menu === 'vonage') {
        div1.css('width', '30%');
        div2.css('width', '30%');
        div3.css('width', '40%');
    }
}

/* Tablist */

$('.tab-button').on('click', function() {
    var tabID = $(this).data('tab');

    // Hide all tab contents
    $('.tab-content').hide();

    // Show the selected tab content
    $('#' + tabID).show();

    // Remove the 'active' class from all buttons
    $('.tab-button').removeClass('active');

    // Add the 'active' class to the clicked button
    $(this).addClass('active');
});

/* Range Slider */
$(document).ready(function() {
    // Set initial value
    $('#slider-value').text($('#myRange').val());

    // Update the value when the slider changes
    $('#myRange').on('input', function() {
        $('#slider-value').text($(this).val());
    });
});
});

  