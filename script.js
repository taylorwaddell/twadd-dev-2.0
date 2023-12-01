document.addEventListener("mousemove", function (event) {
  // If a touch event is detected, return immediately
  if (
    "ontouchstart" in window ||
    navigator.maxTouchPoints ||
    window.innerWidth < 900
  ) {
    return;
  }

  const follower = document.getElementById("follower");

  // Function to update follower content and visibility
  function updateFollowerContentAndVisibility(target, event) {
    while (target) {
      if (target.hasAttribute("data-tooltip")) {
        // Set the inner HTML of the follower to the tooltip content
        follower.innerHTML = target.getAttribute("data-tooltip");

        // Update follower's position and make it visible
        follower.style.left = event.pageX + "px";
        follower.style.top = event.pageY + "px";
        follower.style.display = "block"; // Make follower visible

        return; // Exit the function once the tooltip is found and set
      }
      target = target.parentElement;
    }

    // If no tooltip element, make the follower invisible
    follower.style.display = "none";
  }

  // Call the function with the current event target
  updateFollowerContentAndVisibility(event.target, event);
});
