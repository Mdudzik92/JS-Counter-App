// Setting the initial state of count to 0 and putting it in its own variable.
var count = 0;

// Wiring our JS to the HTML file.
// These two variables access the buttons created in the HTML.
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#decrement");

// This variable reaches the text in the h4's span so we can get access to that number.
var countEl = document.querySelector("#count");

// Creating a function to change the number text on the markup.
function setCounterText() {
	countEl.textContent = count;
}

// Creating functions with event listeners to increase or decrease the number upon clicking the button.

// When the user clicks the increment button...
incrementEl.addEventListener("click", function () {
	// The number of that button goes up by one...
	count++;
	// And the first function is run to change the number on the HTML.
	setCounterText();
});

// When the user clicks the decrement button...
decrementEl.addEventListener("click", function () {
	// Adding a conditional to only allow this to work if the count is greater than 0, effectively stopping the decrement from going negative.
	if (count > 0) {
		// The number of that button goes down by one...
		count--;
		// And the first function is run to change the number on the HTML.
		setCounterText();
	}
});
