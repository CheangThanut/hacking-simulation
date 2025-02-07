document.addEventListener("DOMContentLoaded", function() {
  let messages = [
    "System Breach Detected...",
    "Initiating bypass protocols...",
    "Accessing external server...",
    "Remote access granted!",
    "WARNING: Unauthorized access detected!"
  ];

  let outputDiv = document.querySelector('.output');
  let index = 0;
  
  function simulateHack() {
    if (index < messages.length) {
      let p = document.createElement('p');
      p.textContent = messages[index];
      outputDiv.appendChild(p);
      index++;
      setTimeout(simulateHack, 2000);  // Wait 2 seconds between messages
    }
  }

  simulateHack();  // Start the animation when the page loads
});
