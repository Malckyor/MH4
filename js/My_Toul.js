area1.oninput = function(){

    result1.value = "";

    let cnt = 0;
    let arr = new Array("","","","","");    //初期化が必ず必要

    let cnt2 = 0;

    for(i=0; i<area1.value.length; i++){

        if(area1.value[i] != "\n"){                         //改行は飛ばす
            cnt2 += 1;                                      //改行を飛ばした文字数

            arr[cnt] += area1.value[i];                     //何行目か
            if(cnt2 % 4 == 0){
    
                let tmp = parseInt(arr[cnt], 16);
                tmp += 1;
                tmp = tmp.toString(16).toUpperCase();

                let tmp2 = parseInt(arr[cnt], 16);
                tmp2 += 2;
                tmp2 = tmp2.toString(16).toUpperCase();       //追加分

                let tmp3 = parseInt(arr[cnt], 16);
                tmp3 += 3;
                tmp3 = tmp3.toString(16).toUpperCase();

                let tmp4 = parseInt(arr[cnt], 16);
                tmp4 += 4;
                tmp4 = tmp4.toString(16).toUpperCase();

                let tmp5 = parseInt(arr[cnt], 16);
                tmp5 += 5;
                tmp5 = tmp5.toString(16).toUpperCase();
                
                let tmp6 = parseInt(arr[cnt], 16);
                tmp6 += 6;
                tmp6 = tmp6.toString(16).toUpperCase();

                let tmp7 = parseInt(arr[cnt], 16);
                tmp7 += 7;
                tmp7 = tmp7.toString(16).toUpperCase();

                let tmp8 = parseInt(arr[cnt], 16);
                tmp8 += 8;
                tmp8 = tmp8.toString(16).toUpperCase();

                let tmp9 = parseInt(arr[cnt], 16);
                tmp9 += 9;
                tmp9 = tmp9.toString(16).toUpperCase();

                let tmp10 = parseInt(arr[cnt], 16);
                tmp10 += 10;
                tmp10 = tmp10.toString(16).toUpperCase();

                let tmp11 = parseInt(arr[cnt], 16);
                tmp11 += 11;
                tmp11 = tmp11.toString(16).toUpperCase();

                let tmp12 = parseInt(arr[cnt], 16);
                tmp12 += 12;
                tmp12 = tmp12.toString(16).toUpperCase();

                let tmp13 = parseInt(arr[cnt], 16);
                tmp13 += 13;
                tmp13 = tmp13.toString(16).toUpperCase();

                let tmp14 = parseInt(arr[cnt], 16);
                tmp14 += 14;
                tmp14 = tmp14.toString(16).toUpperCase();

                let tmp15 = parseInt(arr[cnt], 16);
                tmp15 += 15;
                tmp15 = tmp15.toString(16).toUpperCase();

                let tmp16 = parseInt(arr[cnt], 16);
                tmp16 += 16;
                tmp16 = tmp16.toString(16).toUpperCase();

                let tmp17 = parseInt(arr[cnt], 16);
                tmp17 += 17;
                tmp17 = tmp17.toString(16).toUpperCase();

                let tmp18 = parseInt(arr[cnt], 16);
                tmp18 += 18;
                tmp18 = tmp18.toString(16).toUpperCase();


                if(tmp.length != 4){                        //4文字に合わせる
                    tmp = checkLength(tmp);
                }

                if(tmp2.length != 4){
                    tmp2 = checkLength(tmp2);
                }

                if(tmp3.length != 4){
                    tmp3 = checkLength(tmp3);
                }

                if(tmp4.length != 4){
                    tmp4 = checkLength(tmp4);
                }

                if(tmp5.length != 4){
                    tmp5 = checkLength(tmp5);
                }

                if(tmp6.length != 4){
                    tmp6 = checkLength(tmp6);
                }

                if(tmp7.length != 4){
                    tmp7 = checkLength(tmp7);
                }

                if(tmp8.length != 4){
                    tmp8 = checkLength(tmp8);
                }

                if(tmp9.length != 4){
                    tmp9 = checkLength(tmp9);
                }

                if(tmp10.length != 4){
                    tmp10 = checkLength(tmp10);
                }

                if(tmp11.length != 4){
                    tmp11 = checkLength(tmp11);
                }

                if(tmp12.length != 4){
                    tmp12 = checkLength(tmp12);
                }

                if(tmp13.length != 4){
                    tmp13 = checkLength(tmp13);
                }

                if(tmp14.length != 4){
                    tmp14 = checkLength(tmp14);
                }

                if(tmp15.length != 4){
                    tmp15 = checkLength(tmp15);
                }

                if(tmp16.length != 4){
                    tmp16 = checkLength(tmp16);
                }

                if(tmp17.length != 4){
                    tmp17 = checkLength(tmp17);
                }

                if(tmp18.length != 4){
                    tmp18 = checkLength(tmp18);
                }

                result1.value += tmp + "\n";
                result2.value += tmp2 + "\n";
                result3.value += tmp3 + "\n";
                result4.value += tmp4 + "\n";
                result5.value += tmp5 + "\n";
                result6.value += tmp6 + "\n";
                result7.value += tmp7 + "\n";
                result8.value += tmp8 + "\n";
                result9.value += tmp9 + "\n";
                result10.value += tmp10 + "\n";
                result11.value += tmp11 + "\n";
                result12.value += tmp12 + "\n";
                result13.value += tmp13 + "\n";
                result14.value += tmp14 + "\n";
                result15.value += tmp15 + "\n";
                result16.value += tmp16 + "\n";
                result17.value += tmp17 + "\n";
                result18.value += tmp18 + "\n";

                cnt += 1;                                   //何行目か
            }
        }

    }
};

function checkLength(tennpu){                        //4文字に合わせる
    for(;;){
        tennpu = "0" + tennpu;
        if(tennpu.length == 4){
            break;
        }
    }
    return tennpu;
}