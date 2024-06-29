// NAVIGATION MENU

document.addEventListener("DOMContentLoaded", function () {
    const mobileNavLink = document.querySelector(".mobile_nav-link");
    const navMenuIcon = document.querySelector(".nav_menu-icon.is-close");
    const navMenuWrapper = document.querySelector(".nav_menu-wrapper");
    mobileNavLink.addEventListener("click", function () {
      navMenuWrapper.style.transition = "transform 0.5s ease"; // Apply transition
      navMenuWrapper.style.transform = "translateX(0)"; // Move the menu on-screen
      document.body.style.overflow = "hidden"; // Disable scrolling
    });
    navMenuIcon.addEventListener("click", function () {
      navMenuWrapper.style.transition = "transform 0.5s ease"; // Apply transition
      navMenuWrapper.style.transform = "translateX(100vw)"; // Move the menu off-screen
      document.body.style.overflow = "auto"; // Enable scrolling
    });
  });


  // FAQ SECTION
  const faqQuestions = document.querySelectorAll(".faq_question");
  const faqAnswers = document.querySelectorAll(".faq_answer");
  const faqArrows = document.querySelectorAll(".faq_arrow");

  window.addEventListener("load", () => {
    faqAnswers.forEach(answer => answer.style.height = "0px");
  });

  function toggleFaq(index, isOpening) {
    const height = isOpening ? faqAnswers[index].scrollHeight + "px" : "0px";
    const rotateValue = isOpening ? "180deg" : "0deg";
    const scaleValue = isOpening ? "1.2" : "1";
    const heightTransition = "height 0.2s cubic-bezier(0.4, 0.0, 0.2, 1)";
    const transformTransition = "transform 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)";
    faqAnswers[index].style.height = height;
    faqAnswers[index].style.transition = heightTransition;
    faqArrows[index].style.transition = transformTransition;
    faqArrows[index].style.transform = `rotate(${rotateValue}) scale(${scaleValue})`;
    if (isOpening) {
      setTimeout(() => faqArrows[index].style.transform = `rotate(${rotateValue})`, 200);
    }
  }
  faqQuestions.forEach((question, index) => {
    question.addEventListener("click", () => {
      const isOpening = faqAnswers[index].style.height === "0px";
      toggleFaq(index, isOpening);
    });
  });