const movieDatabase = [
    {
        title: "Movie 1",
        type: "Nepali",
        date: "03 Feb 2024",
        description: "hjdhs jkhdfjdh hjfhfk kjfhkjh kfhgkkjfh kfhgkjfh khgkjf kjhgkf kghkjfh kjghfk",
        imageLink: "Mr.-Mrs.-Smith-200x300",
        size: "2Gb",
        links: ["hgjgfjfhfjjdhkgj", "jhgkjkfdkjfdlfkjkdfhd", "hjfdhfdgjkfjdhgkfdhgkdhk"]
    },
    {
        title: "Movie 2",
        type: "Nepali",
        date: "03 Feb 2024",
        description: "hjdhs jkhdfjdh hjfhfk kjfhkjh kfhgkkjfh kfhgkjfh khgkjf kjhgkf kghkjfh kjghfk",
        imageLink: "Mr.-Mrs.-Smith-200x300",
        size: "2Gb",
        links: ["hgjgfjfhfjjdhkgj", "jhgkjkfdkjfdlfkjkdfhd", "hjfdhfdgjkfjdhgkfdhgkdhk"]
    },
    {
        title: "Movie 3",
        type: "Nepali",
        date: "03 Feb 2024",
        description: "hjdhs jkhdfjdh hjfhfk kjfhkjh kfhgkkjfh kfhgkjfh khgkjf kjhgkf kghkjfh kjghfk",
        imageLink: "Mr.-Mrs.-Smith-200x300",
        size: "2Gb",
        links: ["hgjgfjfhfjjdhkgj", "jhgkjkfdkjfdlfkjkdfhd", "hjfdhfdgjkfjdhgkfdhgkdhk"]
    }
];

// Function to dynamically generate movie cards based on search query
function generateMovieCards(searchQuery = '') {
    const container = document.getElementById("movieContainer");
    container.innerHTML = ""; // Clear previous movie cards

    movieDatabase.forEach(movie => {
        if (movie.title.toLowerCase().includes(searchQuery.toLowerCase()) || searchQuery === '') {
            // Create elements
            const anchor = document.createElement("a");
            const cardDiv = document.createElement("div");
            const img = document.createElement("img");
            const dateDiv = document.createElement("div");
            const movieDetailDiv = document.createElement("div");

            // Set attributes
            anchor.href = "detail.html?title=" + encodeURIComponent(movie.title); // Link to detail page with title parameter
            anchor.classList.add("col-6", "col-lg-2", "col-md");
            cardDiv.classList.add("card", "movie-card");
            img.src = "asset/image/" + movie.imageLink + ".jpg";
            img.alt = movie.title;
            dateDiv.classList.add("date", "text-center");
            movieDetailDiv.classList.add("movie-detail", "text-white");

            // Set inner HTML
            dateDiv.textContent = movie.date;
            movieDetailDiv.textContent = movie.title;

            // Append elements
            cardDiv.appendChild(img);
            anchor.appendChild(cardDiv);
            anchor.appendChild(dateDiv);
            anchor.appendChild(movieDetailDiv);
            container.appendChild(anchor);
        }
    });
}

// Get the search input element
const searchInput = document.querySelector('.search');

// Add event listener for input changes
searchInput.addEventListener('input', function () {
    const searchQuery = this.value.trim(); // Get the value from the input and trim whitespace
    generateMovieCards(searchQuery); // Generate movie cards based on the search query
});

// Call the function to generate movie cards
generateMovieCards();
