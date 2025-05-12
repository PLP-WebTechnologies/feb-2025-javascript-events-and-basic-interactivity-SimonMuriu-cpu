// script.js

document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  document.getElementById("hoverBox").addEventListener("mouseover", () => {
    document.getElementById("hoverBox").style.backgroundColor = "lightcoral";
  });
  
  document.getElementById("keypressInput").addEventListener("keypress", (e) => {
    console.log("Key pressed:", e.key);
  });
  
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("Double-click secret revealed! 🕵️‍♂️");
  });
  
  document.getElementById("colorChangeBtn").addEventListener("click", () => {
    document.getElementById("colorChangeBtn").style.backgroundColor = "orange";
  });

  const images = [
    "./images/Denim.jpg", 
    "./images/Faux Leather.jpg",
    "./images/Lacoste.jpg",
    "./images/Leather.webp", 
    "./images/Sneakers.jpg",
    "./images/Red-Black Cap.png", 
    "./images/Straw Hat.jpg",
    "./images/Fleece.jpg",
  ];
  let currentImage = 0;
  document.getElementById("nextImage").addEventListener("click", () => {
    currentImage = (currentImage + 1) % images.length;
    document.getElementById("galleryImage").src = images[currentImage];
  });
  
  document.querySelectorAll(".tabBtn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".tabContent").forEach((tab) => tab.classList.add("hidden"));
      document.getElementById(btn.dataset.tab).classList.remove("hidden");
    });
  });
  
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
  
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
  
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (!emailPattern.test(email)) {
      feedback.textContent = "Invalid email format";
      feedback.style.color = "red";
      return;
    }
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters";
      feedback.style.color = "red";
      return;
    }
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
  });
