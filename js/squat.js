function squat(){
    for (let i = 0; i < prediction.length; i++) {
    
        if (prediction[i].className == "squat Staaende" && prediction[i].probability > 0.99){
            squatStaaendeCheck = true
        }


        if (squatStaaendeCheck && prediction[i].className == "squat siddende" && prediction[i].probability > 0.99){
            squatStaaendeCheck = false
            squatSiddendeCheck = true
        }

        if (squatSiddendeCheck && prediction[i].className == "squat Staaende" && prediction[i].probability > 0.99){
            squatSiddendeCheck = false;
            if (!squatCheck){
                squatCount += 1
                console.log(squatCount)
            }
            squatCheck = true
                
            }
            else
            {
                squatCheck = false;
            }
    }
}