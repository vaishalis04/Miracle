
  // Mock data for feedback
  const feedbackData = [
    { name: "Mr. Saiful", stars: 5, feedback: "Great learning experience!", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Ms. Urela", stars: 5, feedback: "The lessons were well-structured.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Mr. Uttom", stars: 5, feedback: "Highly recommend this program.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Ms. Shakil", stars: 5, feedback: "Prepared me for industry challenges.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Mr. Alex", stars: 4, feedback: "Great support and resources!", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Ms. Diana", stars: 5, feedback: "The mentors were amazing!", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Mr. John", stars: 4, feedback: "Well-designed curriculum.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    { name: "Ms. Eva", stars: 5, feedback: "Practical and insightful.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    // { name: "Mr. Leo", stars: 5, feedback: "Loved the hands-on projects.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
    // { name: "Ms. Maria", stars: 5, feedback: "Exceptional learning experience.", img: "https://miracleitindia.com/wp-content/uploads/2024/02/andras-vas-Bd7gNnWJBkU-unsplash-819x1024.jpg" },
  ];

  const itemsPerPage = 4;
  let currentPage = 1;

  // Render feedback cards
  function renderFeedback() {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const feedbackToDisplay = feedbackData.slice(startIndex, endIndex);

    const feedbackContainer = document.getElementById("feedback-cards-container");
    feedbackContainer.innerHTML = "";

    feedbackToDisplay.forEach((item) => {
      const stars = "★".repeat(item.stars) + "☆".repeat(5 - item.stars);

      const card = `
        <div class="feedback-card">
          <div class="feedback-image">
            <img src="${item.img}" alt="${item.name}">
          </div>
          <h3>${item.name}</h3>
          <div class="stars">${stars}</div>
          <p>${item.feedback}</p>
        </div>
      `;
      feedbackContainer.innerHTML += card;
    });

    updatePaginationInfo();
  }

  // Update pagination controls
  function updatePaginationInfo() {
    const totalPages = Math.ceil(feedbackData.length / itemsPerPage);
    document.getElementById("pagination-info").innerText = `Page ${currentPage} of ${totalPages}`;
    document.getElementById("prev-btn").disabled = currentPage === 1;
    document.getElementById("next-btn").disabled = currentPage === totalPages;
  }

  // Event listeners for pagination buttons
  document.getElementById("prev-btn").addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderFeedback();
    }
  });

  document.getElementById("next-btn").addEventListener("click", () => {
    const totalPages = Math.ceil(feedbackData.length / itemsPerPage);
    if (currentPage < totalPages) {
      currentPage++;
      renderFeedback();
    }
  });

  // Initial render
  renderFeedback();

