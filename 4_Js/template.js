//document
//window

/*çoklu yorumlar*/
// camelCase
// PascalCase
// underscore
// hyphens -
//""
//''
//``

//Çıktı:
// console.log("log")
// console.error("error")
// console.warn("warn")
// console.info("info")

//değişkenler
// var x1="merhabalar";
// var x1="denmee"

// let x2="merhabalar";
// const PI=3.141519;


// var degisken=44;
// var degisken41=44;
// var _degisken41=44;
// var $degisken41=44;
// var degiskenAdi=44;

// var +degisken41=44;
// var 545degisken41=44;

//whoisting
// number=14;
// var number;
// console.log(number);

// var employeeName;
// var employee_name;
// var _employee_name;

// let employeeName="Hamit";//String
// console.log(typeof employeeName);

// let employeeSurname="Mızrak";//String
// console.log(typeof employeeSurname);

// let employeeLanguage=5;//Number
// console.log(typeof employeeLanguage);

// let employeeLanguage2=5.456;//Number
// console.log(typeof employeeLanguage2);

// let isTurkish=true; //Boolean
// console.log(typeof isTurkish);

//undefined
// var result=3>1;
// console.log(result)

//operator
// +
// console.log(4+2);

// // -
// console.log(6-2);

// // *
// console.log(6*2);

// // **
// console.log(2**5);
// console.log(Math.pow(2,5));

// // /
// console.log(9/2);

// // %
// console.log(9%2);

// console.log("***************")

// let counter=0;
// console.log(counter)
// console.log(counter++)
// console.log(counter)
// // x++

// console.log("***************")

// let counter2=0;
// console.log(counter2)
// console.log(++counter2)
// console.log(counter2)
// // ++x

// console.log("***************")

// let counter3=5;
// console.log(counter3)
// console.log(counter3--)
// console.log(counter3)
// // x--

// console.log("***************")

// let counter4=5;
// console.log(counter4)
// console.log(--counter4)
// console.log(counter4)
// y--
// --y

//!
// let data=true; 
// console.log(!data)
// ||=VEYA  &=VE

// =   -> ATAMA
// ==  -> EŞİT ancak türlerine bakmadan
// 4=="4" sonuc eşittir

// === -> EŞİT ve Türüne bakarak eşitmi (typeof data)
// 4==="4" sonuc eşit değildir


//Kullanıcıdan veri almak
// let user=prompt("Lütfen isminiz giriniz");
// console.log(user);
// console.log( typeof userData);


// //string -> number (Number)
// //number -> string (String)

// let userData=prompt("Lütfen sayı giriniz");
// console.log(Number(userData**userData));
// console.log( typeof userData);

// let userData2=prompt("Lütfen sayı giriniz");
// console.log(String(userData2**userData2));
// console.log( typeof userData);

//undefined
// var variable;
// console.log(variable);

// //Infinity
// var variable2=4/0;
// console.log(variable2);

// //NaN: not A number
// var variable3=4/"asd";
// console.log(variable3);


// //isNaN 
// console.log(isNaN(44))

// new:hafızan yer açar
// null:hafızayı siler
// zero:değeri yoktur

// escape character 
// console.log("1.satır\n2.satır")
// console.log("3.satır\"4.satır")
// console.log("4.satır\n\t5.satır")

// break: döngüyü orada sonlandırır.
// return: metodu orada sonlandırır.
// continue: sadece 1 kereye o şartın sağlandığında çalışmasın sonra devam etsin
// debugger: debug için point oluşturmaya yarar.

// Math
// console.log(Math.min(2,5,6,2,9,11,-965));
// console.log(Math.max(2,5,6,2,9,11,-965));
// console.log(Math.abs(-965));
// console.log(Math.sqrt(16));
// console.log(Math.sqrt(Math.abs(-16)));
// console.log(Math.pow(2,5));

// //yuvarlamak
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.round(4.4));
// console.log(Math.round(4.5));

// //sin cos
// console.log(Math.sin(45));
// console.log(Math.cos(45));

// //Random
// console.log(Math.random()*4+1);
// console.log(Math.round(Math.random()*4+1));

// Math Ödev
// Kullanıcıda tarafından aldığımız 2 tane sayının
// s1-) Bu sayılardan en küçüğü nedir ?
// s2-) Bu sayılardan en büyüğü nedir ?
// s3-) Bu sayılardan en büyüğü karekökü nedir ?
// s4-) Bu sayılardan en büyüğü karekökünün üste yuvarlıyalım nedir ?
// s5-) Bu sayılardan en küçüğü mutlak değeri nedir ?
// s6-) Bu sayılardan en küçüğü alt taban en büyüğü üst taban şeklinde üstünü alalım ?

//SAYI
let sayi1=55;
sayi1=14.5263;
console.log(sayi1);
console.log(typeof sayi1);

//virgüllü sayı
console.log(sayi1.toFixed(1));

//bilimsel gösterim
let bilimselGosterim=13E+5;
console.log(bilimselGosterim);

let bilimselGosterim2=13E-5;
console.log(bilimselGosterim2);

const sayi12=45000;
console.log(sayi12.toExponential(3));

//cast
//const number41=Number(prompt("sayı girininiz"));

//Infinity
let data=44/0;
console.log(data);

//NaN
let data2=44/"asd";
console.log(data2);

//Binary: 2 (0-1)
let binary=0b01011;
console.log(binary);

//Octal 8 (0-1-2-3-4-5-6-7)
let octal=07161;
console.log(octal);

//Decimal 10 (0-1-2-3-4-5-6-7-8-9)
let decimal=10123;
console.log(decimal);

//Hexadecimal 16 (0-1-2-3-4-5-6-7-8-9-A-B-C-D-E-F)
let hexadecimal=0xAbc98;
console.log(hexadecimal);


