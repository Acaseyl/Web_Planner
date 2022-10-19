var hour9 = $("#hour9");
var hour10 = $("#hour10");
var hour11 = $("#hour11");
var hour12 = $("#hour12");
var hour1 = $("#hour1");
var hour2 = $("#hour2");
var hour3 = $("#hour3");
var hour4 = $("#hour4");
var hour5 = $("#hour5");

var hourVal9 = localStorage.getItem("hour9");
var hourVal10 = localStorage.getItem("hour10");
var hourVal11 = localStorage.getItem("hour11");
var hourVal12 = localStorage.getItem("hour12");
var hourVal1 = localStorage.getItem("hour1");
var hourVal2 = localStorage.getItem("hour2");
var hourVal3 = localStorage.getItem("hour3");
var hourVal4 = localStorage.getItem("hour4");
var hourVal5 = localStorage.getItem("hour5");

hour9.val(hourVal9);
hour10.val(hourVal10);
hour11.val(hourVal11);
hour12.val(hourVal12);
hour1.val(hourVal1);
hour2.val(hourVal2);
hour3.val(hourVal3);
hour4.val(hourVal4);
hour5.val(hourVal5);

var date = moment().format("dddd, MMMM Do, YYYY");
$("#date").text(date);

setInterval(() => {
    document.getElementById("clock").innerHTML = `
  ${moment().format("LTS")}
  `;
  }, 1000);

function time() {
    var thisHour = moment().hours();
    $(".block").each(function () {
        var hour = parseInt($(this).attr("id"));
        if (hour < thisHour) {
            $(this).addClass("past");
        }
        else if (hour === thisHour) {
            $(this).removeClass("past");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });

};

time();

$(".saveBtn").on("click", function (event) {
    event.preventDefault();
    var textarea = $(this).prev();
    var id = textarea.attr("id");
    var value = textarea.val();
    localStorage.setItem(id, value);
});