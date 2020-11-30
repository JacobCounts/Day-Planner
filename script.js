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



// Date for the header
function getDate() {
  var headerDate = moment().format("dddd, MMMM DD");
  $("#currentDay").text(headerDate);
}

getDate();
// var toDos = JSON.parse(localStorage.getItem("toDos")) || [" ", " ", " ", " "," ", " ", " ", " ",]
// planner body
myDay.forEach(function (thisHour, i) {
  //  timeblocks row
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

  // sets css styling to current time
  var plannerData = $("<textarea>");
  hourPlan.append(plannerData);
  plannerData.attr("id", thisHour.id);
  var rowText = JSON.parse(localStorage.getItem(`row${thisHour.id}`)) || " ";
  plannerData.val(rowText);
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
  // creates save button / saves data to local storage 
  function createButton() {
    var saveButton = $("<i class='far fa-save fa-lg'></i>");
    var savePlanner = $("<button>").attr({ class: "col-md-1 saveBtn" });
    savePlanner.append(saveButton);
    hourRow.append(hourField, hourPlan, savePlanner);
    $(".saveBtn").on("click", function (e) {
      e.preventDefault();
      setLocalStorage(thisHour.id)
    });
    
  }
  createButton()
})
function setLocalStorage (id) {
  var item = $(`#${id}`).val()
  localStorage.setItem(`row${id}`, JSON.stringify(item))
}














    // function setLocalStorage(toDos) {
    //   var toDo = JSON.parse(localStorage.getItem("toDos")) || []
    //   // toDo.push(toDos);
    //   // var items = [...new Set(toDo)]
    //   for (let i = 0; i < toDo.length; i++) {
    //     // const element = toDo[i];
    //     var item = $(`#${i}`).val()
    //     console.log(item);
    //     toDo [i] = item
    //   }
      
    //   localStorage.setItem("toDos", JSON.stringify(toDo));
    // }
    
    







       


