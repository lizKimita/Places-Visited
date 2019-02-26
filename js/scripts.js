//Business Logic
function Destination (location,landmarks,timeofyear,notes,souvenir) {
    this.location = location;
    this.landMarks = landmarks;
    this.timeOfYear = timeofyear;
    this.notes = notes;
    this.souvenir = souvenir;
}

Destination.prototype.fullListing = function () {
  return this.location + ", "+ this.landMarks + ", " + this.timeOfYear + ", "+ this.notes + ", " + this.souvenir;
}

//USER INTERFACE LOGIC
$(document).ready(function(){
  $("form#visited").submit(function(event){
    event.preventDefault();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandMarks = $("input#new-landMarks").val();
    var inputtedTimeOfYear = $("input#new-timeOfYear").val();
    var inputtedNotes = $("input#new-notes").val();
    var inputtedSouvenir = $("input#new-souvenir").val();

    var newDestination = new Destination (inputtedLocation, inputtedLandMarks, inputtedTimeOfYear, inputtedNotes, inputtedSouvenir);

    $("ul#tours").append("<li><span class ='travels'>" + newDestination.fullListing() + "</span><li>");

    $(".travels").last().click(function(){
      $("#details").show();
      $("#details h2").text(newDestination.location);
      $(".location").text(newDestination.location);
      $(".landMarks").text(newDestination.landMarks);
      $(".timeofyear").text(newDestination.timeOfYear);
      $(".notes").text(newDestination.notes);
      $(".souvenir").text(newDestination.souvenir);
    });

    $("input#new-location").val("");
    $("input#new-landMarks").val("");
    $("input#new-timeOfYear").val("");
    $("input#new-notes").val("");
    $("input#new-souvenir").val("");
  });
});
