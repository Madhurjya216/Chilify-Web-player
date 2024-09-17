let content = document.querySelector(".l-content");

function menu() {
  document.querySelector("#btn").addEventListener("click", function () {
    // Check the current left position of content
    if (content.style.left === "-250px") {
      // If it's -250px, reset position to 0
      content.style.left = "0px";
    } else {
      // Otherwise, set the position to -250px
      content.style.position = "absolute"; // Set position to absolute if needed
      content.style.left = "-250px"; // Move content to -250px from the left
    }
  });
}

// Call the menu function to initialize the event listener
menu();
