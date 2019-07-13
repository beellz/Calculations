

//to do is taking the number in both the fields 


// function calc () {
    
//     var num1 = document.getElementById('First1').value;
//     var num2 = document.getElementById("Second2").value;

//     const sign = document.getElementById('list').value;

//     if (sign == "addition" ) {
//         var x = num1 + num2;
//         document.getElementById("Comp").innerHTML = x ;

//         console.log("hello world");
//     }
//     else  {
//         let x = num1 - num2;
//         document.getElementById("Comp").innerHTML = x;
//     };

// };



 
function calc()
{
    // var n1 = parseFloat(document.querySelector('first1').value);
    var n1 = parseFloat(document.getElementById('first1').value);
    var n2 = parseFloat(document.getElementById('Second2').value);
    
    var oper = document.getElementById('list').value;
    
    if(oper === 'addition')
    {
        document.getElementById('Comp').value = n1+n2;
    }
    
    if(oper === '-')
    {
        document.getElementById('Comp').value = n1-n2;
    }
    
    if(oper === '/')
    {
        document.getElementById('result').value = n1/n2;
    }
    
    if(oper === 'X')
    {
        document.getElementById('result').value = n1*n2;
    }
};
























// num1.addEventListener('input', function() {
//     console.log(num1.value);
//     const numTemp = num1.value;

// });

// num2.addEventListener('input', function() {
//     console.log(num2.value);
//     const numTemp = num2.value;

// });



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

// function showAns () { 
//         var x = document.querySelector('select').value ;
        
//         if (x = addition) {
//             console.log("hello")
//             document.getElementById('answer').innerHTML = value;
//         }
//         else {
//             console.log("no hello")
//         }
        
//     };

//     document.getElementById('equals').addEventListener('click', showAns);