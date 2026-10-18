let pageBody = document.getElementById("page-body");

let imageOne = document.getElementById("image-one");
let imageTwo = document.getElementById("image-two");
let imageThree = document.getElementById("image-three");

let captionOne = document.getElementById("caption-one");
let captionTwo = document.getElementById("caption-two");
let captionThree = document.getElementById("caption-three");

let storyHeading = document.getElementById("story-heading");
let storyTitle = document.getElementById("story-title");
let storySummary = document.getElementById("story-summary");

let storyOneButton = document.getElementById("story-one");
let storyTwoButton = document.getElementById("story-two");

function showStoryOne() {
    storyTitle.innerHTML = "Story 1: The Storm Arrives";
    storySummary.innerHTML = "The storm develops and people respond to the changing weather.";

    imageOne.src = "images/storm.png";
    imageTwo.src = "images/walking-umbrella.png";
    imageThree.src = "images/umbrellas.png";

    captionOne.innerHTML = "Dark clouds gather over the water.";
    captionTwo.innerHTML = "A person walks through the rain with an umbrella.";
    captionThree.innerHTML = "People protect themselves as the rain continues.";

    pageBody.style.backgroundColor = "#e8f1f5";
    storyHeading.style.backgroundColor = "#cfe5ee";
    storyHeading.style.borderColor = "#4f8094";
    storyTitle.style.color = "#163f50";

    storyOneButton.style.backgroundColor = "#315f70";
    storyOneButton.style.color = "white";
    storyTwoButton.style.backgroundColor = "white";
    storyTwoButton.style.color = "#315f70";
}

function showStoryTwo() {
    storyTitle.innerHTML = "Story 2: Caught in the Rain";
    storySummary.innerHTML = "The same images now tell a more uncertain story as the storm grows stronger.";

    imageOne.src = "images/umbrellas.png";
    imageTwo.src = "images/walking-umbrella.png";
    imageThree.src = "images/storm.png";

    captionOne.innerHTML = "People are already sheltering from the rain.";
    captionTwo.innerHTML = "One person continues walking alone.";
    captionThree.innerHTML = "The dark storm grows stronger ahead.";

    pageBody.style.backgroundColor = "#f4ecf7";
    storyHeading.style.backgroundColor = "#ead7e8";
    storyHeading.style.borderColor = "#9b658a";
    storyTitle.style.color = "#6f365e";

    storyTwoButton.style.backgroundColor = "#7a496b";
    storyTwoButton.style.color = "white";
    storyOneButton.style.backgroundColor = "white";
    storyOneButton.style.color = "#7a496b";
}

storyOneButton.addEventListener("click", showStoryOne);
storyTwoButton.addEventListener("click", showStoryTwo);
