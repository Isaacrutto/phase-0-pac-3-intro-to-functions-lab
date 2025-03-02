// Function that returns input string in uppercase
function shout(string) {
    return string.toUpperCase();
  }
  
  // Function that returns input string in lowercase
  function whisper(string) {
    return string.toLowerCase();
  }
  
  // Function that logs input string in uppercase
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  
  // Function that logs input string in lowercase
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  
  // Function that returns different responses based on input string
  function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }
  
  // Export the functions for testing in Node.js
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { shout, whisper, logShout, logWhisper, sayHiToHeadphonedRoommate };
  }
  