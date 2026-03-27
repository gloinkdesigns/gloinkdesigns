
document.addEventListener("DOMContentLoaded", function() {
  // Create popup element once
  const popup = document.createElement("div");
  popup.classList.add("image-popup");
  popup.innerHTML = "<img src='' alt='Popup Image'>";
  document.body.appendChild(popup);

  const popupImg = popup.querySelector("img");

  // Add click event to all images
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("click", () => {
      popup.classList.add("active");
      popupImg.src = img.src;
    });
  });

  // Close popup when clicked anywhere
  popup.addEventListener("click", () => {
    popup.classList.remove("active");
  });
});
