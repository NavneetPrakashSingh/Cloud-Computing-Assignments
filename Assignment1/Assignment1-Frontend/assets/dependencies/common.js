var isHeightValid = false;
var isWeightValid = false;

$(document).ready(function(){
    $('.invalid-height').hide();
    $('.valid-height').hide();
    $('.invalid-weight').hide();
    $('.valid-weight').hide();
})

$('.inputHeight').keyup(function(){
    var height = $.trim($('.inputHeight').val());
    var checkIfHeightIsNumeric = $.isNumeric(height);
    if( checkIfHeightIsNumeric== true && checkIfHeightIsNumeric>0){
        $('.invalid-height').hide();
        $('.valid-height').show();
        isHeightValid = true;
    }else{
        $('.invalid-height').show();
        $('.valid-height').hide();
        isHeightValid = false;
    }
})

$('.inputWeight').keyup(function(){
    var height = $.trim($('.inputWeight').val());
    var checkIfWeightIsNumeric = $.isNumeric(height);
    if( checkIfWeightIsNumeric== true && checkIfWeightIsNumeric>0){
        $('.invalid-weight').hide();
        $('.valid-weight').show();
        isWeightValid = true;
    }else{
        $('.invalid-weight').show();
        $('.valid-weight').hide();
        isWeightValid = false;
    }
})

$('.calculate').click(function (){
    var height = $('.inputHeight').val();
    var weight = $('.inputWeight').val();
    if(isHeightValid == true && isWeightValid == true){
        $('.output').empty();
        $('.output-message').empty();
        $('.output-box').empty();
        getResponseFromUrl($.trim(height), $.trim(weight));
    }else{
        $('.output').empty();
        $('.output-message').empty();
        $('.output-box').empty();
        $('.output').append("One of the values entered is invalid, please check again");
    }
});

function getResponseFromUrl(height, weight){
    var apiUrl = 'http://localhost:1337/calculate744/?height='+height+'&weight='+weight;


    $.ajax(apiUrl, {
        "timeout": "4000"
    })
    .done(function (data, textStatus, jqXHR) {
        // Process data, as received in data parameter
        $('.output').empty();
        $('.output-message').empty();
        $('.output-box').empty();
        $('.output').append("Calculated BMI is "+data.bmiValue);
        $('.output-message').append("Message for you is: "+data.bmiMessage);
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
        $('.output').empty();
        $('.output-message').empty();
        $('.output-box').empty();
        $('.output').append("API is not responding. Please try again after some time");
        
    })
}

$('.help-section').click(function(){
    alert("CSCI 5409 | Assignment 1 | BMI Application | For frontend files please refere to Assignment1-Frontend | For backend files please refer to Assignment1-Api in the file folder or Github. Run the frontend app on port number 1338 and backend on port number 1337."); 
});
