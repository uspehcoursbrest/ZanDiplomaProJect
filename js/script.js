window.onload = function () {
    function DataTime() {
        var date = new Date(),
            day = date.getDate(),
            dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            weekDay = date.getDay(),
            month = date.getMonth(),
            monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();

        if (day < 10) day = "0" + day;
        if (hour < 10) hour = "0" + hour;
        if (min < 10) min = "0" + min;

        document.getElementById("date").innerHTML = dayNames[weekDay] + " ," + day + " " + monthArr[month] + " " + year;
        document.getElementById("time").innerHTML = hour + ":" + min;

    }

    var timer;

    function DataTimeStart() {
        timer = setInterval(DataTime, 60000);
        DataTime();


    }

    DataTimeStart();
}
$(document).ready(function () {

    var btnUp = $(".up");
    btnUp.hide();
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1000) {
            btnUp.fadeIn();
        } else {
            btnUp.fadeOut();

        }

    })
    btnUp.click(function () {
        $("body,html").animate({
            scrollTop: 0
        }, 1000);
        return false;
    })
})

