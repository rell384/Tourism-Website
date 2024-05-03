// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(this).scrollTop() > 50) {
//             $('#navbar').addClass('navbar-scroll');
//         } else {
//             $('#navbar').removeClass('navbar-scroll');
//         }
//     });
// });




$(document).ready(function() {
    // Get the element
    var scalingDiv = $('#scalingDiv');

    // Function to check if the element is in the viewport
    function isInViewport(element) {
        var rect = element[0].getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to handle the animation
    function handleAnimation() {
        if (isInViewport(scalingDiv)) {
            // Add the class to trigger the animation
            scalingDiv.addClass('small-to-normal');
        }
    }

    // Attach the handleAnimation function to the scroll event
    $(window).scroll(handleAnimation);

    // Trigger the animation initially
    handleAnimation();
});

////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
const destinationsData = [
    {
        id: 1,
        name: "Morsi Mubarak",
        img: "images/مرسي مبارك.jpg",
        description: "Details about Morsi Mubarak destination.",
    },
    {
        id: 2,
        name: "Solomon's Throat",
        img: "images/حلق سليمان.jfif",
        description: "Details about Solomon's Throat destination.",
    },
    {
        id: 3,
        name: "Sial Island",     
        img: "images/حلق سليمان.jfif",
        description: "Details about Solomon's Throat destination.",
    },
    {
        id: 4,
        name: "UmAlSheikh Island",
        img: "images/حلق سليمان.jfif",
        description: "Details about Solomon's Throat destination.",
    },
    {
        id: 5,
        name: "Sharm El Luli",
        img: "images/حلق سليمان.jfif",
        description: "Details about Solomon's Throat destination.",
    },
    {
        id: 6,
        name: "Sataih reef",
        img: "images/حلق سليمان.jfif",
        description: "Details about Solomon's Throat destination.",
    },
    
];

// script.js

$(document).ready(function () {
    // Attach click event handler to each anchor tag containing images
    $('.destination a').click(function (event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();

        // Get the destination ID from the clicked anchor tag
        const destinationId = $(this).data('id');

        // Redirect to the details page with the destination ID
        window.location.href = `details.html?id=${destinationId}`;
    });
});





///////////////////////////////////////////////////////
