//MILESTONE 1
// const btn_calc = document.querySelector("div button");
// const price = 0.21;

// var miles = prompt("Please insert the miles: ");
// var age = prompt("Please insert the age: ");
// const calc = (miles,age) => {
//     return age > 65? (miles*price)*0.60 : ( age>18? miles*age : (miles*age)*0.20 );
// };

// btn_calc.addEventListener('click', function(){console.log(calc(miles,age)); });

//MILESTONE 2
//const btn_submit = document.querySelector("div button");
const price = 0.21;

document.querySelector(".container form button").addEventListener("click",function(){
    //event.preventDefault();
    const firstname = document.getElementById("input_firstname").value;
    const lastname = document.getElementById("input_lastname").value;
    const age = document.getElementById("input_age").value;
    const miles = document.getElementById("input_miles").value;

    const cost = (age,miles) => age > 65? (miles*price)*0.60 : ( age>18? miles*age : (miles*age)*0.20 );

    document.getElementById("output").textContent = `${cost(age,miles)}`;
});

