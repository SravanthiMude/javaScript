i=1,s=0
n=parseInt(prompt("Enter N value :"))
t=n
while(n!==0)
{
    r=n%10
    s=s+r*r*r
    n=Math.floor(n/10);
}
if(t==s)
{
    console.log("Armstrong")
}
else
{
    console.log("Not Armstrong")
}