// Function to generate bios based on user input
function generateBio() {
    // Collect user inputs
    const app = document.getElementById("app").value;
    const gender = document.querySelector('input[name="gender"]:checked')?.value || "a mystery person";
    const interested = document.querySelector('input[name="gender_interest"]:checked')?.value || "someone special";
    const tone = document.getElementById("tone").value;
    const activities = Array.from(document.querySelectorAll('input[name="activities"]:checked'))
      .map(input => input.value)
      .join(", ") || "exploring new things";
    const partnerTraits = document.getElementById("partner-traits").value || "kind and fun";
    const skill = document.getElementById("skill").value || "a secret talent";
    const bucketList = document.getElementById("bucket-list").value || "an unforgettable adventure";
    const talkingAbout = document.getElementById("talking-about").value || "deep and interesting topics";
  
    // Bio templates for different tones
    const bioTemplates = {
      flirty: [
        `Swipe right if you're ready for ${activities}! Looking for someone ${partnerTraits} who can handle my ${skill}. 😉`,
        `I may not be a photographer, but I can definitely picture us together! Let's talk about ${talkingAbout}.`,
        `Are you ${interested}? Because my heart just swiped right. Let's do ${activities} together! ❤️`
      ],
      funny: [
        `If my life was a sitcom, it’d be about ${activities}. I can ${skill}—cool, right? 😂`,
        `I’m ${gender} looking for ${interested}. No pressure, but my dog/cat must approve of you. 🐾`,
        `My love language? Sending memes and making bad puns. Let’s discuss ${talkingAbout}. 😆`
      ],
      fiesty: [
        `I like my coffee strong and my matches stronger. If you're ${interested}, we might just set the world on fire. 🔥`,
        `Warning: I’m a handful! Can you keep up with ${activities}? If so, swipe right!`,
        `I’m not looking for someone perfect, just someone who can handle my ${skill} without running away. 😏`
      ],
      romantic: [
        `Dreaming of long walks and deep talks about ${talkingAbout}. Maybe we can cross off "${bucketList}" together? 💕`,
        `If love is a journey, let’s explore it together. Into ${activities}? Let’s connect. ❤️`,
        `Looking for someone to join to share sunsets, music, and laughter. Are you in? 🌅`
      ],
      chill: [
        `Here for good vibes, ${activities}, and deep convos about ${talkingAbout}. Let’s match! 🌿`,
        `Let’s keep it simple: good convos, good energy, and maybe some ${activities} together. ✨`,
        `Not into drama, just good vibes and meaningful talks. Up for ${bucketList}? Let's do it!`
      ]
    };
  
    // Select 3 random bios from the chosen tone category
    const selectedBios = bioTemplates[tone]
      .sort(() => Math.random() - 0.5) // Shuffle array
      .slice(0, 3); // Pick 3 bios
  
    // Display bios in results section
    const bioResultsDiv = document.getElementById("bioResults");
    bioResultsDiv.innerHTML = ""; // Clear previous results
  
    selectedBios.forEach(bio => {
      let bioBox = document.createElement("div");
      bioBox.className = "bio-box";
      bioBox.innerText = bio;
      bioResultsDiv.appendChild(bioBox);
    });
  
    // Hide form and show results
    document.getElementById("bioForm").style.display = "none";
    document.getElementById("results-section").style.display = "block";
  }
  
  // Function to go back to the form
  function goBack() {
    document.getElementById("results-section").style.display = "none";
    document.getElementById("bioForm").style.display = "block";
  }
  