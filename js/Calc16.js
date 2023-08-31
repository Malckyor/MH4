//現在の状態

let condition_HEX = true;
let condition_Del = true;
let condition_mark = true;
let condition_zero = true;
let condition_equal = true;
let currentLanguage = localStorage.getItem("currentLanguage");


window.onload = function(){
    conChange_HEX();
    conChange_Del();
    conChange_mark();
    conChange_zero();
    conChange_equal();
}

//初期の処理、上の読み込み時
function conChange_HEX(){
    //trueならfalseに、falseならtrueに、短縮記法
    if(condition_HEX = !condition_HEX){
        //falseで呼び出した時の処理、on色にする
        for(i=0; i<6; i++){
            let target = document.getElementsByClassName("HEX")[i];
            target.style.backgroundColor="#FFFF9B";
            target.style.color="#000000";
        }
        //routeの背景色
        let target = document.getElementsByClassName("route")[0];
        target.style.backgroundColor="#404040";
        target = document.getElementsByClassName("route")[1];
        target.style.backgroundColor="#000000";
        //invisible
        target = document.getElementsByClassName("invisible")[0];
        target.style.color="#FFFFFF";
        target = document.getElementsByClassName("invisible")[1];
        target.style.color="#000000";
    }else{
        //trueで呼び出した時の処理、off色にする
        for(i=0; i<6; i++){
                let target = document.getElementsByClassName("HEX")[i];
                target.style.backgroundColor="#202020";
                target.style.color="#404040";
            }
        //routeの背景色
        let target = document.getElementsByClassName("route")[0];
        target.style.backgroundColor="#000000";
        target = document.getElementsByClassName("route")[1];
        target.style.backgroundColor="#404040";
        //invisible
        target = document.getElementsByClassName("invisible")[0];
        target.style.color="#000000";
        target = document.getElementsByClassName("invisible")[1];
        target.style.color="#FFFFFF";
    } 
}
//Delボタン
function conChange_Del(){
    if(condition_Del = !condition_Del){
        let target = document.getElementById("Del");
        target.style.backgroundColor="#4040FF";
        target.style.color="#FFFFFF";
    }else{
        let target = document.getElementById("Del");
        target.style.backgroundColor="#202020";
        target.style.color="#404040";
    }
}
//mark(イコール以外の符号)
function conChange_mark(){
    if(condition_mark = !condition_mark){
        for(i=0; i<4; i++){
            let target = document.getElementsByClassName("mark")[i];
            target.style.backgroundColor="#404040";
            target.style.color="#808080";
        }
    }else{
        for(i=0; i<4; i++){
            let target = document.getElementsByClassName("mark")[i];
            target.style.backgroundColor="#202020";
            target.style.color="#404040";
        }
    }
}
//0ボタンのチェンジ処理
function conChange_zero(){
    if(condition_zero = !condition_zero){
        let target = document.getElementById("num0");
        target.style.backgroundColor="rgb(0, 162, 255)";
        target.style.color="#000000";
    }else{
        let target = document.getElementById("num0");
        target.style.backgroundColor="#202020";
        target.style.color="#404040";
    }
}
//イコール=ボタンの変更
function conChange_equal(){
    if(condition_equal = !condition_equal){
        let target = document.getElementById("equal");
        target.style.backgroundColor="#4040FF";
        target.style.color="#FFFFFF";
    }else{
        let target = document.getElementById("equal");
        target.style.backgroundColor="#202020";
        target.style.color="#404040";
    }
}

//押されたボタンのテキストを追加する関数、引数に追加したいText
function addText(Text){
    if(condition_HEX == true){
        document.getElementsByClassName("route")[0].innerText += Text;
        convertToDEC();
    }else{
        document.getElementsByClassName("route")[1].innerText += Text;
        convertToHEX();
    }
}
//Delボタンが無効の場合、有効にする関数
function DelCheck(){
    if(condition_Del == false){
        //関数の中で関数呼んでます
        conChange_Del();
    }
}
//innnerTextに1文字以上ある場合かつ、符号が連続しないを、クリックイベントを使って上手い感じに実現してる
function markCheck(){
    let tmp = document.getElementsByClassName("route")[1].innerText;
    if(tmp.length != 0 && condition_mark == false){
        conChange_mark();
    }
    else if(tmp.length == 0 && condition_mark == true){
        conChange_mark();
    }
    else if(tmp[tmp.length-1] == "*" || tmp[tmp.length-1] == "/" || tmp[tmp.length-1] == "-" || tmp[tmp.length-1] == "+"){
        conChange_mark();
    }
}
//0は始めと符号の後には使えない
function zeroCheck(){
    let tmp = document.getElementsByClassName("route")[1].innerText;
    if(condition_zero == false){
        conChange_zero();
    }
    else if(tmp[tmp.length-1] == "*" || tmp[tmp.length-1] == "/" || tmp[tmp.length-1] == "-" || tmp[tmp.length-1] == "+"){
        conChange_zero();
    }
    else if(tmp.length == 0 && condition_zero == true){
        conChange_zero();
    }
}
//イコールも始めと符号の後には使えない
function equalCheck(){
    let tmp = document.getElementsByClassName("route")[1].innerText;
    if(condition_equal == false){
        conChange_equal();
    }
    else if(tmp[tmp.length-1] == "*" || tmp[tmp.length-1] == "/" || tmp[tmp.length-1] == "-" || tmp[tmp.length-1] == "+"){
        conChange_equal();
    }
    else if(tmp.length == 0 && condition_equal == true){
        conChange_equal();
    }
}


//クリックイベント
D.onclick = function(){
    if(condition_HEX == true){
        addText("D");
        DelCheck();
        markCheck();
        zeroCheck();
        equalCheck();
    }
}
E.onclick = function(){
    if(condition_HEX == true){
        addText("E");
        DelCheck();
        markCheck();
        zeroCheck();
        equalCheck();
    }
}
F.onclick = function(){
    if(condition_HEX == true){
        addText("F");
        DelCheck();
        markCheck();
        zeroCheck();
        equalCheck();
    }
}
Del.onclick = function(){
    if(condition_Del == true){
        if(condition_HEX == true){
            //文末1文字の削除
            let tmp = document.getElementsByClassName("route")[0].innerText;
            tmp = tmp.slice(0,-1);
            document.getElementsByClassName("route")[0].innerText = tmp;
            convertToDEC();

            //文字列が空になっていたらDelボタンを無効にする
            if(tmp == ""){
                conChange_Del();
            }
        }else{
            //文末1文字の削除
            let tmp = document.getElementsByClassName("route")[1].innerText;
            tmp = tmp.slice(0,-1);
            document.getElementsByClassName("route")[1].innerText = tmp;
            convertToHEX();

            //文字列が空になっていたらDelボタンを無効にする
            if(tmp == ""){
                conChange_Del();
            }
        }
        

        //mark符号
        markCheck();

        //0-zero
        zeroCheck();

        //=-equal
        equalCheck();
    }
}
A.onclick = function(){
    if(condition_HEX == true){
        addText("A");
        DelCheck();
        markCheck();
        zeroCheck();
        equalCheck();
    }
}
B.onclick = function(){
    if(condition_HEX == true){
        addText("B");
        DelCheck();
        markCheck();
        zeroCheck();
        equalCheck();
    }
}
C.onclick = function(){
    if(condition_HEX == true){
        addText("C");
        DelCheck();
        markCheck();
        zeroCheck();
        equalCheck();
    }
}
mark1.onclick = function(){
    if(condition_mark == true){
        addText("*");
        //符号が連続しない為に
        conChange_mark();

        zeroCheck();

        equalCheck();
    }
}
num7.onclick = function(){
    addText("7");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
num8.onclick = function(){
    addText("8");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
num9.onclick = function(){
    addText("9");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
mark2.onclick = function(){
    if(condition_mark == true){
        addText("/");
        conChange_mark();
        zeroCheck();
        equalCheck();
    }
}
num4.onclick = function(){
    addText("4");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
num5.onclick = function(){
    addText("5");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
num6.onclick = function(){
    addText("6");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
mark3.onclick = function(){
    if(condition_mark == true){
        addText("-");
        conChange_mark();
        zeroCheck();
        equalCheck();
    }
}
num1.onclick = function(){
    addText("1");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
num2.onclick = function(){
    addText("2");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
num3.onclick = function(){
    addText("3");
    DelCheck();
    markCheck();
    zeroCheck();
    equalCheck();
}
mark4.onclick = function(){
    if(condition_mark == true){
        addText("+");
        conChange_mark();
        zeroCheck();
        equalCheck();
    }
}
change.onclick = function(){
    conChange_HEX();
}
num0.onclick = function(){
    if(condition_zero == true){
        addText("0");
    }
}
equal.onclick = function(){
    if(condition_equal == true){

        Calc();

        //履歴
        history();
        //

        conChange_Del();
        conChange_mark();
        conChange_zero();
        conChange_equal();

        document.getElementsByClassName("route")[0].innerText = "";
        document.getElementsByClassName("route")[1].innerText = "";
    }
}
let a = document.getElementsByClassName("val")[0];
a.onclick = function(){
    if(condition_HEX == false){
        conChange_HEX();
    }
}
let b = document.getElementsByClassName("val")[1];
b.onclick = function(){
    if(condition_HEX == false){
        conChange_HEX();
    }
}
let c = document.getElementsByClassName("val")[2];
c.onclick = function(){
    if(condition_HEX == true){
        conChange_HEX();
    }
}
let d = document.getElementsByClassName("val")[3];
d.onclick = function(){
    if(condition_HEX == true){
        conChange_HEX();
    }
}
let e = document.getElementsByClassName("route")[0];
e.onclick = function(){
    if(condition_HEX == false){
        conChange_HEX();
    }
}
let f = document.getElementsByClassName("route")[1];
f.onclick = function(){
    if(condition_HEX == true){
        conChange_HEX();
    }
}

//計算
function Calc(){
    var calc_string = document.getElementsByClassName("route")[1].innerText;
    var result = Function('return ('+calc_string+');')();

    document.getElementById("DEC").innerText = result;
    document.getElementById("HEX").innerText = result.toString(16).toUpperCase();
}

//route変換、同期処理
function convertToHEX(){
    let DEC = document.getElementsByClassName("route")[1].innerText;
    document.getElementsByClassName("route")[0].innerText = "";

    let val = new Array("","","","","","","","","","","","","","","","","","","","");
    let cnt = 0;
    let cnt16 = false;

    for(i=0; i<DEC.length; i++){
        if(DEC[i] == "*" || DEC[i] == "/" || DEC[i] == "-" || DEC[i] == "+"){
            //符号が来た場合、
            cnt += 1;
            //上でcnt+=1をして、次のvalに符号(DEC現在のi番目値)を入れる
            val[cnt] = DEC[i];
            //符号を入れたので次の数字を次のvalに入れる為、さらにcnt+=1
            cnt += 1;

            cnt16 = false;
        }else{
            //16進数変換を再度する為に
            if(cnt16 == true){
                val[cnt] = parseInt(val[cnt],16);
            }

            //符号以外の場合、1文字ずつvalに追加
            val[cnt] += DEC[i];

            //valを16進数変換する
            val[cnt] = parseInt(val[cnt],10).toString(16).toUpperCase();
            cnt16 = true;
        }
    }
    //文末が符号以外の場合
    if(val[cnt] == "*" || val[cnt] == "/" || val[cnt] == "-" || val[cnt] == "+"){
    }else{
        // 文末が符号だった場合とで、上のfor文でcntの数がずれてしまうので調整
        cnt += 1;
    }
    //書き込み
    for(i=0; i<cnt; i++){
        document.getElementsByClassName("route")[0].innerText += val[i];
    }
}

function convertToDEC(){
    let HEX = document.getElementsByClassName("route")[0].innerText;
    document.getElementsByClassName("route")[1].innerText = "";

    let val = new Array("","","","","","","","","","","","","","","","","","","","");
    let cnt = 0;
    let cnt16 = false;

    for(i=0; i<HEX.length; i++){
        if(HEX[i] == "*" || HEX[i] == "/" || HEX[i] == "-" || HEX[i] == "+"){
            //符号が来た場合、
            cnt += 1;
            //上でcnt+=1をして、次のvalに符号(HEX現在のi番目値)を入れる
            val[cnt] = HEX[i];
            //符号を入れたので次の数字を次のvalに入れる為、さらにcnt+=1
            cnt += 1;

            cnt16 = false;
        }else{
            //10進数変換を再度する為に
            if(cnt16 == true){
                val[cnt] = parseInt(val[cnt],10).toString(16).toUpperCase();
            }

            //符号以外の場合、1文字ずつvalに追加
            val[cnt] += HEX[i];

            //valを10進数変換する
            val[cnt] = parseInt(val[cnt],16);
            cnt16 = true;
        }
    }
    //文末が符号以外の場合
    if(val[cnt] == "*" || val[cnt] == "/" || val[cnt] == "-" || val[cnt] == "+"){
    }else{
        // 文末が符号だった場合とで、上のfor文でcntの数がずれてしまうので調整
        cnt += 1;
    }
    //書き込み
    for(i=0; i<cnt; i++){
        document.getElementsByClassName("route")[1].innerText += val[i];
    }
}

// 6/5追加
let history_cnt = 0;
let history_HEX_route = new Array(0);
let history_DEC_route = new Array(0);
let history_HEX_result = new Array(0);
let history_DEC_result = new Array(0);
//履歴、＝が押されると呼び出し
function history(){
    // id属性で要素を取得
    let b_element = document.getElementById('history');

    // 新しいHTML要素を作成
    let new_element0 = document.createElement('hr');
    let new_element1 = document.createElement('p');
    let new_element2 = document.createElement('p');
    let new_element3 = document.createElement('br');

    //テキストの追加
    // new_element0.textContent = `${history_cnt+1}`;没
    new_element1.textContent = `${document.getElementsByClassName("route")[0].innerText} = ${document.getElementById("HEX").innerText}`;
    new_element2.textContent = `${document.getElementsByClassName("route")[1].innerText} = ${document.getElementById("DEC").innerText}`;

    //クラス名追加
    new_element1.className = history_cnt;
    new_element2.className = history_cnt;


    //pushで配列の追加
    history_HEX_route.push(document.getElementsByClassName("route")[0].innerText);
    history_DEC_route.push(document.getElementsByClassName("route")[1].innerText);
    history_HEX_result.push(document.getElementById("HEX").innerText);
    history_DEC_result.push(document.getElementById("DEC").innerText);

    //クリックイベントの追加
    new_element1.onclick = function(){
        document.getElementsByClassName("route")[0].innerText = history_HEX_route[this.className];
        document.getElementsByClassName("route")[1].innerText = history_DEC_route[this.className];
        document.getElementById("HEX").innerText = history_HEX_result[this.className];
        document.getElementById("DEC").innerText = history_DEC_result[this.className];

        markCheck();
        zeroCheck();
        equalCheck();
        DelCheck();

        if (currentLanguage === "en") {
            restoredMessage = "Restored old formulas and results.";
        } else {
            restoredMessage = "の途中式&結果を復元しました";
        }
        
        alert(`HEX → ${document.getElementsByClassName("route")[0].innerText} = ${document.getElementById("HEX").innerText}\nDEC → ${document.getElementsByClassName("route")[1].innerText} = ${document.getElementById("DEC").innerText}\n${restoredMessage}`);
    };
    new_element2.onclick = function(){
        document.getElementsByClassName("route")[0].innerText = history_HEX_route[this.className];
        document.getElementsByClassName("route")[1].innerText = history_DEC_route[this.className];
        document.getElementById("HEX").innerText = history_HEX_result[this.className];
        document.getElementById("DEC").innerText = history_DEC_result[this.className];

        markCheck();
        zeroCheck();
        equalCheck();
        DelCheck();

        if (currentLanguage === "en") {
            restoredMessage = "Restored old formulas and results.";
        } else {
            restoredMessage = "の途中式&結果を復元しました";
        }

        alert(`HEX → ${document.getElementsByClassName("route")[0].innerText} = ${document.getElementById("HEX").innerText}\nDEC → ${document.getElementsByClassName("route")[1].innerText} = ${document.getElementById("DEC").innerText}\n${restoredMessage}`);
    };

    

    // 指定した要素の中の末尾に挿入
    b_element.appendChild(new_element0);
    b_element.appendChild(new_element1);
    b_element.appendChild(new_element2);
    b_element.appendChild(new_element3);

    
    

    history_cnt += 1;
}

