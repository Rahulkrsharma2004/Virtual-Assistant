let button = document.getElementById("talkButton");
let gif = document.getElementById("voiceGif");
let content = document.getElementById("content");

function speak(text) {
  let speech = new SpeechSynthesisUtterance(text);
  speech.volume = 1;
  speech.rate = 1;
  speech.pitch = 1;
  window.speechSynthesis.speak(speech);
}

function wishMe() {
  let today = new Date();
  let hours = today.getHours();
  if (hours >= 0 && hours < 12) {
    speak("Good morning!");
  } else if (hours >= 12 && hours < 18) {
    speak("Good afternoon!");
  } else {
    speak("Good evening!");
  }
}

window.addEventListener("load", () => {
  wishMe();
});

let speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;
let recognition = new speechRecognition();

recognition.onresult = (event) => {
  let currentIndex = event.resultIndex;
  let transcript = event.results[currentIndex][0].transcript.trim();
  content.textContent = transcript;
  // recognition.stop();
  // content.textContent = '';
  takeCommand(transcript.toLowerCase());
};

button.addEventListener("click", () => {
  recognition.start();
  button.style.display = "none";
  gif.style.display = "block";
  setTimeout(() => {
    gif.style.opacity = 1;
  }, 10);
});

function takeCommand(message) {
  button.style.display = "flex";
  gif.style.display = "none";
  if (
    message.includes("hello") ||
    message.includes("hi") ||
    message.includes("hey")
  ) {
    speak("Hello, I am a virtual assistant. How can I help you today?");
  } else if (
    message.includes("what is your name") ||
    message.includes("who are you")
  ) {
    speak("I am a virtual assistant made by RAHUL , I am here to help you.");
  } else if (message.includes("what time is it")) {
    let today = new Date();
    let hours = today.getHours();
    let minutes = today.getMinutes();
    speak(`The current time is ${hours}:${minutes}`);
  } else if (message.includes("how are you")) {
    speak("I am doing great! How about you?");
  } else if (message.includes("what is the weather like")) {
    speak(
      "I can't provide real-time weather updates. However, I can tell you that the weather is currently sunny and mild."
    );
  } else if (message.includes("open google")) {
    speak("Opening Google");
    window.open("https://www.google.com/");
  } else if (message.includes("open stack overflow")) {
    speak("Opening Stack Overflow");
    window.open("https://stackoverflow.com/");
  } else if (message.includes("open youtube")) {
    speak("Opening YouTube");
    window.open("https://www.youtube.com/", "_blank");
  } else if (message.includes("what is your favorite color")) {
    speak("I like blue, what about you?");
  } else if (message.includes("tell me a joke")) {
    speak("Why don’t scientists trust atoms? Because they make up everything!");
  } else if (
    message.includes("who is your creator") ||
    message.includes("who made you")
  ) {
    speak("I was created by a team of skilled developers.");
  } else if (message.includes("what is the meaning of life")) {
    speak(
      "The meaning of life is a complex question, but many say it is to find happiness and fulfillment."
    );
  } else if (message.includes("tell me a fun fact")) {
    speak(
      "Did you know that honey never spoils? Archaeologists have found pots of honey in ancient Egyptian tombs that are over 3,000 years old and still perfectly edible."
    );
  } else if (message.includes("what is your favorite food")) {
    speak("I don’t eat, but I imagine pizza would be delicious.");
  } else if (message.includes("who is the president of the united states")) {
    speak("As of my last update, the president is Joe Biden.");
  } else if (message.includes("where are you from")) {
    speak("I exist in the digital world, created by developers.");
  } else if (message.includes("what is artificial intelligence")) {
    speak(
      "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems."
    );
  } else if (message.includes("how old are you")) {
    speak("I don’t have an age, but I am constantly evolving.");
  } else {
    speak("Sorry, I didn’t understand that command.");
  }
}
