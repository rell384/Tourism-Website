$(document).ready(function () {
  $(".centered").animate({ left: "50%" }, 2000);

  $("#contactForm").submit(function (e) {
    e.preventDefault();
    if (!validateName() || !validateEmail()) {
      return;
    }

    if (validateName() && validateEmail()) {
      openPopup();
    }
  });
  function animateWords() {
    $("#con_query span").each(function (index) {
      $(this).delay(index * 300).animate({ opacity: 1, transform: "translateY(0)" }, 500);
    });
  }
  animateWords();
  $("#contactForm").submit(function (e) {
    e.preventDefault();
    if (!validateName() || !validateEmail()) {
      return;
    }
  });

  // Function to validate name
  function validateName() {
    var name = $("#exampleInputName").val();
    var nameRegex = /^[a-zA-Z]+$/;

    if (name.length < 8 || !name.match(nameRegex)) {
      $("#nameError").text("Name must be at least 8 letters and contain only letters.");
      return false;
    } else {
      $("#nameError").text("");
      return true;
    }
  }

  // Function to validate email
  function validateEmail() {
    var email = $("#exampleInputEmail").val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.match(emailRegex)) {
      $("#emailError").text("Please enter a valid email address.");
      return false;
    } else {
      $("#emailError").text("");
      return true;
    }
  }
});

//////////////////////////////////////////////////////////

$(document).ready(function () {
  var container = $(".container");
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function addAnimationIfVisible() {
    if (isElementInViewport(container)) {
      $(".animate-from-bottom").addClass("animate");
    }
  }

  addAnimationIfVisible();
  $(window).scroll(function () {
    addAnimationIfVisible();
  });
});

///////////////////////////////////////////////////
$(document).ready(function () {
  var container = $("#animate-container");
  function isElementInViewport(el) {
    var rect = el[0].getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function addAnimationIfVisible() {
    if (isElementInViewport(container)) {
      $(".animate-left").addClass("animate");
      $(".animate-right").addClass("animate");
    }
  }
  addAnimationIfVisible();
  $(window).scroll(function () {
    addAnimationIfVisible();
  });
});


function resetForm() {
  $("#contactForm")[0].reset(); // Reset form fields
  $("#nameError").text("");      // Clear name error message
  $("#emailError").text("");     // Clear email error message
}

// Popup handling
let popup = document.getElementById("popup");

function openPopup() {
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
  resetForm();
}
