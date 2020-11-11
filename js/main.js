function myfunction(a){
    cal.t.value = cal.t.value + a;
 }
 function result(){
   cal.t.value = eval(cal.t.value);
 }
 function allClear(){
   cal.t.value="";
 }
 function back(){
   let currentVal = cal.t.value;
   let newVal = currentVal.substr(0, currentVal.length-1);
   cal.t.value = newVal;
 }