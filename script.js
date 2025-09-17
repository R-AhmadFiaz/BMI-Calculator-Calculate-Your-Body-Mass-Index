
//this usecase give empty value we want values after submit..
//  const height = parseInt(document.querySelector("#height").value)
//  const weight = parseInt(document.querySelector("#weight").value)
    



const form = document.querySelector("form")

 form.addEventListener("submit",(num) => {


    num.preventDefault()
    
    const height = parseInt(document.querySelector("#height").value)
    const weight = parseInt(document.querySelector("#weight").value)
    const result = (document.querySelector("#result"))

    if (height ==="" || height < 0 || isNaN(height) ) {
        result.innerHTML = `Enter Valid Height  '${height}'`
        
    }
    else if (weight === "" || weight < 0 || isNaN(weight) ){
        result.innerHTML = `Enter Valid Weight  '${weight}'`

    }
    else{

        const BMI = (weight / ((height / 100) ** 2)).toFixed(2);

        result.innerHTML = BMI

    }
    
    
     })
    
    
    
    
