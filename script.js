$(function() {
  // Initialize page
  console.log("%cBarry B. Benson Pet Game Loaded", "color: goldenrod; font-size: 18px; font-weight: bold;");
  checkAndUpdatePetInfoInHtml();

  // Main game button events
  $('.treat-button').click(clickedTreatButton);
  $('.play-button').click(clickedPlayButton);
  $('.exercise-button').click(clickedExerciseButton);
  $('.sleep-button').click(clickedSleepButton);

  // DevTools assignment button events
  $('.log-demo-button').click(runMessageLoggingDemo);
  $('.error-404-button').click(cause404NetworkError);
  $('.type-error-button').click(causeTypeError);
  $('.violation-button').click(causeViolation);
  $('.bug-button').click(reproduceBug);
  $('.fix-button').click(applyFix);
  $('.debug-button').click(pauseWithBreakpoint);
});

var pet_info = {
  name: "Barry B. Benson",
  weight: 10,
  happiness: 8
};

var bugFixed = false;

function clickedTreatButton() {
  console.group("Honey Treat Button");
  console.log("Before treat:", pet_info);

  pet_info.happiness += 2;
  pet_info.weight += 1;

  console.info("Barry received a honey treat.");
  console.log("After treat:", pet_info);
  console.groupEnd();

  $('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> This honey treat is bee-yond amazing. 🍯");

  checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
  console.group("Fly Around Button");
  console.log("Before playing:", pet_info);

  pet_info.happiness += 2;
  pet_info.weight -= 1;

  console.info("Barry flew around and got happier.");
  console.log("After playing:", pet_info);
  console.groupEnd();

  $('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> Buzz buzz! Flying around is fun. 🐝");

  checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
  console.group("Work Out Button");
  console.log("Before workout:", pet_info);

  pet_info.happiness -= 1;
  pet_info.weight -= 2;

  console.warn("Workout lowers happiness but reduces weight.");
  console.log("After workout:", pet_info);
  console.groupEnd();

  $('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> Hive workouts are tough. 💪");

  checkAndUpdatePetInfoInHtml();
}

function clickedSleepButton() {
  console.group("Rest Wings Button");
  console.log("Before rest:", pet_info);

  pet_info.happiness += 1;
  pet_info.weight -= 1;

  console.info("Barry rested his wings.");
  console.log("After rest:", pet_info);
  console.groupEnd();

  $('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> My wings needed that rest. 😴");

  checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
  console.table([pet_info]);

  checkWeightAndHappinessBeforeUpdating();
  updatePetInfoInHtml();
  updateButtonStates();
}

function checkWeightAndHappinessBeforeUpdating() {
  if (pet_info.weight < 0) {
    console.warn("Weight went below 0. Resetting weight to 0.");
    pet_info.weight = 0;
  }

  if (pet_info.happiness < 0) {
    console.warn("Happiness went below 0. Resetting happiness to 0.");
    pet_info.happiness = 0;
  }
}

function updatePetInfoInHtml() {
  $('.name').text(pet_info.name);
  $('.weight').text(pet_info.weight);
  $('.happiness').text(pet_info.happiness);
}

function updateButtonStates() {
  $('.exercise-button').prop('disabled', pet_info.weight === 0);
  $('.play-button').prop('disabled', pet_info.weight === 0);

  $('.treat-button').prop('disabled', false);
  $('.sleep-button').prop('disabled', false);
}

/* Chrome DevTools Assignment Examples */

function runMessageLoggingDemo() {
  console.log("Log Message: Barry game message logging demo started.");
  console.info("Info Message: Barry currently has " + pet_info.happiness + " happiness.");
  console.warn("Warning Message: Too much flying may reduce Barry's weight.");
  console.error("Error Message: This is a sample error message for DevTools.");

  console.table([
    { action: "Honey Treat", weightChange: "+1", happinessChange: "+2" },
    { action: "Fly Around", weightChange: "-1", happinessChange: "+2" },
    { action: "Work Out", weightChange: "-2", happinessChange: "-1" },
    { action: "Rest Wings", weightChange: "-1", happinessChange: "+1" }
  ]);

  console.group("Grouped Barry Status");
  console.log("Name:", pet_info.name);
  console.log("Weight:", pet_info.weight);
  console.log("Happiness:", pet_info.happiness);
  console.groupEnd();

  console.log("%cCustom Log: Barry is ready for debugging!", "color: purple; font-size: 16px; font-weight: bold;");

  $('.pet-comment').html("<strong>DevTools:</strong> Message logging demo ran. Check the Console tab.");
}

function cause404NetworkError() {
  console.warn("Starting 404 network error test.");

  fetch("missing-barry-file.json")
    .then(function(response) {
      if (!response.ok) {
        throw new Error("404 Network Error: missing-barry-file.json was not found.");
      }
      return response.json();
    })
    .catch(function(error) {
      console.error(error);
    });

  $('.pet-comment').html("<strong>DevTools:</strong> 404 network error triggered. Check Console and Network tabs.");
}

function causeTypeError() {
  console.warn("Starting TypeError test.");

  var brokenObject = null;

  console.log(brokenObject.name);

  $('.pet-comment').html("<strong>DevTools:</strong> TypeError triggered.");
}

function causeViolation() {
  console.warn("Starting violation/performance warning test.");

  var startTime = Date.now();

  while (Date.now() - startTime < 150) {
    // Intentional long task to create a browser violation warning.
  }

  console.log("Violation demo finished after blocking the main thread.");

  $('.pet-comment').html("<strong>DevTools:</strong> Violation test completed. Check Console warnings.");
}

function reproduceBug() {
  console.group("Bug Reproduction");

  var honeyAmount = "5";
  var currentWeight = pet_info.weight;

  var brokenTotal = currentWeight + honeyAmount;

  console.log("Current weight:", currentWeight);
  console.log("Honey amount:", honeyAmount);
  console.error("Bug reproduced: weight became a string calculation:", brokenTotal);

  $('.pet-comment').html("<strong>Bug:</strong> Barry's weight calculation is wrong: " + brokenTotal);

  console.groupEnd();
}

function applyFix() {
  console.group("Bug Fix");

  var honeyAmount = "5";
  var currentWeight = pet_info.weight;

  var fixedTotal = currentWeight + Number(honeyAmount);

  pet_info.weight = fixedTotal;

  console.log("Fixed total weight:", fixedTotal);
  console.info("Fix applied: converted honeyAmount from string to number.");

  checkAndUpdatePetInfoInHtml();

  $('.pet-comment').html("<strong>Fix:</strong> Barry's weight calculation was fixed using Number().");

  console.groupEnd();
}

function pauseWithBreakpoint() {
  var startingWeight = pet_info.weight;
  var startingHappiness = pet_info.happiness;

  debugger;

  var debugScore = startingWeight + startingHappiness;

  console.log("Debug score:", debugScore);
  console.log("Use Scope, Watch Expressions, and Console to inspect variables.");

  $('.pet-comment').html("<strong>DevTools:</strong> Code paused with debugger. Check Sources tab.");
}