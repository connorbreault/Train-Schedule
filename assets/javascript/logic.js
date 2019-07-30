//initialize firebase
//search button saves data to firebase
//retrieve data from firebase to update train schedule
//use moment to get next departure

$(document).ready(function () {

    //initialize firebase
    //var config = {
    //    aapiKey: "AIzaSyCFn_oHxP7oa644rlNjraWhk6ywl96staU",
    //    authDomain: "train-scheduler-8e77c.firebaseapp.com",
    //    databaseURL: "https://train-scheduler-8e77c.firebaseio.com",
    //    projectId: "train-scheduler-8e77c",
    //    storageBucket: "",
    //    messagingSenderId: "1046327108985",
    //    appId: "1:1046327108985:web:23bf75612e809dc5"
    //};
    //firebase.initializeApp(config);
    //var database = firebase.database()


    //search button click
    $("#newTrainButton").on("click", function (event) {
        event.preventDefault()
        var newName = $("#newTrainName").val()
        var newDestination = $("#newTrainDestination").val()
        var newFirst = $("#newTrainFirst").val()
        var newFrequency = $("#newTrainFrequency").val()
        var newNext = $("#newTrainNext").val()
        //var newTrain = {
        //    Name: newName,
        //    Destination: newDestination,
        //    First: newFirst,
        //    Frequency: newFrequency,
        //    Next: newNext,
        //}
        //database.ref().push(newTrain)
        console.log("name: " + newName)
        console.log("destination: " + newDestination)
        console.log("first: " + newFirst)
        console.log("frequency: " + newFrequency)
        console.log("next: " + newNext)

        //Clear search boxes
        $("#newTrainName").val("")
        $("#newTrainDestination").val("")
        $("#newTrainFirst").val("")
        $("#newTrainFrequency").val("")
        $("#newTrainNext").val("")

        var nextDeparturePretty;

        var newRow = $("<tr>").append(
            $("<td>").text(newName),
            $("<td>").text(newDestination),
            $("<td>").text(newFirst),
            $("<td>").text(newFrequency),
            $("<td>").text(newNext),
        );
        $("#trainTableBody").append(newRow)
    })
})