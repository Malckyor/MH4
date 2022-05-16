window.onload = function(){
    input1.value = "8A00000";
}

area1.oninput = function(){
    
    func.f4s4();
    func.f4ePass();
    func.fcode();
}

area2.oninput = function(){
    
}

area3.oninput = function(){

}

input1.oninput = function(){
    func.fcode();
}

area4.oninput = function(){

}

const func = {
    f4s4(){
        // 1byte+space区切りを、4byte+space+4byte+改行に変換
        area2.value = '';
        let cnt1 = 0;
        let cnt2 = 0;

        for(i=0; i<area1.value.length; i++){
            if(area1.value[i] == ' '){              // spaceの時
                cnt1 += 1;                          // spaceカウンタ+1
                if(cnt1 == 4){                      // spaceが4つになったら
                    cnt1 = 0;                       // リセット
                    area2.value += ' ';             // 4byte区切り
                    cnt2 += 1;                      // 改行用カウンタ
                    if(cnt2 == 2){                  // 4byte2つできたら
                        cnt2 = 0;                   // リセットして
                        area2.value += '\n';        // 改行する
                    }                               //
                }                                   //
            }else{                                  //
                area2.value += area1.value[i];      // spaceじゃない時は普通に
            }
        }
    }
    ,
    f4ePass(){
        // 1byte+space区切りを、4byte+エンディアン変換(f4eにパス)
        area3.value = '';                                                       // 初期化
        const lines = parseInt((area1.value.length+1)/12 , 10);                 // 必要行数計算
        let re = new Array(lines);                                              // 返値を入れる配列
        re = this.f4e(lines);                                                   // f4e関数
        for(i=0; i<lines; i++){                                                 // 
            area3.value += re[i] + '\n';                                        // 行数分書き込み
        }
    }
    ,
    fcode(){
        // 1byte+space区切りを、コード化
        area4.value = '';                                                           // 初期化
        const lines = parseInt((area1.value.length+1)/12 , 10);                     // 必要行数計算
        let re = new Array(lines);                                                  // 返値を入れる配列
        re = this.f4e(lines);                                                       // f4e関数
        let iniAddress = parseInt(input1.value, 16);                                // 開始アドレス
        for(i=0; i<lines; i++){                                                     // 
            let address = this.check((iniAddress+i*4).toString(16).toUpperCase());  // 8桁にする為のチェック
            area4.value += address + ' '+ re[i] + '\n';                             // 行数分かきこみ
        }
    }
    ,
    f4e(lines){
        // 1byte+space区切りを、4byte+エンディアン変換(一行ずつの配列で返す)
        let result = new Array(lines);
        let cnt1 = 0;
        let cnt2 = 0;
        let tmp1 = '';
        let tmp2 = '';
        let tmp3 = '';
        let tmp4 = '';
    
        for(i=0; i<area1.value.length; i++){
            if(area1.value[i] == ' '){              // spaceの時
                cnt1 += 1;                          // spaceカウンタ+1
                if(cnt1 == 4){                      // spaceが4つになったら
                    cnt1 = 0;                       // リセット
                    set();                          // 書き込み
                }                                   //
            }else{                                  //
                switch(cnt1){                       // 一時代入
                    case 0:                         // 0の時
                        tmp1 += area1.value[i];     //
                        break;                      //
                                                    //
                    case 1:                         //
                        tmp2 += area1.value[i];     //
                        break;                      //
                                                    //
                    case 2:                         //
                        tmp3 += area1.value[i];     //
                        break;                      //
                                                    //
                    case 3:                         //
                        tmp4 += area1.value[i];     //
                        break;                      //
                }
            }
        }
        set();                                                              // 終了時にも書き込む(カウンタが4にならないので)
        function set(){                                                     // set関数
            result[cnt2] = tmp4 + tmp3 + tmp2 + tmp1;                       // 書き込み
            tmp1 = '';                                                      // リセット
            tmp2 = '';                                                      //
            tmp3 = '';                                                      //
            tmp4 = '';                                                      //
            cnt2 += 1;                                                      // 配列番号+1
        }                                                                   //
        return result;                                                      // 一行ずつの配列で返す
    }
    ,
    check(val){
        //8桁にする
        while(val.length != 8){
            val = "0" + val;
        }
        return val;
    }
}

//追加
area5.oninput = function(){
    area6.value = "";
    let cnt = 0;
    let str1 = "";
    let str2 = "";
    for( i=0; i<area5.value.length; i++){
        if(area5.value[i] != " "){
            switch (cnt) {
                case 0:
                    str1 += area5.value[i];
                    cnt += 1;
                    break;
            
                case 1:
                    str1 += area5.value[i];
                    cnt += 1;
                    break;

                case 2:
                    str2 += area5.value[i];
                    cnt += 1;
                    break;
                
                case 3:
                    str2 += area5.value[i];
                    cnt = 0;
                    area6.value = area6.value + str2 + " " + str1 + " ";
                    str1 = "";
                    str2 = "";
                    break;
            }
        }
    }
}




