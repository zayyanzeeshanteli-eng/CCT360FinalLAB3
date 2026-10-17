let imageOne = document.getElementById("image-one");
let imageTwo = document.getElementById("image-two");
let imageThree = document.getElementById("image-three");

let captionOne = document.getElementById("caption-one");
let captionTwo = document.getElementById("caption-two");
let captionThree = document.getElementById("caption-three");

let storyTitle = document.getElementById("story-title");

let storyOneButton = document.getElementById("story-one");
let storyTwoButton = document.getElementById("story-two");


function showStoryOne() {

    storyTitle.innerHTML = "Story 1: The Storm Arrives";

    imageOne.src = "images/storm.png";
    imageTwo.src = "images/walking-umbrella.png";
    imageThree.src = "images/umbrellas.png";

    captionOne.innerHTML = "Dark clouds gather over the water.";
    captionTwo.innerHTML = "A person walks through the rain with an umbrella.";
    captionThree.innerHTML = "People protect themselves as the rain continues.";
}


function showStoryTwo() {

    storyTitle.innerHTML = "Story 2: Caught in the Rain";

    imageOne.src = "images/umbrellas.png";
    imageTwo.src = "images/walking-umbrella.png";
    imageThree.src = "images/storm.png";

    captionOne.innerHTML = "People are already sheltering from the rain.";
    captionTwo.innerHTML = "One person continues walking alone.";
    captionThree.innerHTML = "The dark storm grows stronger ahead.";
}


storyOneButton.addEventListener("click", showStoryOne);

storyTwoButton.addEventListener("click", showStoryTwo);
