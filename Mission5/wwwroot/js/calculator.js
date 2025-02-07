$(document).ready(function() {
    $("#calculateBtn").click(function() {
        // Retrieve the value for hours (as a float)
        var hours = parseFloat($("#hoursInput").val());
        // Retrieve the hourly rate from the non-editable field
        var rate = parseFloat($("#rateInput").val());

        // Validate that hours is a positive number
        if (isNaN(hours) || hours <= 0) {
            alert("Please enter a valid positive number for hours.");
            return;
        }

        // Calculate the total cost and format it to 2 decimal places
        var total = hours * rate;
        $("#totalOutput").val(total.toFixed(2));
    });
});
