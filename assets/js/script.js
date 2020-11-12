

var NowMoment = moment();
var eDisplayMoment = document.getElementById('currentDay');
eDisplayMoment.innerHTML = NowMoment.format('dddd, MMMM Do, YYYY');


var m = moment();
var currentTime = moment().hour();
var taskTime = $("taskInput")

var dueTimeStyle = function() {
    if(article.dataset.time === currentTime) {
        $("#taskInput").addClass("present")
    } else if(article.dataset.time < currentTime) {
        $("#taskInput").addClass("past")
    } else if(article.data.time > currentTime) {
        $("#taskInput").addClass("future")
    }
}
