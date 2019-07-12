

//to do is taking the number in both the fields 



const num1 = document.getElementById('First1');
const num2 = document.getElementById("Second2");

num1.addEventListener('input', function() {
    console.log(num1.value);
    const numTemp = num1.value;

});

num2.addEventListener('input', function() {
    console.log(num2.value);
    const numTemp = num2.value;

});



// make it connect with the option 

// function getSelectValue () {
//     var seletedValue = document.getElementById("list").value;
//     console.log(seletedValue);
// };


// evaluate the answer

// if (selectedValue = addition ) {
//     var x = num1 + num2;
//     document.getElementById("comp").innerHTML = x ;
// }
// else {
//     var y = num1 - num2;

// };


// return the answer at the bottom

// function ValueAnswer () {
//      var x = document.getElementById("comp").innerHTML;
//      var q = x + so;
//     console.log(q);
// };

// function ValueAnswer () {
//     console.log(Num1);
// };

// function valveas () {
//     console.log("hello to u ")
    
//     console.log(count);
// };
// var count = [];

// num1.addEventListener('input', valveas);



// function show_selected() {
//     var selector = document.getElementById('list');
//     var value = selector[selector.selectedIndex].value;

//     document.getElementById('answer').innerHTML = value;
// }

// document.getElementById('equals').addEventListener('click', show_selected);

function showAns () { 
        var x = document.querySelector('select').value ;
        
        if (x = addition) {
            console.log("hello")
            document.getElementById('answer').innerHTML = value;
        }
        else {
            console.log("no hello")
        }
        
    };

    document.getElementById('equals').addEventListener('click', showAns);