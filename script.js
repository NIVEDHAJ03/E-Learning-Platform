function increaseProgress() {
  const fill = document.getElementById("progressFill");
  let current = parseInt(fill.style.width);
  if (current < 100) {
    fill.style.width = current + 10 + "%";
  } else {
    alert("🎉 Course Completed!");
  }
}
function sendMessage(event) {
  event.preventDefault();
  alert("✅ Message sent successfully!");
  event.target.reset();
  return false;
}


function openVideo() {
  const modal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  
  // Set the video source
  videoFrame.src = "https://www.youtube.com/embed/kUMe1FH4CHE?autoplay=1";
  
  // Show modal
  modal.style.display = "block";
  
  // Close modal when clicking outside
  window.onclick = function(event) {
    if (event.target === modal) {
      closeVideo();
    }
  }
  
  // Close with Escape key
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closeVideo();
    }
  });
}

function closeVideo() {
  const modal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  
  modal.style.display = "none";
  videoFrame.src = ""; // Stop video
}