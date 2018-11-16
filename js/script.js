window.onload = function () {
    function DataTime() {
        var date = new Date(),
            day = date.getDay(),
            dayNames = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday","Sunday"],
            month = date.getMonth(),
            monthArr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            year = date.getFullYear(),
            hour = date.getHours(),
            min = date.getMinutes();

        if(day < 10) day = "0" + day;
        if(hour < 10) hour = "0" + hour;
        if(min < 10) min = "0" + min;

        document.getElementById("date") .innerHTML = dayNames + " ," + month + monthArr[month] + " " + year;
        document.getElementById("time") .innerHTML = hour + ":" + min;

    }
    var timer;
    function DataTimeStart() {
        timer = setInterval(DataTime, 60000);
        DataTime();


    }
    DataTimeStart();
}
