const menuBtn = document.getElementById('mobile-menu-button');
const menu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');

menuBtn.addEventListener('click', () => {
  menu.classList.toggle('hidden');
  menuIcon.classList.toggle('hidden');
  closeIcon.classList.toggle('hidden');
});

// ✅ Auto-close menu when any nav link is clicked
document.querySelectorAll("#mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.add("hidden");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});


  const phrases = ["SAP ABAP Certified ","Web Developer", "Django Enthusiast"];
  const el = document.getElementById("typing-text");

  let currentPhrase = 0;
  let currentChar = 0;
  let isDeleting = false;

  function type() {
    const phrase = phrases[currentPhrase];
    if (isDeleting) {
      currentChar--;
    } else {
      currentChar++;
    }

    el.textContent = phrase.substring(0, currentChar);

    if (!isDeleting && currentChar === phrase.length) {
      setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && currentChar === 0) {
      isDeleting = false;
      currentPhrase = (currentPhrase + 1) % phrases.length;
    }

    const typingSpeed = isDeleting ? 60 : 100;
    setTimeout(type, typingSpeed);
  }

  type();