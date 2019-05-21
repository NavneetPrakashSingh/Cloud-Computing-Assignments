module.exports = {
    calculateBMI: function(req, res, next){
        var height = req.param('height');
        var weight = req.param('weight');
        if(height>0 && weight>0){
            var calculatedBmi = Number(weight/(height*height)).toFixed(1);
            var bmiMessage = new Object();
            bmiIndex = [0,18.5,24.9,29.9,34.9,39.9,100000];
            bmiMessage[0] = "You are underweight, so you may need to put on some weight. You are recommended to ask your Doctor or a dietician for advice.";
            bmiMessage[1] = "You are at a healthy weight for your height. By maintaining a healthy weight, you lower your risk of developing serious health problems.";
            bmiMessage[2] = "You are slightly overweight. You may be advised to lose some weight for health reasons. You are recommended to talk to your Doctor or a dietician for advice.";
            bmiMessage[3] = "You are moderately obese (classification of class 1 obese). Your health may be at risk if you do not lose weight. You are recommended to talk to your Doctor or a dietician for advice.";
            bmiMessage[4] = "You are severely obese (classification of class 2 obese). Your health may be at risk if you do not lose weight. You are recommended to talk to your Doctor or a dietician for advice.";
    
            var messageToBePassed = "";
            for(var items in bmiIndex){
                console.log("Calculated BMI"+calculatedBmi+"items"+items+"items+1"+items+1);
                if(calculatedBmi>bmiIndex[items] && calculatedBmi<bmiIndex[parseInt(items)+1]){
                    messageToBePassed = bmiMessage[items];
                    break;
                }            
            }            
            res.json({ bmiValue :calculatedBmi , bmiMessage: messageToBePassed});
        }else{
            if(isNaN(height)){
                res.json("Invalid height.Make sure you enter height in number");
            }else if(isNaN(weight)){
                res.json("Weight is invalid. Make sure you enter weight in number");
            }else{
                res.json("Invalid height and weight");
            }
        }
    }
};

