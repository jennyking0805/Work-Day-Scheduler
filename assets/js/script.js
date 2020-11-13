$(document).ready(function () {
    var todaysDate = moment().format("dddd, MMMM Do, YYYY");
    $("#currentDay").text(todaysDate);

    var time = [
        { stringTime: "7:00AM", numTime: 0700},
        { stringTime: "8:00AM", numTime: 0700},
        { stringTime: "9:00AM", numTime: 0700},
        { stringTime: "10:00AM", numTime: 0700},
        { stringTime: "11:00AM", numTime: 0700},
        { stringTime: "12:00PM", numTime: 0700},
        { stringTime: "1:00PM", numTime: 0700},
        { stringTime: "2:00PM", numTime: 0700},
        { stringTime: "3:00PM", numTime: 0700},
        { stringTime: "4:00PM", numTime: 0700},
        { stringTime: "5:00PM", numTime: 0700},
        { stringTime: "6:00PM", numTime: 0700}
    ];

    time.map((hour) => {

        var timeRow =$("<div>");
        timeRow.attribute("class", "row");

        var timeSpan =$("<span>");
        timeSpan.attribute("class", "col-2");
        timeSpan.text(hour.stringTime);
        timeRow.append(timeSpan);

        var timeDesription = $("<textarea>");
        for(i = 0, i< 7; i++) {
            var timeDesription = $("<textarea>");
            timeDesription.attribute("class", "col description border");
        } 
    })
});
