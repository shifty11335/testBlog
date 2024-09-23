function mobilnavbar() {
    console.log("message")
    var x = document.getElementById("navbarResponsive");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}