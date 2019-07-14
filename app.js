function calc()
{
    // var n1 = parseFloat(document.querySelector('first1').value);
    var n1 = parseFloat(document.getElementById('First1').value);
    var n2 = parseFloat(document.getElementById('Second2').value);
    
    var oper = document.getElementById('list').value;
    
    if(oper === 'addition')
    {

        document.getElementById('Comp').innerHTML = n1+n2;
    };
    
    if(oper === 'substraction')
    {
        document.getElementById('Comp').innerHTML = n1-n2;
    }
    
    if(oper === 'division')
    {
        document.getElementById('Comp').innerHTML = n1/n2;
    }
    
    if(oper === 'multiplycation')
    {
        document.getElementById('Comp').innerHTML = n1*n2;
    }
};
