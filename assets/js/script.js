$(document).ready(function() {

    var currentDate = moment().format("dddd, MMMM Do, YYYY, LT");
        $("#currentDay").text(currentDate);

    var time = [
        {stringTime: "7:00AM", numTime: 0700},
        {stringTime: "8:00AM", numTime: 0800},
        {stringTime: "9:00AM", numTime: 0900},
        {stringTime: "10:00AM", numTime: 1000},
        {stringTime: "11:00AM", numTime: 1100},
        {stringTime: "12:00PM", numTime: 1200},
        {stringTime: "1:00PM", numTime: 1300},
        {stringTime: "2:00PM", numTime: 1400},
        {stringTime: "3:00PM", numTime: 1500},
        {stringTime: "4:00PM", numTime: 1600},
        {stringTime: "5:00PM", numTime: 1700},
        {stringTime: "6:00PM", numTime: 1800}
    ];

    time.map((hour) => {

        var timeRow = $("<div>");
        timeRow.attr("class", "row");

        var timeSpan = $("<span>");
        timeSpan.attr("class", "col-1 hour");
        timeSpan.text(hour.stringTime);
        timeRow.append(timeSpan);

        var eventDescription = $("<textarea>");
        for(i = 0; i< 7; i++) {
            var eventDescription = $("<textarea>");
            eventDescription.attr("class", "col description border");
        }
        
        var saveBtn = $("<button>");
        saveBtn.attr("class", "saveBtn oi oi-plus");

        saveBtn.on("click", function () {
            var event = eventDescription.val();
            localStorage.setItem(hour.stringTime, event);
        });

        var savedValue = localStorage.getItem(hour.stringTime);
        console.log(savedValue)
            if (savedValue) {
            eventDescription.val(savedValue);
        }
        
        var setTime = parseInt(moment().format("HH") + "00");
        var setHour = parseInt(hour.numTime);

        if (setTime === setHour) {
            eventDescription.addClass("present");
        } else if (setHour <= setTime) {
            eventDescription.addClass("past");
        } else {
            eventDescription.addClass("future");
        }

    $(".time-block").append(timeRow);
        timeRow.append(eventDescription);
        timeRow.append(saveBtn);
    });
});
