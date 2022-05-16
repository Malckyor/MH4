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
                if(tmp.length != 4){                        //4文字に合わせる
                    for(;;){
                        tmp = "0" + tmp;
                        if(tmp.length == 4){
                            break;
                        }
                    }
                }
                result1.value += tmp + "\n";

                cnt += 1;                                   //何行目か
            }
        }

    }
};