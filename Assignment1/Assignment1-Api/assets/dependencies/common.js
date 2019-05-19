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
    if( checkIfHeightIsNumeric== true){
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
    var checkIfHeightIsNumeric = $.isNumeric(height);
    if( checkIfHeightIsNumeric== true){
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
        getResponseFromUrl($.trim(height), $.trim(weight));
    }else{
        $('.output').empty();
        $('.output').append("One of the values entered is invalid, please check again");
    }
});

function getResponseFromUrl(height, weight){
    var url = 'http://localhost:1337/calculate744/?height='+height+'&weight='+weight;
    io.socket.get(url, function gotResponse(body, response) {
        $('.output').empty();
        $('.output').append("Calculated BMI is"+body.bmiValue);
    })
}