document.addEventListener("DOMContentLoaded", function () {
  // Array of quotes (Each quote has a text and a category)
  const quotes = [
      { text: "The most effective way to do it, is to do it.", category: "Motivation" },
      { text: "It is never too late to be who you might have been.", category: "Inspiration" },
      { text: "Action is the foundational key to success.", category: "Success" },
  ];

  let myCategory = localStorage.getItem("selectedCategory") || "all";

  function showRandomQuote() {
        if (quotes.length === 0) {
            quoteContainer.textContent = "No quotes available.";
            return;
        }

        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
      }


});