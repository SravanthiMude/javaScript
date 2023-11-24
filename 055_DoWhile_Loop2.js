do {
    a=parseInt(prompt("Enter A Value:"));
    b=parseInt(prompt("Enter B value:"));
    c=a+b;
    console.log("Sum is:", c);
    console.log("Do you want to continue Y/N:");
    ch=prompt().charAt(0);
}while(ch==='Y' || ch==='y');
