function squat(){
    for (let i = 0; i < prediction.length; i++) {
        // console.log(prediction[i].className);

        if (prediction[i].className == "squat stående" && prediction[i].probability > 0.99){
            console.log("squat stående");
            squatStaaendeCheck = true
        }


        if (squatStaaendeCheck && prediction[i].className == "squat siddende" && prediction[i].probability > 0.99){
            console.log("squat siddende");
            squatStaaendeCheck = false
            squatSiddendeCheck = true
        }

        if (squatSiddendeCheck && prediction[i].className == "squat stående" && prediction[i].probability > 0.99){
            squatSiddendeCheck = false;
            if (!squatCheck){
                squatCount += 1
                console.log("sCount: " , squatCount);
            }
            squatCheck = true
                
            }
            else
            {
                squatCheck = false;
            }
    }
}