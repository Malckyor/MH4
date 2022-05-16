//文字を16進数へ
area1.oninput = function(){
    area2.value = "";
    for( i=0; i<area1.value.length; i++ ){
        area2.value += convertASCIItoHex(area1.value[i]);
        area2.value += " ";
    }
}

//16進数を文字へ
area2.oninput = function(){
    area1.value = "";
    let tmp = "";
    for( i=0; i<area2.value.length; i++ ){
        if(area2.value[i] == " "){
            area1.value += convertHexToASCII(tmp);
            tmp = "";
        }else{
            tmp += area2.value[i];
        }
    }
}






//文字を16進数へ
function convertASCIItoHex(asciiVal) {
    let asciiCode = asciiVal.charCodeAt(0);
    let hexValue = asciiCode.toString(16).toUpperCase();
    switch(hexValue.length){
        case 1: hexValue = "000" + hexValue; break;
        case 2: hexValue = "00" + hexValue; break;
        case 3: hexValue = "0" + hexValue; break;
    }
    return hexValue;
}

//16進数を文字へ
function convertHexToASCII(hexString) {
    let stringOut = '';
    hexString.split(' ').map( (i) => {
        tempAsciiCode = parseInt(i, 16);
        stringOut = stringOut + String.fromCharCode(tempAsciiCode);
    });
    return stringOut;
}