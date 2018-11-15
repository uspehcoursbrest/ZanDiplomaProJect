window.onload = function () {
    function DataTime() {
        var date = new Date(),
            day = date.getDate(),
            month = date.getMonth(),
            monthArr = ["Янв", "Фев", "Мар", "Апр", "Май", "Июн", "Июл", "Авг", "Сен", "Окт", "Ноя", "Дек"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();

        if(day < 10) day = "0" + day;
        if(hour < 10) hour = "0" + day;
        if(min < 10) min = "0" + min;

        document.getElementById("data") .innerHTML = day + " " + monthArr[month] + " " + year;
        document.getElementById("time") .innerHTML = hour + ":" + min;

    }
    var timer;
    function clockStart() {
        timer = setInterval(DataTime, 60000);
        DataTime();


    }
    clockStart();
}