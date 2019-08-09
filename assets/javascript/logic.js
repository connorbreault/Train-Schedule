$(document).ready(function () {

    //append date in head
    var today = moment().format('MM/DD/YYYY')
    $("#dateHead").append(today)


    //initialize firebase
    var firebaseConfig = {
        apiKey: "AIzaSyCFn_oHxP7oa644rlNjraWhk6ywl96staU",
        authDomain: "train-scheduler-8e77c.firebaseapp.com",
        databaseURL: "https://train-scheduler-8e77c.firebaseio.com",
        projectId: "train-scheduler-8e77c",
        storageBucket: "train-scheduler-8e77c.appspot.com",
        messagingSenderId: "1046327108985",
        appId: "1:1046327108985:web:23bf75612e809dc5"
    };
    firebase.initializeApp(firebaseConfig);
    var database = firebase.database()

    $("#newTrainFirst").on("click", function () {
        $(this).addClass("selected");
    })

    //search button click
    $("#newTrainButton").on("click", function (event) {
        event.preventDefault()
        var newName = $("#newTrainName").val()
        var newDestination = $("#newTrainDestination").val()
        var newFirst = $("#newTrainFirst").val()
        var newFrequency = $("#newTrainFrequency").val()

        if (newName !== "" && newDestination !== "" && newFirst !== "" && newFrequency !== "") {

            $("#newTrainFirst").removeClass("selected")

            //push inputs to firebase
            var newTrain = {
                Name: newName,
                Destination: newDestination,
                First: newFirst,
                Frequency: newFrequency,
            }
            database.ref().push(newTrain)

            //Clear search boxes
            $("#newTrainName").val("")
            $("#newTrainDestination").val("")
            $("#newTrainFirst").val("")
            $("#newTrainFrequency").val("")
            $("#newTrainNext").val("")
        } else {
            alert("Fill in all input fields")
        }
    })

    //database on update child
    database.ref().on("child_added", function (childSnapshot) {
        var newName = childSnapshot.val().Name;
        var newDestination = childSnapshot.val().Destination;
        var newFirst = childSnapshot.val().First;
        var newFrequency = childSnapshot.val().Frequency;

        //next departure math
        var nextDeparture = $("#newTrainFirst").val().trim()

        //console.log(timeTest)

        var firstPretty = moment(newFirst, "HH" + "mm").format('LT')

        //append database values to page
        var newRow = $("<tr>").append(
            $("<td>").text(newName),
            $("<td>").text(newDestination),
            $("<td>").text(firstPretty),
            $("<td>").text(newFrequency),
            $("<td>").text("?"),//add nextDeparture here
        );
        $("#trainTableBody").append(newRow)
    })
})