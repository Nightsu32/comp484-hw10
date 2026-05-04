$(function() {
// Initialize page
checkAndUpdatePetInfoInHtml();

// Button events
$('.treat-button').click(clickedTreatButton);
$('.play-button').click(clickedPlayButton);
$('.exercise-button').click(clickedExerciseButton);
$('.sleep-button').click(clickedSleepButton);
});

var pet_info = {
name: "Barry B. Benson",
weight: 10,
happiness: 8
};

function clickedTreatButton() {
pet_info.happiness += 2;
pet_info.weight += 1;

$('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> This honey treat is bee-yond amazing. 🍯");

checkAndUpdatePetInfoInHtml();
}

function clickedPlayButton() {
pet_info.happiness += 2;
pet_info.weight -= 1;

$('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> Buzz buzz! Flying around is fun. 🐝");

checkAndUpdatePetInfoInHtml();
}

function clickedExerciseButton() {
pet_info.happiness -= 1;
pet_info.weight -= 2;

$('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> Hive workouts are tough. 💪");

checkAndUpdatePetInfoInHtml();
}

function clickedSleepButton() {
pet_info.happiness += 1;
pet_info.weight -= 1;

$('.pet-comment').html("<strong>" + pet_info.name + " says:</strong> My wings needed that rest. 😴");

checkAndUpdatePetInfoInHtml();
}

function checkAndUpdatePetInfoInHtml() {
checkWeightAndHappinessBeforeUpdating();
updatePetInfoInHtml();
updateButtonStates();
}

function checkWeightAndHappinessBeforeUpdating() {
if (pet_info.weight < 0) {
pet_info.weight = 0;
}

if (pet_info.happiness < 0) {
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
