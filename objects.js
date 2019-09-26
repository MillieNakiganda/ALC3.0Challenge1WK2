
let numbers = {};
for(i = 1; i < 16;i++)
{
    
    numbers[i] = i**(1/2);
    
}
for (let key in numbers) {
    
    console.log('\x1b[32m', key +":"+ numbers[key] );
} 