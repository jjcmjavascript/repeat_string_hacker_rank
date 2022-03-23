function countCharInString(s, val = 'a')
{
    let currentValues = 0; 

    for(let i = 0; i < s.length; i++)
    {
        if(s.charAt(i) ==  'a') currentValues ++; 
    }

    return currentValues;
}

function repeatedString(s, n)
{
    const sIsValid = s &&  typeof s == 'string' && s.trim();
    const nIsValid = !isNaN(n) && typeof n != 'object'; 
    let total = 0;   

    if(sIsValid && nIsValid){
        s = s.trim().toLowerCase();

        const isDivisible = n > s.length * 2; 
        const currentValues  = countCharInString(s); 
        let whereCut = isDivisible ? Math.ceil(n / s.length) : 0; 
        let rest = n - (whereCut * s.length);

        console.log(isDivisible, rest,  whereCut);
        if(!isDivisible){
            total = countCharInString(s.substring(0, n)); 
        }
        else if(whereCut){
            total = whereCut * currentValues;
            let totalInTheRest = countCharInString(s.substring(0, rest));   
            total =  totalInTheRest + total;
        }
    }

    return total; 
}

console.log(repeatedString('asdf', 10));
