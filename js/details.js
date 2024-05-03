$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#navbar').addClass('navbar-scroll');
        } else {
            $('#navbar').removeClass('navbar-scroll');
        }
    });
});


// details.js
const destinationsData = [
    {
        id: 1,
        name: "Morsi Mubarak",
        img: "images/مرسي مبارك.jpg",
        description: "Details about Morsi Mubarak destination.",
        price :" 100 $",
        img1 : "images/5.jpeg",
        img2 : "images/20.avif",
        img3 : "images/18.jpg",
        video1 : "images/12.mp4",
        video2 : "images/17.mp4",
    },
    {
        id: 2,
        name: "Solomon's Throat",
        img: "images/حلق سليمان.jfif",
        description: "Details about Solomon's Throat destination.",
        price :" 500 $",
        img1 : "images/6.jpeg",
        img2 : "images/21.webp",
        img3 : "images/19.jpg",
        video1 : "images/13.mp4",
        video2 : "images/4.mp4",
    },
    {
        id: 3,
        name: "Sial Island",     
        img: "images/جزيرة سيال.jpg",
        description: "Details about Sial Island destination.",
        price :" 200 $",
        img1 : "images/7.jpeg",
        img2 : "images/10.jpeg",
        img3 : "images/9.jpeg",
        video1 : "images/14.mp4",
        video2 : "images/16.mp4",
    },
    {
        id: 4,
        name: "UmAlSheikh Island",
        img: "images/جزيرة ام الشيخ.jpg",
        description: "Details about UmAlSheikh Island destination.",
        price :" 350 $",
        img1 : "images/5.jpeg",
        img2 : "images/",
        img3 : "images/22.avif",
        video1 : "images/2.mp4",
        video2 : "images/15.mp4",
    },
    {
        id: 5,
        name: "Sharm El Luli",
        img: "images/شرم اللولي.jpeg",
        description: "Details about Sharm El Luli destination.",
        price :" 730 $",
        img1 : "images/7.jpeg",
        img2 : "images/10.jpeg",
        img3 : "images/6.jpeg",
        video1 : "images/13.mp4",
        video2 : "images/1.mp4",
    },
    {
        id: 6,
        name: "Sataih reef",
        img: "images/شعب سطايح.jpg",
        description: "Details about Sataih Reef destination.",
        price :" 450 $",
        img1 : "images/6.jpeg",
        img2 : "images/21.webp",
        img3 : "images/7.jpeg",
        video1 : "images/14.mp4",
        video2 : "images/16.mp4",
    },
];


$(document).ready(function () {
    // Get the destination ID from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const destinationId = parseInt(urlParams.get('id'));

    // Find the selected destination based on the ID
    const selectedDestination = destinationsData.find(dest => dest.id === destinationId);

    if (selectedDestination) {
        // Display destination details
        displayDestinationDetails(selectedDestination);
    } else {
        console.error("Destination not found!");
        // Optionally, redirect to a page indicating an error or the home page
        // window.location.href = 'error.html';
    }
});

function displayDestinationDetails(destination) {
    // Dynamically insert destination details into the HTML
    const detailsContainer = $('#destinationDetails');
    const html = `
    <div class="container">
    <div class="row g-3">
        <div class="col-lg-6 col-md-12">
            <div class="container">
                <div class="row g-3">
                    <div class="col-lg-7 col-md-12">
                        <div class="row g-3">
                            <div class="col-lg-6 col-md-6">
                                <img src="${destination.img3}" class="img-fluid w-100" style="height: 200px; object-fit: cover;">
                            </div>
                            <div class="col-lg-6 col-md-6 small-to-normal">
                                <img src="${destination.img2}" class="img-fluid w-100" style="height: 200px; object-fit: cover;">
                            </div>
                            <div class="col-lg-6 col-md-6 small-to-normal">
                                <img src="${destination.img1}" class="img-fluid w-100" style="height: 200px; object-fit: cover;">
                            </div>
                            <div class="col-lg-6 col-md-6 small-to-normal">
                                <img src="${destination.img}" class="img-fluid w-100" style="height: 200px; object-fit: cover;">
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 col-md-12">
                        <div class="row g-3">
                            <div class="col-lg-12 col-md-6 small-to-normal">
                                <video src="${destination.video1}" class="img-fluid w-100" autoplay muted controls style="height: 200px; object-fit: cover;"></video>
                            </div>
                            <div class="col-lg-12 col-md-6 small-to-normal">
                                <video src="${destination.video2}" class="img-fluid w-100" autoplay muted controls style="height: 200px; object-fit: cover;"></video>
                            </div>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
        <div class="col-lg-6 col-md-12 des">
            <h3>${destination.name}</h3>
            <p class="des_price"> Price: ${destination.price}</p>
            <p class="des_price">Description: ${destination.description}</p>
            <div class="des-rating">
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star"></i></span>
                <span><i class="fas fa-star-half-alt"></i></span>
            </div>
            <div class="btn-groups">
            <a href=""><button type="button" class="btn rounded" onclick=""><i class="fas fa-wallet"></i>  Book Now</button></a>
            </div>
        </div>
        </div>
        </div>
    
    </div>
</div>
    `;



    detailsContainer.html(html);
}





