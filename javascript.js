function recommendSpaceTour() {
    // Ask user for their age
    let age = prompt("Welcome to our space tour website! How old are you?");

    // Convert age to a number
    age = parseInt(age);

    // Check if age is less than 18
    if (age < 18) {
        alert("Sorry, you must be at least 18 years old to participate in our space tours.");
        return; // Exit the function if age is less than 18
    }

    // Check if age is more than 65
    if (age > 65) {
        alert("We're sorry, our space tours are currently only available for individuals under 65 years old.");
        return; // Exit the function if age is more than 65
    }

    // Ask user about their interests
    let interests = prompt("What are your interests? (e.g., adventure, science, relaxation)");

    // Ask user about their budget
    let budget = prompt("What is your budget for the space tour? (in GBP)");

    // Convert budget to a number
    budget = parseFloat(budget);

    // Recommendations based on user inputs
    let recommendation;

    if (age >= 18 && age < 65) {
        if (interests.toLowerCase().includes("adventure") && budget >= 2000) {
            recommendation = "Based on your interests in adventure and your budget (£" + budget.toFixed(2) + "), we recommend our Extreme Space Adventure Tour!";
            document.getElementById('extremeTour').scrollIntoView();
        } else if (interests.toLowerCase().includes("science") && budget >= 1500) {
            recommendation = "Based on your interests in science and your budget (£" + budget.toFixed(2) + "), we recommend our Scientific Exploration Tour!";
            document.getElementById('scientificTour').scrollIntoView();
        } else if (interests.toLowerCase().includes("relaxation") && budget >= 1000) {
            recommendation = "Based on your interests in relaxation and your budget (£" + budget.toFixed(2) + "), we recommend our Space Cruise Tour!";
            document.getElementById('cruiseTour').scrollIntoView();
        } else {
            recommendation = "We currently don't have a suitable tour based on your interests and budget. Please check back later for updates.";
        }
    } else {
        recommendation = "We're sorry, our space tours are currently only available for individuals under 65 years old.";
    }

    // Display recommendation to the user
    alert(recommendation);
}
