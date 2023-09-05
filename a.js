
x = 1;
y = 3;





const btn = document.getElementById('btn-count');
var box1h= document.getElementById('re-1');
var box1w = box1h.offsetWidth;
var box2h= document.getElementById('re-2');
var box2w = box2h.offsetWidth;





btn.addEventListener("click", () => {

  
  var hasil = kali(box1w,box2w);
  console.log(hasil);
  });
function kali(a,b,){
     var total1;
     var total2;
     var total;
     total1 = a * a;
     total2 = b * b;
     total = total1 + total2;
     return total

     
}