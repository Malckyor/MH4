const monsterName = new Array ("なし","リオレイア","リオレウス","リオレイア亜種","リオレウス亜種","リオレイア希少種","リオレウス希少種","イャンクック","イャンクック亜種","ゲリョス","ゲリョス亜種","ティガレックス","ティガレックス亜種","ドスゲネポス","ドスイーオス","ドスジャギィ","ドスランポス","ババコンガ","ババコンガ亜種","ラージャン","ケチャワチャ","テツカブラ","ザボアザキル","ガララアジャラ","ダラ・アマデュ","アルセルタス","ゲネルセルタス","ネルスキュラ","ゴア・マガラ","シャガル・マガラ","イャンガルルガ","クシャルダオラ","テオ・テスカトル","アカムトルム","キリン","キリン亜種","フルフル","フルフル亜種","バサルモス","バサルモス亜種","グラビモス","グラビモス亜種","イビルジョー","怒り喰らうイビ","ブラキディオス","激昂したラージ","ダレン・モーラ","ウルクスス","ジンオウガ","ジンオウガ亜種");
const areaName = new Array ("BC","迷路","傾斜","崖","水","豚","蔦","天井","柱","ゴール","宝");
let count = 0;

let weaponKinds = new Array(6);

//クエスト作成者名
let Author = document.getElementById('$Author');
let AuthorName = ["0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000","0000"];
//以下2つ16進数変換
function AuthorChange(){
    for(i=0;i<12;i++){
        if(Author.value[i]==null){
            for(j=i;j<13;j++){
            AuthorName[j] = "0000";
            }
            break;
        }
      AuthorName[i] = convertASCIItoHex(Author.value[i]);
      switch(AuthorName[i].length){
          case 1: AuthorName[i] = "000" + AuthorName[i]; break;
          case 2: AuthorName[i] = "00" + AuthorName[i]; break;
          case 3: AuthorName[i] = "0" + AuthorName[i]; break;
      }
    }
}
Author.onchange=function(){
    AuthorChange();
    removeOutput();
}
function convertASCIItoHex(asciiVal) {
    let asciiCode = asciiVal.charCodeAt(0);
    let hexValue = asciiCode.toString(16).toUpperCase();
    console.log("コンソールログ : 0x" + hexValue);
    return hexValue;
}

//乱数生成用
function getRandom( min, max ) {
    let random = Math.floor( Math.random() * (max + 1 - min) ) + min;
  
    return random;
}
//クエスト識別 ID
let questID1;
let questID2;
function generationID(){
    
    questID1 = getRandom( 0, 4294967295);
    questID2 = getRandom( 0, 4294967295);

    function transID(ID){
        let reID = ID.toString(16).toUpperCase();
        if(reID.length < 8){
            while(reID.length != 8){
                reID = "0" + reID;
            }
        }
        return reID;
    }

    questID1 = transID(questID1);
    questID2 = transID(questID2);

    $questID.value = questID1 + " " + questID2;

}
//乱数生成ボタン
const btnID = document.getElementById("$btnID");
btnID.addEventListener("click", function(){
    generationID();
});
//txtフォームからの変更時
$questID.onchange = function(){
    if($questID.value.length != 17){
        $questID.value = "";
    }else{
        questID1 = "";
        questID2 = "";

        for(i=0;i<8;i++){
            questID1 = questID1 + $questID.value[i];
        }
        for(i=9;i<17;i++){
            questID2 = questID2 + $questID.value[i];
        }
    }
    removeOutput();
}

//モンスターテキストの変更
function textSetM1(){
    if($monster1.value == ""){
        for( i=0; i<8; i++){
            document.getElementsByClassName("$m1Name")[i].textContent = "モンスター";
            }
    }else{
        for( i=0; i<8; i++){
            document.getElementsByClassName("$m1Name")[i].textContent = monsterName[parseInt($monster1.value,16)];
            }
    }
    //ドスランポス
    if($monster1.value == "10"){
        weaponKinds[0] = "ディーエッジ";
        weaponKinds[1] = "41式対飛竜大剣、凍刃";
        weaponKinds[2] = "マスターバング、ランポスクロウズ";
        weaponKinds[3] = "合戦槍、フルボルテージ";
        weaponKinds[4] = "ウォーバッシュ、ガンズ＝ロック";
        weaponKinds[5] = "クイーンブラスター、ボルボバレット";


        $armor[1].textContent = "オリジナルA (インゴッド)";
        $armor[2].textContent = "オリジナルB (インゴッド)";
        $armor[3].textContent = "オリジナルC (インゴッド)";
        $armor[4].textContent = "オリジナルD (インゴッド)";
        $armor[5].textContent = "オリジナルE (インゴッド)";
        $armor[6].textContent = "オリジナルF (インゴッド)";
        $armor[7].textContent = "トライA (フルフル)";
        $armor[8].textContent = "トライB (フルフル)";
        $armor[9].textContent = "トライC (フルフル)";
        $armor[10].textContent ="トライD (フルフル)";
        $armor[11].textContent ="トライE (フルフル)";
        $armor[12].textContent ="トライF (フルフル)";
        $armor[13].textContent ="ドスA (ゲリョス)";
        $armor[14].textContent ="ドスB (ゲリョス)";
        $armor[15].textContent ="ドスC (ゲリョス)";
        $armor[16].textContent ="ドスD (ゲリョス)";
        $armor[17].textContent ="ドスE (ゲリョス)";
        $armor[18].textContent ="ドスF (ゲリョス)";
    }
    //イャンクック、イャンクック亜種、バサルモス
    else if($monster1.value == '07' || $monster1.value == '08' || $monster1.value == '26'){
        weaponKinds[0] = "竜姫の剣斧";
        weaponKinds[1] = "ジークムント、飛竜刀";
        weaponKinds[2] = "ヒドゥンエッジ、ギルドナイトセーバー";
        weaponKinds[3] = "トゥースランス、プリンセスバースト";
        weaponKinds[4] = "ヒドゥンブレイカー、ウネリシェルン";
        weaponKinds[5] = "クイーンブラスター、デュエルスタッブ";

        $armor[1].textContent = "オリジナルA (レイア)";
        $armor[2].textContent = "オリジナルB (レイア)";
        $armor[3].textContent = "オリジナルC (レイア)";
        $armor[4].textContent = "オリジナルD (レイア)";
        $armor[5].textContent = "オリジナルE (レイア)";
        $armor[6].textContent = "オリジナルF (レイア)";
        $armor[7].textContent = "トライA (ラギア)";
        $armor[8].textContent = "トライB (ラギア)";
        $armor[9].textContent = "トライC (ラギア)";
        $armor[10].textContent = "トライD (ラギア)";
        $armor[11].textContent = "トライE (ラギア)";
        $armor[12].textContent = "トライF (ラギア)";
        $armor[13].textContent = "ドスA (ザザミ)";
        $armor[14].textContent = "ドスB (ザザミ)";
        $armor[15].textContent = "ドスC (ザザミ)";
        $armor[16].textContent = "ドスD (ザザミ)";
        $armor[17].textContent = "ドスE (ザザミ)";
        $armor[18].textContent = "ドスF (ザザミ)";
    }
    //バサルモス亜種、ジンオウガ
    else if($monster1.value == '27' || $monster1.value == '30'){
        weaponKinds[0] = "竜姫の剣斧";
        weaponKinds[1] = "ジークムント、飛竜刀";
        weaponKinds[2] = "フロストエッジ、ギルドナイトセーバー";
        weaponKinds[3] = "トゥースランス、プリンセスバースト";
        weaponKinds[4] = "ヒドゥンブレイカー、ウネリシェルン";
        weaponKinds[5] = "クイーンブラスター、デュエルスタッブ";

        $armor[1].textContent = "オリジナルA (レウス)";
        $armor[2].textContent = "オリジナルB (レウス、フルフルU)";
        $armor[3].textContent = "オリジナルC (レウス、キリン)";
        $armor[4].textContent = "オリジナルD (フルフルU、キリン)";
        $armor[5].textContent = "オリジナルE (フルフルU)";
        $armor[6].textContent = "オリジナルF (キリン)";
        $armor[7].textContent = "トライA (レックス)";
        $armor[8].textContent = "トライB (レックス、フルフルU)";
        $armor[9].textContent = "トライC (レックス、キリン)";
        $armor[10].textContent = "トライD (フルフルU、キリン)";
        $armor[11].textContent = "トライE (フルフルU)";
        $armor[12].textContent = "トライF (キリン)";
        $armor[13].textContent = "ドスA (ゲリョスU)";
        $armor[14].textContent = "ドスB (ゲリョスU、フルフルU)";
        $armor[15].textContent = "ドスC (ゲリョスU、キリン)";
        $armor[16].textContent = "ドスD (フルフルU、キリン)";
        $armor[17].textContent = "ドスE (フルフルU)";
        $armor[18].textContent = "ドスF (キリン)";
    }
    //ゴア・マガラ、ティガレックス、キリン
    else if($monster1.value == '1C' || $monster1.value == '0B' || $monster1.value == '22'){
        weaponKinds[0] = "豪剣斧";
        weaponKinds[1] = "雷剣、成敗刀";
        weaponKinds[2] = "チュクチュク、王双剣";
        weaponKinds[3] = "バベル、ナナ＝ハウル";
        weaponKinds[4] = "ねこハンマー、獄琴";
        weaponKinds[5] = "プロミネンスボウ、雷砲";

        $armor[1].textContent = "オリジナルA (リオハート)";
        $armor[2].textContent = "オリジナルB (リオハート、ギザミ)";
        $armor[3].textContent = "オリジナルC (リオハート、ジンオウU)";
        $armor[4].textContent = "オリジナルD (ギザミ、ジンオウU)";
        $armor[5].textContent = "オリジナルE (ギザミ)";
        $armor[6].textContent = "オリジナルF (ジンオウU)";
        $armor[7].textContent = "トライA (アーティア)";
        $armor[8].textContent = "トライB (アーティア、ギザミ)";
        $armor[9].textContent = "トライC (アーティア、ジンオウU)";
        $armor[10].textContent = "トライD (ギザミ、ジンオウU)";
        $armor[11].textContent = "トライE (ギザミ)";
        $armor[12].textContent = "トライF (ジンオウU)";
        $armor[13].textContent = "ドスA (常盤)";
        $armor[14].textContent = "ドスB (常盤、ギザミ)";
        $armor[15].textContent = "ドスC (常盤、ジンオウU)";
        $armor[16].textContent = "ドスD (ギザミ、ジンオウU)";
        $armor[17].textContent = "ドスE (ギザミ)";
        $armor[18].textContent = "ドスF (ジンオウU)";
    }
    //ジンオウガ亜種、ブラキディオス、ティガレックス亜種
    else if($monster1.value == '31' || $monster1.value == '2C' || $monster1.value == '0C'){
        weaponKinds[0] = "豪剣斧";
        weaponKinds[1] = "封龍剣、軍刀";
        weaponKinds[2] = "峯山小太刀、テッセン";
        weaponKinds[3] = "竜騎槍、ジェネラルバルド";
        weaponKinds[4] = "鬼鉄丸、ナナ＝トリ、獄琴";
        weaponKinds[5] = "覇弓レラカムトルム、鋼氷馬弓、雷砲";

        $armor[1].textContent = "オリジナルA (リオソウル)";
        $armor[2].textContent = "オリジナルB (リオソウル、ゴア)";
        $armor[3].textContent = "オリジナルC (リオソウル、クシャナ)";
        $armor[4].textContent = "オリジナルD (ゴア、クシャナ)";
        $armor[5].textContent = "オリジナルE (ゴア)";
        $armor[6].textContent = "オリジナルF (クシャナ)";
        $armor[7].textContent = "トライA (レックスU)";
        $armor[8].textContent = "トライB (レックスU、ゴア)";
        $armor[9].textContent = "トライC (レックスU、クシャナ)";
        $armor[10].textContent = "トライD (ゴア、クシャナ)";
        $armor[11].textContent = "トライE (ゴア)";
        $armor[12].textContent = "トライF (クシャナ)";
        $armor[13].textContent = "ドスA (凛)";
        $armor[14].textContent = "ドスB (凛、ゴア)";
        $armor[15].textContent = "ドスC (凛、クシャナ)";
        $armor[16].textContent = "ドスD (ゴア、クシャナ)";
        $armor[17].textContent = "ドスE (ゴア)";
        $armor[18].textContent = "ドスF (クシャナ)";
    }
    //イャンガルルガ、ラージャン、シャガルマガラ
    else if($monster1.value == '1E' || $monster1.value == '13' || $monster1.value == '1D'){
        weaponKinds[0] = "ヒドゥンアックス";
        weaponKinds[1] = "輝剣、ラスティクレイモア";
        weaponKinds[2] = "ゴールドマロウ、祭囃子・無形ノ調";
        weaponKinds[3] = "シルバープロミネンス、シルバールーク";
        weaponKinds[4] = "星砕きプロメテオル、ゴルトリコーダー";
        weaponKinds[5] = "殲滅と破壊の剛弓、カオスウイング";

        $armor[1].textContent = "オリジナルA (シルバーソル)";
        $armor[2].textContent = "オリジナルB (シルバーソル、キリンU)";
        $armor[3].textContent = "オリジナルC (シルバーソル、アカムト)";
        $armor[4].textContent = "オリジナルD (キリンU、アカムト)";
        $armor[5].textContent = "オリジナルE (キリンU)";
        $armor[6].textContent = "オリジナルF (アカムト)";
        $armor[7].textContent = "トライA (フィリア)";
        $armor[8].textContent = "トライB (フィリア、キリンU)";
        $armor[9].textContent = "トライC (フィリア、アカムト)";
        $armor[10].textContent = "トライD (キリンU、アカムト)";
        $armor[11].textContent = "トライE (キリンU)";
        $armor[12].textContent = "トライF (アカムト)";
        $armor[13].textContent = "ドスA (グリード)";
        $armor[14].textContent = "ドスB (グリード、キリンU)";
        $armor[15].textContent = "ドスC (グリード、アカムト)";
        $armor[16].textContent = "ドスD (キリンU、アカムト)";
        $armor[17].textContent = "ドスE (キリンU)";
        $armor[18].textContent = "ドスF (アカムト)";
    }
    //クシャルダオラ、テオ・テスカトル、キリン亜種
    else if($monster1.value == '1F' || $monster1.value == '20' || $monster1.value == '23'){
        weaponKinds[0] = "王剣斧";
        weaponKinds[1] = "輝剣、ラスティクレイモア";
        weaponKinds[2] = "ゴールドマロウ、祭囃子・無形ノ調";
        weaponKinds[3] = "シルバープロミネンス、シルバールーク";
        weaponKinds[4] = "星砕きプロメテオル、ゴルトリコーダー";
        weaponKinds[5] = "殲滅と破壊の剛弓、カオスウイング";

        $armor[1].textContent = "オリジナルA (エスカドラ)";
        $armor[2].textContent = "オリジナルB (エスカドラ)";
        $armor[3].textContent = "オリジナルC (エスカドラ)";
        $armor[4].textContent = "オリジナルD (エスカドラ)";
        $armor[5].textContent = "オリジナルE (エスカドラ)";
        $armor[6].textContent = "オリジナルF (エスカドラ)";
        $armor[7].textContent = "トライA (リベリオン)";
        $armor[8].textContent = "トライB (リベリオン)";
        $armor[9].textContent = "トライC (リベリオン)";
        $armor[10].textContent = "トライD (リベリオン)";
        $armor[11].textContent = "トライE (リベリオン)";
        $armor[12].textContent = "トライF (リベリオン)";
        $armor[13].textContent = "ドスA (ドラゴンX)";
        $armor[14].textContent = "ドスB (ドラゴンX)";
        $armor[15].textContent = "ドスC (ドラゴンX)";
        $armor[16].textContent = "ドスD (ドラゴンX)";
        $armor[17].textContent = "ドスE (ドラゴンX)";
        $armor[18].textContent = "ドスF (ドラゴンX)";
    }
    else{
        weaponKinds[0] = "";
        weaponKinds[1] = "";
        weaponKinds[2] = "";
        weaponKinds[3] = "";
        weaponKinds[4] = "";
        weaponKinds[5] = "";

        $armor[1].textContent = "オリジナルA";
        $armor[2].textContent = "オリジナルB";
        $armor[3].textContent = "オリジナルC";
        $armor[4].textContent = "オリジナルD";
        $armor[5].textContent = "オリジナルE";
        $armor[6].textContent = "オリジナルF";
        $armor[7].textContent = "トライA";
        $armor[8].textContent = "トライB";
        $armor[9].textContent = "トライC";
        $armor[10].textContent = "トライD";
        $armor[11].textContent = "トライE";
        $armor[12].textContent = "トライF";
        $armor[13].textContent = "ドスA";
        $armor[14].textContent = "ドスB";
        $armor[15].textContent = "ドスC";
        $armor[16].textContent = "ドスD";
        $armor[17].textContent = "ドスE";
        $armor[18].textContent = "ドスF";
    }
    $weaponKinds.textContent = weaponKinds[parseInt($weapon.value,16)];
}
function textSetM2(){
    if($monster2.value == ""){
        for( i=0; i<8; i++){
            document.getElementsByClassName("$m2Name")[i].textContent = "モンスター";
            }
    }else{
        for( i=0; i<8; i++){
            document.getElementsByClassName("$m2Name")[i].textContent = monsterName[parseInt($monster2.value,16)];
            }
    }
}

//出土武具、モンスターテキストの変更
$monster1.onchange = function(){
    textSetM1();
    removeOutput();
}
$monster2.onchange = function(){
    textSetM2();
    removeOutput();
}

//エリア横のマップ名セット
function setIniM1(num){
    if(num == ""){
        document.getElementsByClassName("add")[0].textContent = "";
    }else{
        document.getElementsByClassName("add")[0].textContent = areaName[parseInt(num,16)];
    }
}
function setIniM2(num){
    if(num == ""){
        document.getElementsByClassName("add")[1].textContent = "";
    }else{
        document.getElementsByClassName("add")[1].textContent = areaName[parseInt(num,16)];
    }
}
function setSleepM1(num){
    if(num == ""){
        document.getElementsByClassName("add")[4].textContent = "";
    }else{
        document.getElementsByClassName("add")[4].textContent = areaName[parseInt(num,16)];
    }
}
function setSleepM2(num){
    if(num == ""){
        document.getElementsByClassName("add")[5].textContent = "";
    }else{
        document.getElementsByClassName("add")[5].textContent = areaName[parseInt(num,16)];
    }
}
function setMealM1(num){
    if(num == ""){
        document.getElementsByClassName("add")[2].textContent = "";
    }else{
        document.getElementsByClassName("add")[2].textContent = areaName[parseInt(num,16)];
    }
}
function setMealM2(num){
    if(num == ""){
        document.getElementsByClassName("add")[3].textContent = "";
    }else{
        document.getElementsByClassName("add")[3].textContent = areaName[parseInt(num,16)];
    }
}
//2つから受付パス
function passIniM1(){
    switch($ini1.value){
        case "": setIniM1(""); break;
        case "01": setIniM1($area1.value); break;
        case "02": setIniM1($area2.value); break;
        case "03": setIniM1($area3.value); break;
        case "04": setIniM1($area4.value); break;
        case "05": setIniM1($area5.value); break;
    }
}
function passIniM2(){
    switch($ini2.value){
        case "": setIniM2(""); break;
        case "01": setIniM2($area1.value); break;
        case "02": setIniM2($area2.value); break;
        case "03": setIniM2($area3.value); break;
        case "04": setIniM2($area4.value); break;
        case "05": setIniM2($area5.value); break;
    }
}
function passSleepM1(){
    switch($sleep1.value){
        case "": setSleepM1(""); break;
        case "01": setSleepM1($area1.value); break;
        case "02": setSleepM1($area2.value); break;
        case "03": setSleepM1($area3.value); break;
        case "04": setSleepM1($area4.value); break;
        case "05": setSleepM1($area5.value); break;
    }
}
function passSleepM2(){
    switch($sleep2.value){
        case "": setSleepM2(""); break;
        case "01": setSleepM2($area1.value); break;
        case "02": setSleepM2($area2.value); break;
        case "03": setSleepM2($area3.value); break;
        case "04": setSleepM2($area4.value); break;
        case "05": setSleepM2($area5.value); break;
    }
}
function passMealM1(){
    switch($meal1.value){
        case "": setMealM1(""); break;
        case "01": setMealM1($area1.value); break;
        case "02": setMealM1($area2.value); break;
        case "03": setMealM1($area3.value); break;
        case "04": setMealM1($area4.value); break;
        case "05": setMealM1($area5.value); break;
    }
}
function passMealM2(){
    switch($meal2.value){
        case "": setMealM2(""); break;
        case "01": setMealM2($area1.value); break;
        case "02": setMealM2($area2.value); break;
        case "03": setMealM2($area3.value); break;
        case "04": setMealM2($area4.value); break;
        case "05": setMealM2($area5.value); break;
    }
}
//マップ種類変更
function area1Change(){
    passIniM1();
    passIniM2();
    passSleepM1();
    passSleepM2();
    passMealM1();
    passMealM2();
}
function area2Change(){
    passIniM1();
    passIniM2();
    passSleepM1();
    passSleepM2();
    passMealM1();
    passMealM2();
}
function area3Change(){
    passIniM1();
    passIniM2();
    passSleepM1();
    passSleepM2();
    passMealM1();
    passMealM2();
}
function area4Change(){
    passIniM1();
    passIniM2();
    passSleepM1();
    passSleepM2();
    passMealM1();
    passMealM2();
}
function area5Change(){
    passIniM1();
    passIniM2();
    passSleepM1();
    passSleepM2();
    passMealM1();
    passMealM2();
}
$area1.onchange = function(){
    area1Change();
    removeOutput();
}
$area2.onchange = function(){
    area2Change();
    removeOutput();
}
$area3.onchange = function(){
    area3Change();
    removeOutput();
}
$area4.onchange = function(){
    area4Change();
    removeOutput();
}
$area5.onchange = function(){
    area5Change();
    removeOutput();
}
//選択値変更
$ini1.onchange = function(){
    passIniM1();
    removeOutput();
}
$ini2.onchange = function(){
    passIniM2();
    removeOutput();
}
$sleep1.onchange = function(){
    passSleepM1();
    removeOutput();
}
$sleep2.onchange = function(){
    passSleepM2();
    removeOutput();
}
$meal1.onchange = function(){
    passMealM1();
    removeOutput();
}
$meal2.onchange = function(){
    passMealM2();
    removeOutput();
}

//モンスター関連の選択初期化
function monster1None(){
    $monster1.value = "";
    $ini1.value = "";
    $sleep1.value = "";
    $meal1.value = "";
    $area1Posi1.value = "";
    $area2Posi1.value = "";
    $area3Posi1.value = "";
    $area4Posi1.value = "";
    $area5Posi1.value = "";
    textSetM1();
}
function monster2None(){
    $monster2.value = "";
    $ini2.value = "";
    $sleep2.value = "";
    $meal2.value = "";
    $area1Posi2.value = "";
    $area2Posi2.value = "";
    $area3Posi2.value = "";
    $area4Posi2.value = "";
    $area5Posi2.value = "";
    textSetM2();
}

//マップ関連の選択初期化
function area1None(){
    $area1.value = "";
    $area1In.value = "";
    $area1Out.value = "";
    $area1Posi1.value = "";
    $area1Posi2.value = "";
    area1Change();
}
function area2None(){
    $area2.value = "";
    $area2In.value = "";
    $area2Out.value = "";
    $area2Posi1.value = "";
    $area2Posi2.value = "";
    area2Change();
}
function area3None(){
    $area3.value = "";
    $area3In.value = "";
    $area3Out.value = "";
    $area3Posi1.value = "";
    $area3Posi2.value = "";
    area3Change();
}
function area4None(){
    $area4.value = "";
    $area4In.value = "";
    $area4Out.value = "";
    $area4Posi1.value = "";
    $area4Posi2.value = "";
    area4Change();
}
function area5None(){
    $area5.value = "";
    $area5In.value = "";
    $area5Out.value = "";
    $area5Posi1.value = "";
    $area5Posi2.value = "";
    area5Change();
}


//マップ(Area) hidden
function mapNumChange(){
    let num = 0;
    switch($mapNum.value){
        case "" :
            num = 0;
            area1None();
            area2None();
            area3None();
            area4None();
            area5None();
            document.getElementById("hiddenMap").hidden = true;
            break;
        case "2" :
            num = 2;
            area3None();
            area4None();
            area5None();
            document.getElementById("hiddenMap").hidden = true;
            break;
        case "3" :
            num = 3;
            area4None();
            area5None();
            document.getElementById("hiddenMap").hidden = true;
            break;
        case "4" :
            num = 4;
            area5None();
            document.getElementById("hiddenMap").hidden = false;
            break;
        case "5" :
            num = 5;
            document.getElementById("hiddenMap").hidden = false;
            break;
    }

    for( i=0; i<num; i++){
        document.getElementsByClassName("hiddenArea")[i].hidden = false;
    }
    for( i=4; i>=num; i--){
        document.getElementsByClassName("hiddenArea")[i].hidden = true;
    }
}
$mapNum.onchange = function(){
    mapNumChange();
    removeOutput();
}

//モンスター hidden
function hiddenSetTrueM1(){
    for( i=0; i<9; i++){
        document.getElementsByClassName("hiddenM1")[i].hidden = true;
    }
}
function hiddenSetTrueM2(){
    for( i=0; i<9; i++){
        document.getElementsByClassName("hiddenM2")[i].hidden = true;
    }
}
function hiddenSetFalseM1(){
    for( i=0; i<9; i++){
        document.getElementsByClassName("hiddenM1")[i].hidden = false;
    }
}
function hiddenSetFalseM2(){
    for( i=0; i<9; i++){
        document.getElementsByClassName("hiddenM2")[i].hidden = false;
    }
}
function monsterNumChange(){
    switch($monsterNum.value){
        case "":
            hiddenSetTrueM1();
            hiddenSetTrueM2();
            monster1None();
            monster2None();
            break;
        case "1":
            hiddenSetFalseM1();
            hiddenSetTrueM2();
            monster2None();
            break;
        case "2":
            hiddenSetFalseM1();
            hiddenSetFalseM2();
            break;
    }
}
$monsterNum.onchange = function(){
    monsterNumChange();
    removeOutput();
}

//クエスト初期レベル、現在レベル
function LevSet(){
    let Lev1 = 0;
    let Lev2 = 0;
    let cnt = 0;
    switch($monster1.value){
        case "07": Lev1 = 51; cnt+=1; break;
        case "08": Lev1 = 51; cnt+=1; break;
        case "0B": Lev1 = 43; cnt+=1; break;
        case "0C": Lev1 = 53; cnt+=1; break;
        case "10": Lev1 = 48; cnt+=1; break;
        case "13": Lev1 = 53; cnt+=1; break;
        case "1C": Lev1 = 58; cnt+=1; break;
        case "1D": Lev1 = 58; cnt+=1; break;
        case "1E": Lev1 = 53; cnt+=1; break;
        case "1F": Lev1 = 54; cnt+=1; break;
        case "20": Lev1 = 58; cnt+=1; break;
        case "22": Lev1 = 51; cnt+=1; break;
        case "23": Lev1 = 56; cnt+=1; break;
        case "26": Lev1 = 53; cnt+=1; break;
        case "27": Lev1 = 53; cnt+=1; break;
        case "2C": Lev1 = 51; cnt+=1; break;
        case "30": Lev1 = 46; cnt+=1; break;
        case "31": Lev1 = 53; cnt+=1; break;
    }
    switch($monster2.value){
        case "07": Lev2 = 51; cnt+=1; break;
        case "08": Lev2 = 51; cnt+=1; break;
        case "0B": Lev2 = 43; cnt+=1; break;
        case "0C": Lev2 = 53; cnt+=1; break;
        case "10": Lev2 = 48; cnt+=1; break;
        case "13": Lev2 = 53; cnt+=1; break;
        case "1C": Lev2 = 58; cnt+=1; break;
        case "1D": Lev2 = 58; cnt+=1; break;
        case "1E": Lev2 = 53; cnt+=1; break;
        case "1F": Lev2 = 54; cnt+=1; break;
        case "20": Lev2 = 58; cnt+=1; break;
        case "22": Lev2 = 51; cnt+=1; break;
        case "23": Lev2 = 56; cnt+=1; break;
        case "26": Lev2 = 53; cnt+=1; break;
        case "27": Lev2 = 53; cnt+=1; break;
        case "2C": Lev2 = 51; cnt+=1; break;
        case "30": Lev2 = 46; cnt+=1; break;
        case "31": Lev2 = 53; cnt+=1; break;
    }
    if(cnt==0){
        return "";
    }
    return Math.floor((Lev1 + Lev2) / cnt);
}
function LevCheck(val){
    if(val >= 1 && val <= 100){
        return val;
    }else{
        let tmp = LevSet();
        if(tmp == ""){
            return "";
        }
        return tmp;
    }
}
$iniLev.onchange = function(){
    $iniLev.value = LevCheck($iniLev.value);
    removeOutput();
}
$curLev.onchange = function(){
    $curLev.value = LevCheck($curLev.value);
    removeOutput();
}

//お宝フラグ
let RARE = "00";
$RARE.onchange = function(){
    if(RARE == "00"){
        RARE = "01";
    }
    else if(RARE == "01"){
        RARE = "00";
    }
    removeOutput();
}

//自動設定ボタン
const btnAuto = document.getElementById("$btnAuto");
btnAuto.addEventListener("click", function(){
    $iniLev.value = LevSet();
    $curLev.value = LevSet();
    $iniLev.value = LevCheck($iniLev.value);
    $curLev.value = LevCheck($curLev.value);
    $frenzyM1.value = "00";
    $frenzyM2.value = "00";
    $frenzyM3.value = "00";
    $RARE.checked = false;
    RARE = "00";
    removeOutput();
});

//リセットボタン
const btnReset = document.getElementById("$btnReset");
btnReset.addEventListener("click", function(){
    $frames.value = "";
    $Author.value = "";
    AuthorChange();
    $questID.value = "";
    $weapon.value = "";
    $armor.value = "";
    $armorType.value = "";
    $mapNum.value = "";
    mapNumChange();
    $monsterNum.value = "";
    monsterNumChange();
    $iniLev.value = "";
    $curLev.value = "";
    $RARE.checked = false;
    RARE = "00";
    $frenzyM1.value = "";
    $frenzyM2.value = "";
    $frenzyM3.value = "";

    removeOutput();

});

//サンプルボタン
const btnSample = document.getElementById("$btnSample");
btnSample.addEventListener("click", function(){
    $frames.value = "10";
    $Author.value ="たっちゃん♭"
    AuthorChange();
    generationID();
    $weapon.value = "05";
    $armor.value = "05";
    $armorType.value = "00";
    $mapNum.value = "4";

    $monsterNum.value = "2";
    $monster1.value = "30";
    $monster2.value = "13";
    $ini1.value = "03";
    $ini2.value = "01";
    $sleep1.value = "03";
    $sleep2.value = "02";
    $meal1.value = "02";
    $meal2.value = "03";
    $area1Posi1.value = "00";
    $area1Posi2.value = "01";
    $area2Posi1.value = "00";
    $area2Posi2.value = "02";
    $area3Posi1.value = "01";
    $area3Posi2.value = "01";
    $area4Posi1.value = "00";
    $area4Posi2.value = "00";
    monsterNumChange();
    textSetM1();
    textSetM2();
    
    $area1.value = "03";
    $area1In.value = "03";
    $area1Out.value = "06";
    $area2.value = "04";
    $area2In.value = "01";
    $area2Out.value = "03";
    $area3.value = "07";
    $area3In.value = "04";
    $area3Out.value = "06";
    $area4.value = "0A";
    $area4In.value = "06";
    $area4Out.value = "02";
    mapNumChange();
    
    $iniLev.value = "49";
    $curLev.value = "100";
    $RARE.checked = true;
    RARE = "01";
    $frenzyM1.value = "03";
    $frenzyM2.value = "04";
    $frenzyM3.value = "05";

    removeOutput();
});


//outputの削除
function removeOutput(){
    if(count != 0){
        $coppy1.value = "";
        $coppy2.value = "";
        for(i=0; i<76; i++){
            let dd_element = document.getElementById("$output"+i);
            dd_element.remove();
        }
        count = 0;
        document.getElementById("$btnHidden").hidden = true;
    } 
}

//コード削除ボタン
const btnDelete = document.getElementById("$btnDelete");
btnDelete.addEventListener("click", function(){
    removeOutput();
});

//情報コピーボタン
const btnCoppyInformation = document.getElementById("$btnCoppyInformation");
btnCoppyInformation.addEventListener("click", function(){
    document.getElementById("$textareaHidden").hidden = false;

    var textarea = document.getElementById("$coppy2");
    // 文字をすべて選択
    textarea.select();
    // コピー
    document.execCommand("copy");

    document.getElementById("$textareaHidden").hidden = true;

    alert("『クエスト情報』をクリップボードにコピーしました");
});

//コードコピーボタン
const btnCoppyCode = document.getElementById("$btnCoppyCode");
btnCoppyCode.addEventListener("click", function(){

    document.getElementById("$textareaHidden").hidden = false;

    var textarea = document.getElementById("$coppy1");
    // 文字をすべて選択
    textarea.select();
    // コピー
    document.execCommand("copy");

    document.getElementById("$textareaHidden").hidden = true;

    alert("『コード』をクリップボードにコピーしました");
});

//残りのチェンジファンクション
$area1In.onchange = function(){
    removeOutput();
}
$area1Out.onchange = function(){
    removeOutput();
}
$area1Posi1.onchange = function(){
    removeOutput();
}
$area1Posi2.onchange = function(){
    removeOutput();
}
$area2In.onchange = function(){
    removeOutput();
}
$area2Out.onchange = function(){
    removeOutput();
}
$area2Posi1.onchange = function(){
    removeOutput();
}
$area2Posi2.onchange = function(){
    removeOutput();
}
$area3In.onchange = function(){
    removeOutput();
}
$area3Out.onchange = function(){
    removeOutput();
}
$area3Posi1.onchange = function(){
    removeOutput();
}
$area3Posi2.onchange = function(){
    removeOutput();
}
$area4In.onchange = function(){
    removeOutput();
}
$area4Out.onchange = function(){
    removeOutput();
}
$area4Posi1.onchange = function(){
    removeOutput();
}
$area4Posi2.onchange = function(){
    removeOutput();
}
$area5In.onchange = function(){
    removeOutput();
}
$area5Out.onchange = function(){
    removeOutput();
}
$area5Posi1.onchange = function(){
    removeOutput();
}
$area5Posi2.onchange = function(){
    removeOutput();
}
$frenzyM1.onchange = function(){
    removeOutput();
}
$frenzyM2.onchange = function(){
    removeOutput();
}
$frenzyM3.onchange = function(){
    removeOutput();
}
$weapon.onchange = function(){
    removeOutput();
    $weaponKinds.textContent = weaponKinds[parseInt($weapon.value,16)];
}
$armor.onchange = function(){
    removeOutput();
}
$armorType.onchange = function(){
    removeOutput();
}


//ロード時
window.addEventListener("load",function(){
    for( i=0; i<5; i++){
        document.getElementsByClassName("hiddenArea")[i].hidden = true; 
    }
    hiddenSetTrueM1();
    hiddenSetTrueM2();

    document.getElementById("hiddenMap").hidden = true;
    document.getElementById("$btnHidden").hidden = true;
    document.getElementById("$textareaHidden").hidden = true;
});

//コード生成ボタン
const btnGeneration = document.getElementById("$btnGeneration");
btnGeneration.addEventListener("click", function(){

    //隠れる要素は変数格納が必要か(値を00にしたいので)
    let monster1,ini1,sleep1,meal1,area1Posi1,area2Posi1,area3Posi1,area4Posi1,area5Posi1;
    let monster2,ini2,sleep2,meal2,area1Posi2,area2Posi2,area3Posi2,area4Posi2,area5Posi2;
    let area1,area1In,area1Out;
    let area2,area2In,area2Out;
    let area3,area3In,area3Out;
    let area4,area4In,area4Out;
    let area5,area5In,area5Out;
    //未選択箇所チェックの回避用
    let flgMonsterNum = 0;
    let flgArea3 = 0;
    let flgArea4 = 0;
    let flgArea5 = 0;

    //モンスター数、総マップ数の隠れた箇所を正規値で自動入力
    switch($monsterNum.value){
        case "": break;
        case "1":
            monster2 = "00";
            ini2 = "00";
            sleep2 = "00";
            meal2 = "00";
            area1Posi2 = "00";
            area2Posi2 = "00";
            area3Posi2 = "00";
            area4Posi2 = "00";
            area5Posi2 = "00";
            flgMonsterNum = 1;
            break;
    }
    switch($mapNum.value){
        case "": break;
        case "2":
            area3 = "00"; area3In = "01"; area3Out = "01"; flgArea3 = 1;
            area4 = "00"; area4In = "01"; area4Out = "01"; flgArea4 = 1;
            area5 = "00"; area5In = "01"; area5Out = "01"; flgArea5 = 1;
            break;
        case "3":
            area4 = "00"; area4In = "01"; area4Out = "01"; flgArea4 = 1;
            area5 = "00"; area5In = "01"; area5Out = "01"; flgArea5 = 1;
            break;
        case "4":
            area5 = "00"; area5In = "01"; area5Out = "01"; flgArea5 = 1;
            break;
    }


    //未選択箇所をチェック
    if($frames.value == "" || $questID.value == "" ||$weapon.value == "" || $armor.value == "" || $armorType.value == "" || $monsterNum.value == "" || $monster1.value == "" || ($monster2.value==""&&flgMonsterNum==0) || $ini1.value==""||($ini2.value==""&&flgMonsterNum==0)||$sleep1.value==""||($sleep2.value==""&&flgMonsterNum==0)||$meal1.value==""||($meal2.value==""&&flgMonsterNum==0)||$mapNum.value==""||$area1.value==""||$area2.value==""||($area3.value==""&&flgArea3==0)||($area4.value==""&&flgArea4==0)||($area5.value==""&&flgArea5==0)||$area1In.value==""||$area2In.value==""||($area3In.value==""&&flgArea3==0)||($area4In.value==""&&flgArea4==0)||($area5In.value==""&&flgArea5==0)||$area1Out.value==""||$area2Out.value==""||($area3Out.value==""&&flgArea3==0)||($area4Out.value==""&&flgArea4==0)||($area5Out.value==""&&flgArea5==0)||$area1Posi1.value==""||($area1Posi2.value==""&&flgMonsterNum==0)||$area2Posi1.value==""||($area2Posi2.value==""&&flgMonsterNum==0)||($area3Posi1.value==""&&flgArea3==0)||($area3Posi2.value==""&&flgMonsterNum==0&&flgArea3==0)||($area4Posi1.value==""&&flgArea4==0)||($area4Posi2.value==""&&flgMonsterNum==0&&flgArea4==0)||($area5Posi1.value==""&&flgArea5==0)||($area5Posi2.value==""&&flgMonsterNum==0&&flgArea5==0)||$iniLev.value==""||$curLev.value==""||$frenzyM1.value==""||$frenzyM2.value==""||$frenzyM3.value==""){
        alert("\"エラー\"未選択箇所があります");
    }else{

        //値が入っている事が分かったので変数に代入
        monster1 = $monster1.value;
        ini1 = $ini1.value;
        sleep1 = $sleep1.value;
        meal1 = $meal1.value;

        if(flgMonsterNum == 0){
            monster2 = $monster2.value;
            ini2 = $ini2.value;
            sleep2 = $sleep2.value;
            meal2 = $meal2.value;
        }

        if($area1Posi1.value != ""){
            area1Posi1 = $area1Posi1.value;
        }else{
            area1Posi1 = "00";
        }
        if($area2Posi1.value != ""){
            area2Posi1 = $area2Posi1.value;
        }else{
            area2Posi1 = "00";
        }
        if($area3Posi1.value != ""){
            area3Posi1 = $area3Posi1.value;
        }else{
            area3Posi1 = "00";
        }
        if($area4Posi1.value != ""){
            area4Posi1 = $area4Posi1.value;
        }else{
            area4Posi1 = "00";
        }
        if($area5Posi1.value != ""){
            area5Posi1 = $area5Posi1.value;
        }else{
            area5Posi1 = "00";
        }

        if($area1Posi2.value != ""){
            area1Posi2 = $area1Posi2.value;
        }else{
            area1Posi2 = "00";
        }
        if($area2Posi2.value != ""){
            area2Posi2 = $area2Posi2.value;
        }else{
            area2Posi2 = "00";
        }
        if($area3Posi2.value != ""){
            area3Posi2 = $area3Posi2.value;
        }else{
            area3Posi2 = "00";
        }
        if($area4Posi2.value != ""){
            area4Posi2 = $area4Posi2.value;
        }else{
            area4Posi2 = "00";
        }
        if($area5Posi2.value != ""){
            area5Posi2 = $area5Posi2.value;
        }else{
            area5Posi2 = "00";
        }

        area1 = $area1.value;
        area1In = $area1In.value;
        area1Out = $area1Out.value;

        area2 = $area2.value;
        area2In = $area2In.value;
        area2Out = $area2Out.value;
        
        if(flgArea3 == 0){
            area3 = $area3.value;
            area3In = $area3In.value;
            area3Out = $area3Out.value;
        }
        if(flgArea4 == 0){
            area4 = $area4.value;
            area4In = $area4In.value;
            area4Out = $area4Out.value;
        }
        if(flgArea5 == 0){
            area5 = $area5.value;
            area5In = $area5In.value;
            area5Out = $area5Out.value;
        }

        //最終エリアフラグ
        let endFlag = new Array("00","00","00","00");
        switch($mapNum.value){
            case "2": endFlag[0] = "02"; break;
            case "3": endFlag[1] = "02"; break;
            case "4": endFlag[2] = "02"; break;
            case "5": endFlag[3] = "02"; break;
        }

        //初期レベル、現在レベル
        let iniLev;
        let curLev;

        iniLev = document.getElementById("$iniLev").value;
        iniLev = parseInt(iniLev,10);
        iniLev = iniLev.toString(16).toUpperCase();
        if(iniLev.length == 1){
            iniLev = "0" + iniLev;
        }

        curLev = document.getElementById("$curLev").value;
        curLev = parseInt(curLev,10);
        curLev = curLev.toString(16).toUpperCase();
        if(curLev.length == 1){
            curLev = "0" + curLev;
        }

        //配列
        let output = new Array(76);

        //開始アドレス
        let startAddress;
        switch($frames.value){
            case '1': startAddress = 0xED848C; break;
            case '2': startAddress = 0xED85BC; break;
            case '3': startAddress = 0xED86EC; break;
            case '4': startAddress = 0xED881C; break;
            case '5': startAddress = 0xED894C; break;
            case '6': startAddress = 0xED8A7C; break;
            case '7': startAddress = 0xED8BAC; break;
            case '8': startAddress = 0xED8CDC; break;
            case '9': startAddress = 0xED8E0C; break;
            case '10': startAddress = 0xED8F3C; break;
        }

        //クエスト作成者名
        for(i=0,j=0; i<12; i+=2,j+=1){
            
            output[j] = ( "00" + startAddress.toString(16).toUpperCase() + " " + AuthorName[i+1] + AuthorName[i]);

            startAddress += 4;
        }

        //クエスト識別 ID
        output[6] = ( "00" + startAddress.toString(16).toUpperCase() + " " + questID1);
        startAddress += 4;
        output[7] = ( "00" + startAddress.toString(16).toUpperCase() + " " + questID2);
        startAddress += 4;

        //空白
        output[8] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000000");
        startAddress += 4;

        //出土武器、防具、部位
        output[9] = ( "00" + startAddress.toString(16).toUpperCase() + " " + $armorType.value + $armor.value + $weapon.value + "00");
        startAddress += 4;

        //モンスター1体目
        output[10] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "000000" + monster1);
        startAddress += 4;

        //01
        output[11] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000001");
        startAddress += 4;
        
        //モンスター1 初期エリア
        output[12] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "0007" + ini1 + "FF");
        startAddress += 4;

        //空白 * 7
        for(i=0; i<7; i++){
            output[13+i] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000000");
            startAddress += 4;
        }
        
        //モンスター2体目
        output[20] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "000000" + monster2);
        startAddress += 4;

        //01
        output[21] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000001");
        startAddress += 4;

        //モンスター2 初期エリア
        output[22] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "0007" + ini2 + "FF");
        startAddress += 4;

        //以下3セット
        for(cnt=0,j=0;j<3;j++){
            //空白 * 8
            for(i=0;i<8;i++){
                output[23+cnt] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000000");
                startAddress += 4;
                cnt ++;
            }

            //01
            output[23+cnt] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000001");
            startAddress += 4;
            cnt++;

            //FF000700
            output[23+cnt] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "0007" + "00" + "FF");
            startAddress += 4;
            cnt++;
        }

        //空白 * 7
        for(i=0;i<7;i++){
            output[53+i] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000000");
            startAddress += 4;
        }

        //モンスター1　食事、休眠、位置、位置
        output[60] = ( "00" + startAddress.toString(16).toUpperCase() + " " + area2Posi1 + area1Posi1 + sleep1 + meal1);
        startAddress += 4;

        //モンスター1　位置、位置、位置、モンスター2食事
        output[61] = ( "00" + startAddress.toString(16).toUpperCase() + " " + meal2 + area5Posi1 + area4Posi1 + area3Posi1);
        startAddress += 4;

        //モンスター2　休眠、位置、位置、位置
        output[62] = ( "00" + startAddress.toString(16).toUpperCase() + " " + area3Posi2 + area2Posi2 + area1Posi2 + sleep2);
        startAddress += 4;

        //モンスター2　位置、位置、00、00
        output[63] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00" + "00" + area5Posi2 + area4Posi2);
        startAddress += 4;

        //空白 * 5
        for(i=0;i<5;i++){
            output[64+i] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00000000");
            startAddress += 4;
        }



        //エリア1マップID、入口、出口、最終エリアフラグ
        output[69] = ( "00" + startAddress.toString(16).toUpperCase() + " " + endFlag[0] + area1Out + area1In + area1);
        startAddress += 4;

        //エリア2マップID、入口、出口、最終エリアフラグ
        output[70] = ( "00" + startAddress.toString(16).toUpperCase() + " " + endFlag[1] + area2Out + area2In + area2);
        startAddress += 4;

        //エリア3マップID、入口、出口、最終エリアフラグ
        output[71] = ( "00" + startAddress.toString(16).toUpperCase() + " " + endFlag[2] + area3Out + area3In + area3);
        startAddress += 4;

        //エリア4マップID、入口、出口、最終エリアフラグ
        output[72] = ( "00" + startAddress.toString(16).toUpperCase() + " " + endFlag[3] + area4Out + area4In + area4);
        startAddress += 4;

        //エリア5マップID、入口、出口、最終エリアフラグ
        output[73] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00" + area5Out + area5In + area5);
        startAddress += 4;

        //初期レベル、現在レベル、お宝(RARE)フラグ、モンス1狂竜化
        output[74] = ( "00" + startAddress.toString(16).toUpperCase() + " " + $frenzyM1.value + RARE + curLev + iniLev);
        startAddress += 4;

        //モンス2狂竜化、乱入モンス狂竜化、00、00
        output[75] = ( "00" + startAddress.toString(16).toUpperCase() + " " + "00" + "00" + $frenzyM3.value + $frenzyM2.value);
        startAddress += 4;


        
        removeOutput();

        //出力、生成
        count += 1;

        document.getElementById("$btnHidden").hidden = false;

        for(i=0; i<76; i++){
        // id属性で要素を取得
        let div_element = document.getElementById('$output');

        // 新しいHTML要素を作成
        let new_element = document.createElement('dd');
        new_element.textContent = output[i];
        new_element.id = "$output"+i;

        // 指定した要素の中の末尾に挿入
        div_element.appendChild(new_element);

        //$coppy1
        $coppy1.value = $coppy1.value + output[i] + "\n";
        }
        
        
        //情報info
        let info = new Array("【MH4クエスト情報】","\n",$Author.value,"\n",$questID.value,"\n",$weapon[parseInt($weapon.value,16)+1].textContent,"\n",$armor[parseInt($armor.value,16)+1].textContent," ",$armorType[parseInt($armorType.value,16)+1].textContent,"\n",monsterName[parseInt(monster1,16)]," ",ini1,",",meal1,",",sleep1,"\n",monsterName[parseInt(monster2,16)]," ",ini2,",",meal2,",",sleep2,"\n",areaName[parseInt(area1,16)]," ",area1In,",",area1Out,",",area1Posi1,",",area1Posi2,"\n",areaName[parseInt(area2,16)]," ",area2In,",",area2Out,",",area2Posi1,",",area2Posi2,"\n",areaName[parseInt(area3,16)]," ",area3In,",",area3Out,",",area3Posi1,",",area3Posi2,"\n",areaName[parseInt(area4,16)]," ",area4In,",",area4Out,",",area4Posi1,",",area4Posi2,"\n",areaName[parseInt(area5,16)]," ",area5In,",",area5Out,",",area5Posi1,",",area5Posi2,"\n","最終エリア: ",$mapNum.value,"\n","初期レベル: ",$iniLev.value);
        for(i=0; i<info.length; i++){

            $coppy2.value = $coppy2.value + info[i];
        }


        


    }
});