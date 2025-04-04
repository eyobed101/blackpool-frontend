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

const API_BASE_URL = "https://backend.blackpoolbet.com/api/";
const API_STORAGE_URL = "http://backend.blackpoolbet.com/storage/app/"

// const API_BASE_URL = "http://127.0.0.1:8000/api/";
// const API_STORAGE_URL = "http://127.0.0.1:8000/storage/app/"


const AuthAPI = {
  register: async function (userData) {
    $("#loadingSpinner5").show();

    try {
      var response = "";
      var input = document.getElementById("agent-number-field");
      console.log(input.value)
      // Check if the value of the input is empty
      if (input.value.trim() === "") {
        response = await fetch(`${API_BASE_URL}register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      } else {
        // console.log(input.value)
        response = await fetch(`${API_BASE_URL}${input.value}/user/register`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        });
      }
     
      

      if (!response.ok) {

        const errorData = await response.json();
        console.log(errorData.error);
        const errorMessage = errorData.error;

        const errorAlert = document.createElement("div");
        errorAlert.classList.add("alert", "alert-danger");
        errorAlert.textContent = errorMessage;

        const errorContainer = document.getElementById("errorContainer2");
        errorContainer.innerHTML = "";
        errorContainer.appendChild(errorAlert);

        throw new Error(errorMessage);
      }

      const result = await response.json();

      const successAlert = document.createElement("div");
      successAlert.classList.add("alert", "alert-success");
      successAlert.textContent = "Registeration successful!";

      const successContainer = document.getElementById("successContainer2");
      successContainer.innerHTML = "";
      successContainer.appendChild(successAlert);

      $("#exampleModal").modal("show");
      $("#exampleModal2").modal("hide");

      return result.success;
    } catch (error) {
      

      console.error("Network error or issue with fetch:", error);
      
    } finally {
      $("#loadingSpinner5").hide();
    }
    // Implementation
  },
  login: async function (loginData) {
    $("#loadingSpinner").show();

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
      // console.log(result.user);

      localStorage.setItem("authToken", result.token);
      localStorage.setItem("username", result.user.username);
      localStorage.setItem("userData", JSON.stringify(result.user));

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
    } finally {
      // Hide loading spinner after receiving the response or encountering an error
      $("#loadingSpinner").hide();
    }

    // Implementation
  },
  // ... other authentication-related API calls
};

const UserAPI = {
  getUserDetails: async function (authToken) {
    $("#loadingSpinner").show();

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
    } finally {
      // Hide loading spinner after receiving the response or encountering an error
      $("#loadingSpinner").hide();
    }
  },
  getSettlement: async function (authToken) {

    try {
      const response = await fetch(`${API_BASE_URL}settlement`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${authToken}`,
          Accept: "application/json",
         "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch user details");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    }
  },

  getVerificationDetails: async function (authToken) {
    $("#loadingSpinner3").show();

    try {
      const response = await fetch(`${API_BASE_URL}profileinfo`, {
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
      return result.verification_details;
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    } finally {
      $("#loadingSpinner3").hide();
    }
  },

  uploadVerification: async function (verificationData) {
    // Implementation
  },
  betHistory: async function (authToken) {
    $("#loadingSpinner").show();

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
    } finally {
      // Hide loading spinner after receiving the response or encountering an error
      $("#loadingSpinner").hide();
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
      $("#loadingSpinner2").show();
      $("#loadingSpinnerMobile").show();
      const inLoading = document.getElementById("inLoading");
      inLoading.classList.add('disabled-link');
      inLoading.setAttribute('disabled', true);


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

        const successAlert = document.createElement("div");
        successAlert.classList.add("alert", "alert-success");
        successAlert.textContent = "Bet Placed Successfully";


        const successContainer = document.getElementById("successPlace");
        successContainer.innerHTML = ""; 
        successContainer.appendChild(successAlert);
        const successContainerMobile = document.getElementById("successPlaceMobile");
        successContainerMobile.innerHTML = ""; 
        successContainerMobile.appendChild(successAlert);


        localStorage.removeItem("eventsArray");
        localStorage.setItem("placedItem", JSON.stringify(data));
        localStorage.setItem("price", betAmount);
        (function() {
          setTimeout(function() {
            window.location.reload(); 
          }, 3000);
        })();       
        // window.location.reload();
      } else if (response.status === 401) {
        $("#exampleModal2").modal("show");
        const result = await response.json();

        console.log(result.message);
      } else if (response.status === 404) {
        $("#exampleModal2").modal("show");
        const result = await response.json();

        console.log(result.message);
      }else if (response.status === 400) {

        const result = await response.json();
        const errorAlert = document.createElement("div");
        errorAlert.classList.add("alert", "alert-success");
        errorAlert.textContent = result.message;

        const errorContainer = document.getElementById("errorPlace");
        errorContainer.innerHTML = ""; 
        errorContainer.appendChild(errorAlert);
        const errorContainerMobile = document.getElementById("errorPlaceMobile");
        errorContainerMobile.innerHTML = ""; 
        errorContainerMobile.appendChild(errorAlert);

      } else {
        const errorAlert = document.createElement("div");
        errorAlert.classList.add("alert", "alert-success");
        errorAlert.textContent = "Failed to Place Bet";

        const errorContainer = document.getElementById("errorPlace");
        errorContainer.innerHTML = ""; 
        errorContainer.appendChild(errorAlert); 
        const errorContainerMobile = document.getElementById("errorPlaceMobile");
        errorContainerMobile.innerHTML = ""; 
        errorContainerMobile.appendChild(errorAlert);     
      }
    } catch (error) {
      console.error("Error fetching user details:", error);
      throw error;
    } finally {
      // Hide loading spinner after receiving the response or encountering an error
      $("#loadingSpinner2").hide();
      $("#loadingSpinnerMobile").hide();
      // const inLoading = document.getElementById("inLoading");
      // inLoading.classList.remove('disabled-link');
      // inLoading.setAttribute('disabled', false);
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

    const successContainer = document.getElementById("successContainer2");
    successContainer.innerHTML = "";
    const errorContainer = document.getElementById("errorContainer2");
    errorContainer.innerHTML = "";

    const checkbox1 = document.getElementById("ones1");
    const checkbox2 = document.getElementById("ones2");
    const checkbox3 = document.getElementById("ones3");

    // Check if all specific checkboxes are selected
    const allSelected =
      checkbox1.checked && checkbox2.checked && checkbox3.checked;

    if (!allSelected) {
      const errorAlert = document.createElement("div");
      errorAlert.classList.add("alert", "alert-danger");
      errorAlert.textContent = "Please check the Box!";

      const errorContainer = document.getElementById("errorContainer2");
      errorContainer.innerHTML = ""; // Clear previous errors
      errorContainer.appendChild(errorAlert);
      // console.log("Not all checkboxes are selected. Display an error message or take action.");
      return;
    }

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

      // console.log(result);

      // const registerModal = document.getElementById("exampleModal2");
      // const bootstrapModal = new bootstrap.Modal(registerModal);
      // bootstrapModal.hide();

      // // const loginModal = document.getElementById("exampleModal");
      // // const bootstrapModal2 = new bootstrap.Modal(loginModal);
      // // bootstrapModal2.show();

      // // window.location.href = "/index.html";

      // // Redirect to another page, update UI, etc.
      // // ...
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
  const logoutButton2 = document.getElementById('logout-btn');

  const loginButton = document.getElementById("loginButton");
  const signupButton = document.getElementById("signupButton");
  const signupArea = document.getElementById("signupArea");
  const afterlogin = document.getElementById("afterlogin");

  function showProfile(username, avatarUrl) {
    profileSection.style.display = "block";
    // profileSection1.style.display = "block";
    usernameElement.textContent = username;
    userAvatar.src = avatarUrl;
    loginButton.style.display = "none";
    // loginButton1.style.display = "none";
    signupButton.style.display = "none";
    // signupButton1.style.display = "none";
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
    localStorage.removeItem("userData");
    localStorage.removeItem("eventsArray");
    profileSection.style.display = "none";
    // profileSection1.style.display = "none";
    loginButton.style.display = "block";
    // loginButton1.style.display = "block";
    signupButton.style.display = "block";
    // signupButton1.style.display = "block";
    window.location.reload();
  });
  logoutButton2.addEventListener("click", () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("username");
    localStorage.removeItem("userData");
    localStorage.removeItem("eventsArray");
    profileSection.style.display = "none";
    // profileSection1.style.display = "none";
    loginButton.style.display = "block";
    // loginButton1.style.display = "block";
    signupButton.style.display = "block";
    // signupButton1.style.display = "block";
    window.location.reload();
  });

  // Redirect to the home page after successful login
  // window.location.href = '/home'; // Replace '/home' with the URL of your home page
});



document.addEventListener("DOMContentLoaded", function () {
  const signUpLink = document.getElementById("signUpLink");

  signUpLink.addEventListener("click", function (event) {
    event.preventDefault();

    $("#exampleModal").modal("hide");
    $("#exampleModal2").modal("show");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const signUpLink = document.getElementById("loginLink");

  signUpLink.addEventListener("click", function (event) {
    event.preventDefault();

    $("#exampleModal2").modal("hide");
    $("#exampleModal").modal("show");
  });
});

document
  .getElementById("changePasswordForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const currentPassword = document.getElementById(
      "inputPasswordCurrent"
    ).value;
    const newPassword = document.getElementById("inputPasswordNew").value;
    const newPasswordConfirm =
      document.getElementById("inputPasswordNew2").value;

    if (newPassword !== newPasswordConfirm) {
      return;
    }

    const payload = {
      current_password: currentPassword,
      new_password: newPassword,
    };

    const token = localStorage.getItem("authToken");

    fetch(`${API_BASE_URL}changepassword`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    })
      .then((response) => {
        if (response.ok) {
          console.log("Password changed successfully");
        } else {
          return response.json().then((error) => {
            console.log(error);
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

document
  .getElementById("deleteAccountBtn")
  .addEventListener("click", function (event) {
    event.preventDefault();

    if (
      confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      const token = localStorage.getItem("authToken");

      fetch(`${API_BASE_URL}deleteaccount`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.ok) {
            localStorage.removeItem("authToken");
            localStorage.removeItem("username");
          } else {
            // Handle error responses from the backend
            return response.json().then((error) => {
              // Handle error response
            });
          }
        })
        .catch((error) => {
          // Handle fetch errors
        });
    }
  });


  $("#profile-tab03").on("click", function (event) {
    $.ajax({
      type: "get",
      url: `${API_BASE_URL}wallets/getDefault`,
      beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", `Bearer ${token}`)
      },
      success: function (response) {
        console.log(response)
            $("#wallet-address").html(response.wallet[0].wallet_address)
            $("#wallet-container").html(`<img src="${API_STORAGE_URL}${response.wallet[0].wallet_qr}" width="150px" height="150px"/>"`)
      }
    });
});
$("#Deposit-Button").on('click', function(event) {
     $("#DepositSpinner").show()
     $("form#depositForm").submit(function(e) {
         e.preventDefault();
         const token = localStorage.getItem("authToken");
         var formData = new FormData(this);
         $.ajax({
             url:`${API_BASE_URL}deposit`,
             type:"POST",
             data:formData,
             beforeSend: function(xhr) {
                xhr.setRequestHeader("Authorization", `Bearer ${token}`)
              },
             success: function (data) {
                alert("Successfully Sent Deposit Request")
                $("#amountField").val("")
                $("#receiptImage").val("")
                $("#DepositSpinner").hide()
             },
             statusCode: {
                 500: function(xhr) {
                    $('#DepositSpinner').hide()
                    alert("Something went wrong")
                 }
             },
             cache: false,
             contentType:false,
             processData:false
         })
     })
})
$("#Withdraw-Button").on('click', function(event) {
$("#WithdrawSpinner").show()
$("form#withdrawForm").submit(function(e) {
    e.preventDefault();
    const token = localStorage.getItem("authToken");
    var formData = new FormData(this);
    $.ajax({
        url:`${API_BASE_URL}withdraw`,
        type:"POST",
        data:formData,
        beforeSend: function(xhr) {
           xhr.setRequestHeader("Authorization", `Bearer ${token}`)
         },
        success: function (data) {
           alert("Successfully Sent Withdraw Request")
           $("#withdrawAmount").val("")
           $("#withdrawAccount").val("")
           $("#WithdrawSpinner").hide()
        },
        statusCode: {
            500: function(xhr) {
               $('#WithdrawSpinner').hide()
               alert("Something went wrong")
            }
        },
        processData: false,
        cache:false,
        contentType: false,
    })
})
})
$("#wallet-tab03").on('click', function(event){
    const token = localStorage.getItem("authToken");
    $.ajax({
        type:"GET",
        beforeSend: function(xhr) {
          xhr.setRequestHeader("Authorization", `Bearer ${token}`)
        },
        url: `${API_BASE_URL}history`,
        success: function(response){
          var transaction = response.transaction;
                  //Important code starts here to populate table  
          var tableHTML = "";
            console.log(transaction)
             for(let i = 0; i < transaction.length; i++)
             {
                   const dateObject = new Date(transaction[i].created_at)
                   const options = { year: 'numeric', month: 'long', day: 'numeric'};
                   const formattedDate = dateObject.toLocaleDateString('en-US', options);
                   tableHTML += `<tr>
                         <td>${transaction[i].amount} USDT</td>
                         <td>${formattedDate}</td>
                         <td>${transaction[i].status}</td>
                         <td>${transaction[i].type}</td>
                   </tr>`
             }
             $("#transactionTable").append(tableHTML)
         }
    })
})
document.getElementById("profile-tab03").onclick(async (event) => {
console.log("tab joined")
$("#loadingSpinner").show();
try {
  const authToken = localStorage.getItem("authToken");
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
  document.getElementById("wallet-value").innerHTML += `<p>${result.success.balance} USDT</p>`;
  $("#loadingSpinner").hide();
  return result.success; 

} catch (error) {
  console.error("Error fetching user details:", error);
  throw error;
}
})

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

// document.addEventListener("DOMContentLoaded", function() {
//   const logoutButton = document.getElementById('logout-btn');
//   console.log("first")
  
//   // Add click event listener to the logout button
//   logoutButton.addEventListener('click', function(event) {
//       event.preventDefault(); // Prevent default link behavior
      
//       localStorage.removeItem("authToken");
//     localStorage.removeItem("username");
//     localStorage.removeItem("userData");
//     localStorage.removeItem("eventsArray");
//     profileSection.style.display = "none";
//     // profileSection1.style.display = "none";
//     loginButton.style.display = "block";
//     // loginButton1.style.display = "block";
//     signupButton.style.display = "block";
//     // signupButton1.style.display = "block";
//     window.location.reload();
//   });
// });



// JavaScript to move elements based on screen size
// function moveElements() {
//   const rightCompoDesktop = document.getElementById('rightCompoDesktop');
//   const rightCompoMobile = document.getElementById('rightCompoMobile');
//   const accordion = document.getElementById('accordion');

//   if (rightCompoDesktop && rightCompoMobile && accordion) {
//     if (window.innerWidth <= 768) {
//       rightCompoDesktop.style.display = 'none';
//       rightCompoMobile.style.display = 'block';
//     } else {
//       rightCompoDesktop.style.display = 'block';
//       rightCompoMobile.style.display = 'none';
//     }
//   } else {
//     console.error("One or more elements not found.");
//   }
// }

// // Initial check on page load and on window resize
// document.addEventListener('DOMContentLoaded', moveElements);
// window.addEventListener('resize', moveElements);
