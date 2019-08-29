
let numbers = Object();
for(i = 1; i < 16;i++)
{
    
    numbers[i] = i**(1/2);
    
}
for (let key in numbers) {
    
    alert( key +":"+ numbers[key] );
} 