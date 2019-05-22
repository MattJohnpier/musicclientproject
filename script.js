// JavaScript File
/* global $ */
$(document).ready(function() {

$("button").click(function(){

var searchTerm = $("input").val();
$.ajax({
      url:"https://api.soundcloud.com/tracks?q="+searchTerm+"&client_id=5aa8e389ba4e24b6106af5159ab3e344",
      method: "GET" ,
      success: function(response) {
          $("#searchresults").html("<h1>" +response[0].title+ "</h1>")
          $("#searchresults").append("<h1>" +response[1].title+ "</h1>")
          $("#searchresults").append("<h1>" +response[2].title+ "</h1>")
      }
  })

});


});