s=0
n=parseInt(prompt("Enter N value :"))
t=n
while(n>0)
{
    r=n%10
    s=s*10+r
    n=Math.floor(n/10);
}
if(t==s)
{
    console.log("Palindrome")
}
else
{
    console.log("Not Palindrome")
}
