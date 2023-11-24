r=0
n=parseInt(prompt("Enter N value :"))
while(n!==0)
{
    t=n%10
    r=r*10+t
    n=Math.floor(n/10);
}
    console.log("Reverse",r)
