document.getElementById("ToggleBtn").addEventListener("click", function(){
    var textToToggle = document.getElementById("ToggleTxt");
    if (textToToggle.style.display === "none") {
      textToToggle.style.display = "block";
    } else {
      textToToggle.style.display = "none";
    }
  });
  