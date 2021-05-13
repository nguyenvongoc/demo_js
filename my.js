let numberOne= +prompt("Nhap so thu 1: ");
let numberTwo= +prompt("Nhap so thu 1: ");
if(numberOne==0)
{
    if(numberTwo==0)
    {
         alert("Phuong trinh co vo so nghiem");    
    } else { 
        alert("Phuong trinh vo nghiem");
            }
}
else {
    x=-numberTwo/numberOne;
alert("Phuong trinh co nghiem :"+x);
}