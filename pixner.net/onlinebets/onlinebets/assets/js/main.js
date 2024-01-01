"user strict";

$(document).ready(function () {
  //--Owl Carousel--//
  $(".banner-wrapper").owlCarousel({
    loop: true,
    margin: 0,
    smartSpeed: 2500,
    autoplayTimeout: 2000,
    autoplay: false,
    nav: false,
    dots: false,
    responsiveClass: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      500: {
        items: 1,
      },
      767: {
        items: 1,
      },
      991: {
        items: 1,
      },
      1199: {
        items: 1,
      },
      1399: {
        items: 1,
      },
    },
  });
  $(".progress-slider").owlCarousel({
    loop: true,
    margin: 10,
    smartSpeed: 2500,
    autoplayTimeout: 2500,
    autoplay: false,
    nav: true,
    dots: true,
    responsiveClass: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      575: {
        items: 1,
      },
      767: {
        items: 1,
      },
      991: {
        items: 2,
      },
      1199: {
        items: 1,
      },
      1499: {
        items: 2,
      },
      1999: {
        items: 2,
      },
    },
  });
  $(".virtual-wrap").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 2500,
    autoplayTimeout: 3000,
    autoplay: false,
    nav: true,
    dots: false,
    responsiveClass: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      767: {
        items: 3,
      },
      991: {
        items: 4,
      },
      1199: {
        items: 3,
      },
      1399: {
        items: 4,
      },
      1499: {
        items: 4,
      },
      1699: {
        items: 4,
      },
    },
  });
  $(".sponsor-wrap").owlCarousel({
    loop: true,
    margin: 20,
    smartSpeed: 2000,
    autoplayTimeout: 2000,
    autoplay: false,
    nav: false,
    dots: false,
    responsiveClass: true,
    navText: [
      '<i class="fas fa-chevron-left"></i>',
      '<i class="fas fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      575: {
        items: 4,
      },
      767: {
        items: 5,
      },
      991: {
        items: 6,
      },
      1199: {
        items: 5,
      },
      1499: {
        items: 9,
      },
    },
  });
  //--Owl Carousel--//

  // password hide
  $(
    ".toggle-password, .toggle-password2, .toggle-password3, .toggle-password4, .toggle-password5"
  ).click(function () {
    $(this).toggleClass("fa-eye fa-eye-slash");
    var input = $($(this).attr("id"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });
  //Toast

  //right menu close
  var closebtns = document.getElementsByClassName("close-items");
  var i;
  for (i = 0; i < closebtns.length; i++) {
    closebtns[i].addEventListener("click", function () {
      this.parentElement.style.display = "none";
    });
  }
  //--Nice Select--//
  $("select").niceSelect();

  $(document).click(function () {
    $(".dropdown-menu.show").removeClass("show");
  });
  $("body").on("click", ".apto-trigger-dropdown", function (e) {
    e.stopPropagation();
    $(this)
      .closest(".apto-dropdown-wrapper")
      .find(".dropdown-menu")
      .toggleClass("show");
  });
  $("body").on("click", ".dropdown-item", function (e) {
    e.stopPropagation();
    let $selectedValue = $(this).val();
    let $icon = $(this).find("svg");
    let $btn = $(this)
      .closest(".apto-dropdown-wrapper")
      .find(".apto-trigger-dropdown");

    $(this)
      .closest(".apto-dropdown-wrapper")
      .find(".dropdown-menu")
      .removeClass("show")
      .attr("data-selected", $selectedValue);
    $btn.find("svg").remove();
    $btn.prepend($icon[0].outerHTML);
  });
  //--Nice Select--//

  //--Progress Bar--//
  $(".animated-progress span").each(function () {
    $(this).animate(
      {
        width: $(this).attr("data-progress") + "%",
      },
      1000
    );
    $(this).text($(this).attr("data-progress") + "%");
  });
  //--Progress Bar--//

  $(function () {
    $(".hamburger, .hamb").click(function () {
      showHideMobile();
    });

    $(".dimmer").click(function () {
      showHideMobile();
    });

    $("li .icon-arrow").click(function () {
      $(this).parent().parent().toggleClass("showSubmenu");
    });
  });

  function showHideMobile() {
    $(".hamburger, .hamb").toggleClass("active act");
    $(".hamburger, .hamb").parent(".menu").toggleClass("active act");
    $(".dimmer").toggleClass("active act");
    $("body").toggleClass("no-scrolling");
  }

  /* Tab Section Js area */
  $(".header-bar").on("click", function (e) {
    $(".main-menu, .header-bar").toggleClass("active act");
  });
  $(".main-menu li a").on("click", function (e) {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(300, "swing");
    } else {
      element.addClass("open");
      element.children("ul").slideDown(300, "swing");
      element.siblings("li").children("ul").slideUp(300, "swing");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.siblings("li").find("ul").slideUp(300, "swing");
    }
  });
  $(".scrollToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });

  /*-------- Magnific Popup Start--------*/
  $(".video-btn").magnificPopup({
    type: "iframe",
    callbacks: {},
  });
  /*-------- Magnific Popup Start--------*/

  //free popup
  $(".Click-here").on("click", function () {
    $(".custom-model-main").addClass("model-open");
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".custom-model-main").removeClass("model-open");
  });

  $(".click-heretwo").on("click", function () {
    $(".referral-model-main").addClass("model-open");
  });
  $(".close-btn, .bg-overlay").click(function () {
    $(".referral-model-main").removeClass("model-open");
  });
  //free popup

  //Click event to scroll to top end

  /*-- Odometer Counting Start--*/
  $(".odometer-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
  /*-- Odometer Counting End--*/

  /*-- Woe Animation Start--*/
  new WOW().init();
  /*-- Wow Animation End--*/

  /*-- Preloader Start--*/
  setTimeout(function () {
    $(".boxes-bg").fadeToggle();
  }, 2000);
  /*-- Preloader End--*/
  //Search Click
  $(document).ready(function () {
    $('a[href="#search"]').on("click", function (event) {
      $("#search").addClass("open");
      $('#search > form > input[type="search"]').focus();
    });
    $("#search, #search button.close").on("click keyup", function (event) {
      if (
        event.target == this ||
        event.target.className == "close" ||
        event.keyCode == 27
      ) {
        $(this).removeClass("open");
      }
    });
  });

  //Timing Hours
  $(".countdown").each(function () {
    var date = $(this).data("date");
    $(this).countdown({
      date: date,
      offset: +6,
      day: "Day",
      days: "Days",
    });
  });
  //Quantity number
});
//dark light
$(".mode--toggle").on("click", function () {
  setTheme(localStorage.getItem("theme"));
});
if (localStorage.getItem("theme") == "light-theme") {
  localStorage.setItem("theme", "dark-theme");
} else {
  localStorage.setItem("theme", "light-theme");
}
setTheme(localStorage.getItem("theme"));
function setTheme(theme) {
  if (theme == "dark-theme") {
    localStorage.setItem("theme", "light-theme");
    $("html").addClass(theme);
    $(".mode--toggle").find("img").attr("src", "assets/img/moon.png");
  } else {
    localStorage.setItem("theme", "dark-theme");
    $("html").removeClass("dark-theme");
    $(".mode--toggle").find("img").attr("src", "assets/img/sun.png");
  }
}

// const API_BASE_URL = "https://backend.blackpoolbet.com/api/";
const API_BASE_URL = "http://localhost:8000/api/";

const AuthAPI = {
  register: async function (userData) {
    try {
      await fetch(`${API_BASE_URL}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.success) {
            // Show verification modal after successful registration
            $("#exampleModal2").modal("hide"); // Hide registration modal
            $("#verificationModal").modal("show"); // Show verification modal
          } else {
            console.error("Registration failed:", data.error);
            // Show an error message to the user
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          // Show an error message to the user
        });
      // const response = await fetch(`${API_BASE_URL}register`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(userData),
      // });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   throw new Error(errorData.error || "Failed to register user");
      // }

      // const result = await response.json();
      // return result.success;
    } catch (error) {
      console.error("Error registering user:", error);
      throw error;
    }
    // Implementation
  },
  login: async function (loginData) {
    try {
      const response = await fetch(`${API_BASE_URL}login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        const errorMessage = errorData.message || "Failed to login";

        // Display error notification using Bootstrap alert
        const errorAlert = document.createElement("div");
        errorAlert.classList.add("alert", "alert-danger");
        errorAlert.textContent = errorMessage;

        // Append the error notification to the desired element in the DOM
        // For example, assuming you have a div with the id "errorContainer"
        const errorContainer = document.getElementById("errorContainer");
        errorContainer.innerHTML = ""; // Clear previous errors
        errorContainer.appendChild(errorAlert);

        throw new Error(errorMessage);
      }

      const result = await response.json();

      localStorage.setItem("authToken", result.token);
      localStorage.setItem("username", result.username);

      // Display success notification using Bootstrap alert
      const successAlert = document.createElement("div");
      successAlert.classList.add("alert", "alert-success");
      successAlert.textContent = "Login successful!";

      // Append the success notification to the desired element in the DOM
      // For example, assuming you have a div with the id "successContainer"
      const successContainer = document.getElementById("successContainer");
      successContainer.innerHTML = ""; // Clear previous success messages
      successContainer.appendChild(successAlert);

      return result.token;
    } catch (error) {
      console.error("Error logging in:", error);
      throw error;
    }
    // Implementation
  },
  // ... other authentication-related API calls
};

const UserAPI = {
  getUserDetails: async function (authToken) {
    try {
      const response = await fetch(`${API_BASE_URL}details`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch user details");
      }

      const result = await response.json();
      return result.success;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  },
  uploadVerification: async function (verificationData) {
    // Implementation
  },
  betHistory: async function (authToken) {
    try {
      const response = await fetch(`${API_BASE_URL}bet-history`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch user details");
      }

      const result = await response.json();
      return result;
    } catch (e) {
      console.error("Error fetching user details:", error);
    }
    // Implementation
  },
  placeBet: async function (data, betAmount, authToken) {
    try {
      let combo_condition = true;

      if (data.length > 1) {
        combo_condition = true;
        console.log(combo_condition);
      } else {
        combo_condition = false;
        console.log(combo_condition);
      }

      const requestBody = {
        is_combo_bet: combo_condition,
        data: data,
        betAmount: betAmount,
      };

      const response = await fetch(`${API_BASE_URL}placebet`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestBody),
      });

      // if (!response.ok) {
      //   const errorData = await response.json();
      //   console.log(errorData)

      //   throw new Error(errorData.message || "Failed to fetch user details");
      // }

      if (response.status === 200) {
        const result = await response.json();

        console.log(result.message);

        localStorage.removeItem("eventsArray");
        window.location.reload();
      } else if (response.status === 401) {
        const result = await response.json();

        console.log(result.message);
      } else if (response.status === 404) {
        const result = await response.json();

        console.log(result.message);
      } else {
        console.log(" ");
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  },

  // ... other user-related API calls
};

document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const email = document.getElementById("email3").value;
    const password = document.getElementById("password-field").value;
    console.log(email);
    console.log(password);
    try {
      const result = await AuthAPI.login({ email, password });

      // Save the authToken in localStorage upon successful login
      localStorage.setItem("authToken", result);

      // Optionally, perform actions after successful login (e.g., hide modal, update UI)
      // Example: Close the login modal after successful login
      const loginModal = document.getElementById("exampleModal");
      const bootstrapModal = new bootstrap.Modal(loginModal);
      bootstrapModal.hide();

      window.location.href = "/index.html";

      // Redirect to another page, update UI, etc.
      // ...
    } catch (error) {
      console.error("Error logging in:", error);
      // Handle login error (e.g., display error message)
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const registerForm = document.getElementById("registerForm");

  registerForm.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("uname").value;
    const email = document.getElementById("email33").value;
    const password = document.getElementById("password-field2").value;
    const phone_number = document.getElementById("phone-number-field").value;

    validateEmail(email);

    try {
      const result = await AuthAPI.register({
        name,
        email,
        password,
        phone_number,
      });

      console.log(result);

      const registerModal = document.getElementById("exampleModal2");
      const bootstrapModal = new bootstrap.Modal(registerModal);
      bootstrapModal.hide();

      // const loginModal = document.getElementById("exampleModal");
      // const bootstrapModal2 = new bootstrap.Modal(loginModal);
      // bootstrapModal2.show();

      window.location.href = "/index.html";

      // Redirect to another page, update UI, etc.
      // ...
    } catch (error) {
      console.error("Error registration:", error);
      // Handle login error (e.g., display error message)
    }
  });
});

function validateEmail(email) {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
}

document.addEventListener("DOMContentLoaded", () => {
  const profileSection = document.getElementById("profileSection");
  const usernameElement = document.getElementById("username");
  const userAvatar = document.getElementById("userAvatar");
  const logoutButton = document.getElementById("logoutButton");
  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton");
  const signupArea = document.getElementById("signupArea");

  function showProfile(username, avatarUrl) {
    profileSection.style.display = "block";
    usernameElement.textContent = username;
    userAvatar.src = avatarUrl;
    loginButton.style.display = "none";
    signupButton.style.display = "none";
  }

  // Check if username and authToken exist in localStorage
  const authToken = localStorage.getItem("authToken");
  const storedUsername = localStorage.getItem("username");

  if (authToken && storedUsername) {
    const userInfo = {
      username: storedUsername, // Use the stored username
      avatarUrl: "assets/img/avater.png", // Replace with actual avatar URL
    };

    showProfile(userInfo.username, userInfo.avatarUrl);
  }

  logoutButton.addEventListener("click", () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    profileSection.style.display = "none";
    loginButton.style.display = "block";
    signupButton.style.display = "block";
  });

  // Redirect to the home page after successful login
  // window.location.href = '/home'; // Replace '/home' with the URL of your home page
});

// Function to fetch data from the backend API
async function fetchDataBySportType(sportType) {
  try {
    let headers = {};
    if (sportType === "football") {
      headers = { sport: "football" };
    } else if (sportType === "bascketball") {
      headers = { sport: "bascketball" };
    } else if (sportType === "soccer") {
      headers = { sport: "soccer" };
    } else if (sportType === "baseball") {
      headers = { sport: "baseball" };
    } else if (sportType === "golf") {
      headers = { sport: "golf" };
    } else if (sportType === "cricket") {
      headers = { sport: "cricket" };
    } else if (sportType === "tennis") {
      headers = { sport: "tennis" };
    } else if (sportType === "upcoming") {
      headers = { sport: "upcoming" };
    } else {
      headers = { sport: "upcoming" };
    }

    const response = await fetch(`${API_BASE_URL}games`, {
      headers: headers,
    });

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    const games = await response.json();

    return games;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
