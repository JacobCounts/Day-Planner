var myDay = [
  {
    id: "0",
    hour: "9:00",
    time: "09",
    meridiem: "AM",
    toDos: " ",
  },
  {
    id: "1",
    hour: "10:00",
    time: "10",
    meridiem: "AM",
    toDos: " ",
  },
  {
    id: "2",
    hour: "11:00",
    time: "11",
    meridiem: "AM",
    toDos: " ",
  },
  {
    id: "3",
    hour: "12:00",
    time: "12",
    meridiem: "PM",
    toDos: " ",
  },
  {
    id: "4",
    hour: "1:00",
    time: "13",
    meridiem: "PM",
    toDos: " ",
  },
  {
    id: "5",
    hour: "2:00",
    time: "14",
    meridiem: "PM",
    toDos: " ",
  },
  {
    id: "6",
    hour: "3:00",
    time: "15",
    meridiem: "PM",
    toDos: " ",
  },
  {
    id: "7",
    hour: "4:00",
    time: "16",
    meridiem: "PM",
    toDos: " ",
  },
  {
    id: "8",
    hour: "5:00",
    time: "17",
    meridiem: "PM",
    toDos: " ",
  },

  {
    id: "9",
    hour: "6:00",
    time: "18",
    meridiem: "PM",
    toDos: " ",
  },

  {
    id: "10",
    hour: "7:00",
    time: "19",
    meridiem: "PM",
    toDos: " ",
  },
];

var toDos = [" "];

// Date for the header
function getDate() {
  var headerDate = moment().format("dddd, MMMM DD");
  $("#currentDay").text(headerDate);
}

//saves data to localStorage
function toDos() {
  localStorage.setItem("myDay", JSON.stringify(myDay));
}

//sets data in localStorage
function displaytoDos() {
  myDay.forEach(function (thisHour) {
    $(`${thisHour.id}`).val(thisHour.toDos);
  });
}

//sets existing localStorage
function init() {
  var storedDay = JSON.parse(localStorage.getItem("myDay"));

  if (storedDay) {
    myDay = storedDay;
  }

}

getDate();

// creates the planner body
myDay.forEach(function (thisHour) {
  // creates timeblocks row
  var hourRow = $("<form>").attr({
    class: "row",
  });
  $(".container").append(hourRow);

  // creates time field
  var hourField = $("<div>").text(`${thisHour.hour}${thisHour.meridiem}`).attr({
    class: "col-md-2 hour",
  });

  // creates schdeduler data
  var hourPlan = $("<div>").attr({
    class: "col-md-9 p-0",
  });

  // sets css styling compared to current time
  var plannerData = $("<textarea>");
  hourPlan.append(plannerData);
  plannerData.attr("id", thisHour.id);
  if (thisHour.time < moment().format("HH")) {
    plannerData.attr({
      class: "past",
    });
  } else if (thisHour.time === moment().format("HH")) {
    plannerData.attr({
      class: "present",
    });
  } else if (thisHour.time > moment().format("HH")) {
    plannerData.attr({
      class: "future",
    });
  }

  // creates a save button
  var saveButton = $("<i class='far fa-save fa-lg'></i>");
  var savePlanner = $("<button>").attr({ class: "col-md-1 saveBtn" });
  savePlanner.append(saveButton);
  hourRow.append(hourField, hourPlan, savePlanner);
});

//save data to local storage
$(".saveBtn").on("click", function (e) {
  e.preventDefault();
  var saveIndex = $(this)
    .siblings(".description")
    .children(".future")
    .attr("id");
  myDay[saveIndex].toDos = $(this)
    .siblings(".description")
    .children(".future")
    .val();
});
init();
displaytoDos();
