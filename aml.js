const buttons = document.querySelectorAll(".mood-btn");
        const response = document.getElementById("response");
      
        buttons.forEach(button => {
          button.addEventListener("click", () => {
            const mood = button.dataset.mood;
      
            if (mood === "happy") {
              response.textContent = "😄 wow, spread those energies";
              document.body.style.background = "linear-gradient(to right, #fceabb, #f8b500)";
            } else if (mood === "sad") {
              response.textContent = "😢 oh, poor. this time will pass";
              document.body.style.background = "linear-gradient(to right, #83a4d4, #b6fbff)";
            } else if (mood === "tired") {
              response.textContent = "😴 have some rest, you've got tomorrow";
              document.body.style.background = "linear-gradient(to right, #bdc3c7, #2c3e50)";
            } else if (mood === "angry") {
              response.textContent = "😡 calm down, just be alone for a while, we'll find solutions later";
              document.body.style.background = "linear-gradient(to right, #e52d27, #b31217)";
            } else {
              response.textContent = "🤔 kinda interesting though";
              document.body.style.background = "linear-gradient(to right, #ffecd2, #fcb69f)";
            }
          });
        });