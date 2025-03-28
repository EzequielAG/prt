
function sueldo1()
{
 var su1=0;
 var di1=0;
 var bo1=0;
 var bo12=0;
 var bo13=0;
 var des1=0;
 var des12=0;
 var suNet1=0;
 var suel=0;
 var de1=0;
 var de2=0;
 var d1= 0;
 var d2= 0;

 su1=parseInt(document.getElementById("txtsu1").value);
 di1=parseInt(document.getElementById("txtdi1").value);
 bo1=parseInt(document.getElementById("txtbo1").value);
 bo12=parseInt(document.getElementById("txtbo12").value);
 bo13=parseInt(document.getElementById("txtbo13").value);
 des12=parseInt(document.getElementById("txtdes12").value);
 des1=parseInt(document.getElementById("txtdes1").value);

 suel=su1 * di1 + bo1 + bo12 + bo13;
 de1 = des1/100;
 de2 = des12/100;
 d1= suel * de1;
 d2= suel * de2;
 suNet1 = suel - d1 -d2;
 document.getElementById("txtsulNeto1").value =suNet1;
 
}
function sueldo2()
{
    var su2=0;
    var di2=0;
    var bo2=0;
    var bo22=0;
    var bo23=0;
    var des2=0;
    var des22=0;
    var suNet2=0;
    var suel=0;
    var de12=0;
    var de22=0;
    var d12= 0;
    var d22= 0;
   
    su2=parseInt(document.getElementById("txtsu2").value);
    di2=parseInt(document.getElementById("txtdi2").value);
    bo2=parseInt(document.getElementById("txtbo2").value);
    bo22=parseInt(document.getElementById("txtbo22").value);
    bo23=parseInt(document.getElementById("txtbo23").value);
    des22=parseInt(document.getElementById("des22").value);
    des2=parseInt(document.getElementById("des2").value);
   
    suel=su2 * di2 + bo2 + bo22 + bo23;
    de12 = des2/100;
    de22 = des22/100;
    d12= suel * de12;
    d22= suel * de22;
    suNet2 = suel - d12 -d22;
    document.getElementById("sulNeto2").value =suNet2;
}
function sueldo3()
{
    var su3=0;
    var di3=0;
    var bo3=0;
    var bo32=0;
    var bo33=0;
    var des3=0;
    var des32=0;
    var suNet3=0;
    var suel=0;
    var de13=0;
    var de23=0;
    var d13= 0;
    var d23= 0;
   
    su3=parseInt(document.getElementById("txtsu3").value);
    di3=parseInt(document.getElementById("txtdi3").value);
    bo3=parseInt(document.getElementById("txtbo3").value);
    bo32=parseInt(document.getElementById("txtbo32").value);
    bo33=parseInt(document.getElementById("txtbo33").value);
    des32=parseInt(document.getElementById("des32").value);
    des3=parseInt(document.getElementById("des3").value);
   
    suel=su3 * di3 + bo3 + bo32 + bo33;
    de13 = des3/100;
    de23 = des32/100;
    d13= suel * de13;
    d23= suel * de23;
    suNet3 = suel - d13 -d23;
    document.getElementById("sulNeto3").value =suNet3;
}
function sueldo4()
{
    var su4=0;
    var di4=0;
    var bo4=0;
    var bo42=0;
    var bo43=0;
    var des4=0;
    var des42=0;
    var suNet4=0;
    var suel=0;
    var de14=0;
    var de24=0;
    var d14= 0;
    var d24= 0;
   
    su4=parseInt(document.getElementById("txtsu4").value);
    di4=parseInt(document.getElementById("txtdi4").value);
    bo4=parseInt(document.getElementById("txtbo4").value);
    bo42=parseInt(document.getElementById("txtbo42").value);
    bo43=parseInt(document.getElementById("txtbo43").value);
    des42=parseInt(document.getElementById("des42").value);
    des4=parseInt(document.getElementById("des4").value);
   
    suel=su4 * di4 + bo4 + bo42 + bo43;
    de14 = des4/100;
    de24 = des42/100;
    d14= suel * de14;
    d24= suel * de24;
    suNet4 = suel - d14 -d24;
    document.getElementById("sulNeto4").value =suNet4;
}
function sueldo5()
{
    var su5=0;
    var di5=0;
    var bo5=0;
    var bo52=0;
    var bo53=0;
    var des5=0;
    var des52=0;
    var suNet5=0;
    var suel=0;
    var de15=0;
    var de25=0;
    var d15= 0;
    var d25= 0;
   
    su5=parseInt(document.getElementById("txtsu5").value);
    di5=parseInt(document.getElementById("txtdi5").value);
    bo5=parseInt(document.getElementById("txtbo5").value);
    bo52=parseInt(document.getElementById("txtbo52").value);
    bo53=parseInt(document.getElementById("txtbo53").value);
    des52=parseInt(document.getElementById("des52").value);
    des5=parseInt(document.getElementById("des5").value);
   
    suel=su5 * di5 + bo5 + bo52 + bo53;
    de15 = des5/100;
    de25 = des52/100;
    d15= suel * de15;
    d25= suel * de25;
    suNet5 = suel - d15 -d25;
    document.getElementById("sulNeto5").value =suNet5;
}
function sueldo6()
{
    var su6=0;
    var di6=0;
    var bo6=0;
    var bo62=0;
    var bo63=0;
    var des6=0;
    var des62=0;
    var suNet6=0;
    var suel=0;
    var de16=0;
    var de26=0;
    var d16= 0;
    var d26= 0;
   
    su6=parseInt(document.getElementById("txtsu6").value);
    di6=parseInt(document.getElementById("txtdi6").value);
    bo6=parseInt(document.getElementById("txtbo6").value);
    bo62=parseInt(document.getElementById("txtbo62").value);
    bo63=parseInt(document.getElementById("txtbo63").value);
    des62=parseInt(document.getElementById("des62").value);
    des6=parseInt(document.getElementById("des6").value);
   
    suel=su6 * di6 + bo6 + bo62 + bo63;
    de16 = des6/100;
    de26 = des62/100;
    d16= suel * de16;
    d26= suel * de26;
    suNet6 = suel - d16 -d26;
    document.getElementById("sulNeto6").value =suNet6;
 }
function sueldo7()
{
    var su7=0;
    var di7=0;
    var bo7=0;
    var bo72=0;
    var bo73=0;
    var des17=0;
    var des27=0;
    var suNet7=0;
    var suel=0;
    var de17=0;
    var de27=0;
    var d17= 0;
    var d27= 0;
   
    su7=parseInt(document.getElementById("txtsu7").value);
    di7=parseInt(document.getElementById("txtdi7").value);
    bo7=parseInt(document.getElementById("txtbo7").value);
    bo72=parseInt(document.getElementById("txtbo72").value);
    bo73=parseInt(document.getElementById("txtbo73").value);
    des72=parseInt(document.getElementById("des72").value);
    des7=parseInt(document.getElementById("des7").value);
   
    suel=su7 * di7 + bo7 + bo72 + bo73;
    de17 = des7/100;
    de27 = des72/100;
    d17= suel * de17;
    d27= suel * de27;
    suNet7 = suel - d17 -d27;
    document.getElementById("sulNeto7").value =suNet7;
}
function sueldo8()
{
    var su8=0;
    var di8=0;
    var bo8=0;
    var bo82=0;
    var bo83=0;
    var des8=0;
    var des82=0;
    var suNet8=0;
    var suel=0;
    var de18=0;
    var de28=0;
    var d18= 0;
    var d28= 0;
   
    su8=parseInt(document.getElementById("txtsu8").value);
    di8=parseInt(document.getElementById("txtdi8").value);
    bo8=parseInt(document.getElementById("txtbo8").value);
    bo82=parseInt(document.getElementById("txtbo82").value);
    bo83=parseInt(document.getElementById("txtbo83").value);
    des82=parseInt(document.getElementById("des82").value);
    des8=parseInt(document.getElementById("des8").value);
   
    suel=su8 * di8 + bo8 + bo82 + bo83;
    de18 = des8/100;
    de28 = des82/100;
    d18= suel * de18;
    d28= suel * de28;
    suNet8 = suel - d18 -d28;
    document.getElementById("sulNeto8").value =suNet8;
}
function sueldo9()
{
    var su9=0;
    var di9=0;
    var bo9=0;
    var bo92=0;
    var bo93=0;
    var des9=0;
    var des92=0;
    var suNet9=0;
    var suel=0;
    var de19=0;
    var de29=0;
    var d19= 0;
    var d29= 0;
   
    su9=parseInt(document.getElementById("txtsu9").value);
    di9=parseInt(document.getElementById("txtdi9").value);
    bo9=parseInt(document.getElementById("txtbo9").value);
    bo92=parseInt(document.getElementById("txtbo92").value);
    bo93=parseInt(document.getElementById("txtbo93").value);
    des92=parseInt(document.getElementById("des92").value);
    des9=parseInt(document.getElementById("des9").value);
   
    suel=su9 * di9 + bo9 + bo92 + bo93;
    de19 = des9/100;
    de29 = des92/100;
    d19= suel * de19;
    d29= suel * de29;
    suNet9 = suel - d19 -d29;
    document.getElementById("sulNeto9").value =suNet9;
}
function sueldo10()
{
    var su10=0;
    var di10=0;
    var bo10=0;
    var bo102=0;
    var bo103=0;
    var des10=0;
    var des102=0;
    var suNet10=0;
    var suel=0;
    var de110=0;
    var de210=0;
    var d110= 0;
    var d210= 0;
   
    su10=parseInt(document.getElementById("txtsu10").value);
    di10=parseInt(document.getElementById("txtdi10").value);
    bo10=parseInt(document.getElementById("txtbo10").value);
    bo102=parseInt(document.getElementById("txtbo102").value);
    bo103=parseInt(document.getElementById("txtbo103").value);
    des102=parseInt(document.getElementById("des102").value);
    des10=parseInt(document.getElementById("des10").value);
   
    suel=su10 * di10 + bo10 + bo102 + bo103;
    de110 = des10/100;
    de210 = des102/100;
    d110= suel * de110;
    d210= suel * de210;
    suNet10 = suel - d110 -d210;
    document.getElementById("sulNeto10").value =suNet10;
}
function ttsueldos()
{
    var t1 = 0;
    var t2 = 0;
    var t3 = 0;
    var t4 = 0;
    var t5 = 0;
    var t6 = 0;
    var t7 = 0;
    var t8 = 0;
    var t9 = 0;
    var t10 = 0;
    var toSuel = 0;

    t1=parseInt(document.getElementById("txtsulNeto1").value);
    t2=parseInt(document.getElementById("sulNeto2").value);
    t3=parseInt(document.getElementById("sulNeto3").value);
    t4=parseInt(document.getElementById("sulNeto4").value);
    t5=parseInt(document.getElementById("sulNeto5").value);
    t6=parseInt(document.getElementById("sulNeto6").value);
    t7=parseInt(document.getElementById("sulNeto7").value);
    t8=parseInt(document.getElementById("sulNeto8").value);
    t9=parseInt(document.getElementById("sulNeto9").value);
    t10=parseInt(document.getElementById("sulNeto10").value);

    toSuel = t1 + t2 + t3 + t4 + t5 + t6 + t7 + t8 + t9 + t10;
    document.getElementById("total").value = toSuel;
}