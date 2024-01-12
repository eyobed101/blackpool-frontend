const API_BASE_URL = "http://localhost:8000/api/";

const AuthAPI = {
  register: async function (userData) {
    try {
      const response = await fetch(`${API_BASE_URL}register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to register user");
      }

      const result = await response.json();
      return result.success;
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
        throw new Error(errorData.message || "Failed to login");
      }

      const result = await response.json();

      localStorage.setItem("authToken", result.token);

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
  // ... other user-related API calls
};

const AdminAPI = {
  getVerifications: async function () {
    // Implementation
  },
  // ... other admin-related API calls
};

const SportAPI = {
  getGames: async function (sportType) {
    try {
      let headers = {};
      if (sportType === "football") {
        headers = { sport: "football" };
      } else if (sportType === "basketball") {
        headers = { sport: "basketball" };
      } else if (sportType === "soccer") {
        headers = { sport: "soccer" };
      } else if (sportType === "baseball") {
        headers = { sport: "baseball" };
      } else if (sportType === "golf") {
        headers = { sport: "golf" };
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
      const games = await response.json();
      return games;
    } catch (error) {
      console.error("Error fetching games:", error);
      throw error;
    }
  },
  getScores: async function (sportType) {
    try {
      let headers = {};
      if (sportType === "football") {
        headers = { sport: "football" };
      } else if (sportType === "basketball") {
        headers = { sport: "basketball" };
      } else if (sportType === "soccer") {
        headers = { sport: "soccer" };
      } else if (sportType === "baseball") {
        headers = { sport: "baseball" };
      } else if (sportType === "golf") {
        headers = { sport: "golf" };
      } else if (sportType === "tennis") {
        headers = { sport: "tennis" };
      } else if (sportType === "upcoming") {
        headers = { sport: "upcoming" };
      } else {
        headers = { sport: "upcoming" };
      }

      const response = await fetch(`${API_BASE_URL}scores`, {
        headers: headers,
      });
      const scores = await response.json();
      return scores;
    } catch (error) {
      console.error("Error fetching scores:", error);
      throw error;
    }
  },
  placeBet: async function (selectedPrice, betData) {
    try {
      const user = "iii";
      const authToken = "hhh";

      const response = await fetch(
        "https://your-backend-domain.com/api/place-bet",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${authToken}`, // Send the authentication token
          },
          body: JSON.stringify({
            selected_price: selectedPrice,
            ...betData, // Send bet-related data based on your frontend form/input
            // Include other necessary data for placing the bet
          }),
        }
      );

      if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(errorMessage || "Failed to place bet");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Error placing bet:", error);
      throw error;
    }
  },

  //   // Example usage (Call this function when the user clicks a "Place Bet" button or submits a form)
  //   const selectedPrice = /* Get the selected price */;
  //   const betData = {
  //     // Populate this object with data from your frontend form/input fields
  //     // Example structure for single bet:
  //     // event_id: [eventId],
  //     // outcome: [selectedOutcome],
  //     // bet_amount: [betAmount],
  //     // is_combo_bet: false,
  //     // Example structure for combo bet:
  //     // event_id: [arrayOfEventIds],
  //     // outcome: [arrayOfSelectedOutcomes],
  //     // bet_amount: [arrayOfBetAmounts],
  //     // is_combo_bet: true,
  //   };

  // ... other sports-related API calls
};

// Creating a global object to hold all API integrators
window.API = {
  AuthAPI,
  UserAPI,
  AdminAPI,
  SportAPI,
};
