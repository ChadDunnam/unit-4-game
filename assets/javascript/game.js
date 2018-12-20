// Variables

var targetNumber = "";
var wins = 0;
var losses = 0;
var counter = 0;
var images = ["./assets/images/crystalcarson.jpg", "./assets/images/crystalrenn.jpg", "./assets/images/crystalreed.jpg", "./assets/images/crystalcox.jpg"];

// Functions
// Target number using Math.random to select a random number up to 120 starting at 19
	function randomTargetNumber () {
		targetNumber = Math.floor(Math.random() * 120) + 19;
	}

	function resetCrystals () {

// Loop through all images starting at index 0
		for (var i = 0; i <images.length; i++) {
			var crystal = $("<img>");
            crystal.addClass("crystal");
            crystal.attr("src", images[i]);
// Let the value of the images be at most 12, starting at 1
			crystal.attr("value", (Math.floor(Math.random() * 12) + 1));
			$(".crystal-img").append(crystal);
		}
	}

	function resetHTML () {
		$(".target-number").html(targetNumber);
		$(".win-lose-counter").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
		$(".score-number").html(counter);
		$(".crystal-img").empty();
	}

	function totalReset () {
		randomTargetNumber ();
		counter = 0;
		resetHTML ();
		resetCrystals ();
	}

	randomTargetNumber();
	resetHTML ();
	resetCrystals ();

// Click Functions
	function crystalClick () {
// Returns first value of selected html element
		counter += parseInt($(this).attr("value"));
		$(".score-number").html(counter);
		if (counter == targetNumber) {
            wins++;
// Call your reset after wins increases by 1
			totalReset();
		}
		else if (counter > targetNumber) {
            losses++;
// Call your reset after loss increases by 1
			totalReset();
		};
	};

//Throughout life cycle of the document, accounting for every single time document is dynamically changed execute crystalClick function
	$(document).on("click", ".crystal", crystalClick);