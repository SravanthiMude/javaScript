i=1,s=0
n=parseInt(prompt("Enter N value :"))
while(n!==0)
{
    r=n%10
    s=s+r
    n=Math.floor(n/10);
}
console.log("Sum of digits :",s)
