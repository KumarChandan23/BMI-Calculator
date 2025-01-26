
let form = document.querySelector('form');

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let heightValue = document.querySelector('#height').value;
    
    let weightValue = document.querySelector('#weight').value;
   

    if (heightValue === '') {
        result.innerHTML = `Please enter  height `;
        result.style.color = "red";
        return;
    } else if (parseInt(heightValue) <= 0 || isNaN(parseInt(heightValue))) {
        result.innerHTML = `Please enter valid height: ${heightValue}`;
        return;
    }

    if (weightValue === '') {
        result.innerHTML = `Please enter  Weight `;
        return;
    } else if (parseInt(weightValue) <= 0 || isNaN(parseInt(weightValue))) {
        result.innerHTML = `Please enter valid weight: ${weightValue}`;
        return;
    }

    let height = parseInt(heightValue);
    let weight = parseInt(weightValue);

    let BMI = (weight / ((height * height) / 10000)).toFixed(2);

    if (BMI <= 18.6) {
        result.innerHTML = ` BMI is ${BMI} , Underweight`;
        result.style.color = "white";
        document.body.style.backgroundColor = "#d2dbd7eb"
    } else if (BMI >= 18.6 && BMI < 25) {
        result.innerHTML = ` BMI is ${BMI} , Normal Weight (Healthy Range, Zone: Green)`;
        result.style.color = "green";
        document.body.style.backgroundColor = "#0f0";
    }
    else if (BMI >= 25 && BMI < 30) {
        result.innerHTML = ` BMI is ${BMI} , Overweight (Zone: Orange)`;
        result.style.color = "orange";
        document.body.style.backgroundColor = "orange";
    }
    else if (BMI >= 30 && BMI < 35) {
        result.innerHTML = ` BMI is ${BMI} , Obesity (Zone: Red)`;
        result.style.color = "red";
        document.body.style.backgroundColor = "red";
    }
    else if (BMI >= 35 && BMI < 40) {
        result.innerHTML = ` BMI is ${BMI} , Obesity  (Zone: Dark Red)`;
        result.style.color = "#a50c0cfc";
        document.body.style.backgroundColor = "#a50c0cfc";
    }
    else {
        result.innerHTML = ` BMI is ${BMI} , exteme (Zone: Black)`;
        result.style.color = "black";
        document.body.style.backgroundColor = "black";
    }
});