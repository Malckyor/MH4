//セレクトの変数データ
let selectValue = {
  monster1:'',
  monster2:'',
  weapon:'',
  armor:'',
  armorType:'',
  level:'',
  areaType:['','','','',''],
  areaIn:['','','','',''],
  areaOut:['','','','',''],
  areaMonster1:['','','','',''],
  areaMonster2:['','','','',''],
  areaIniM1:'', //数字で0,1,2,3,4が入る
  areaIniM2:'',
  areaSleepM1:'',
  areaSleepM2:'',
  areaMealM1:'',
  areaMealM2:'',
  author:['0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000'],
  questID:'',
  areaFlag:[false,false,false,false,false] //エリアの形が決まっているかを識別する
}
//モンスターデータ
const monsterData = new Map(
  [
    ['07', {unit:'2', level:'90' , artifact:'T2' , choseableArea:['02','03','04','06']          , frenzy:'03', value:'07', text:'イャンクック'}],
    ['08', {unit:'2', level:'90' , artifact:'T10', choseableArea:['02','03','04','06']          , frenzy:'03', value:'08', text:'イャンクック亜種'}],
    ['0B', {unit:'2', level:'98' , artifact:'T6' , choseableArea:['02','03','04','07','0B','0C'], frenzy:'09', value:'0B', text:'ティガレックス'}],
    ['0C', {unit:'2', level:'94' , artifact:'T11', choseableArea:['02','03','04','07','0B','0C'], frenzy:'03', value:'0C', text:'ティガレックス亜種'}],
    ['10', {unit:'2', level:'90' , artifact:'T9' , choseableArea:['02','04','06','0B','0C']     , frenzy:'03', value:'10', text:'ドスランポス'}],
    ['13', {unit:'2', level:'120', artifact:'T12', choseableArea:['02','03','04','07','0B','0C'], frenzy:'09', value:'13', text:'ラージャン'}],
    ['1C', {unit:'1', level:'98' , artifact:'T3' , choseableArea:['02','03','04','06']          , frenzy:'00', value:'1C', text:'ゴア・マガラ'}],
    ['1D', {unit:'1', level:'120', artifact:'T8' , choseableArea:['02','04','06']               , frenzy:'00', value:'1D', text:'シャガル・マガラ'}],
    ['1E', {unit:'2', level:'101', artifact:'T12', choseableArea:['02','03','04','06','0B','0C'], frenzy:'03', value:'1E', text:'イャンガルルガ'}],
    ['1F', {unit:'1', level:'120', artifact:'T1' , choseableArea:['02','03','04']               , frenzy:'00', value:'1F', text:'クシャルダオラ'}],
    ['20', {unit:'1', level:'120', artifact:'T8' , choseableArea:['02','03','04']               , frenzy:'00', value:'20', text:'テオ・テスカトル'}],
    ['22', {unit:'2', level:'120', artifact:'T5' , choseableArea:['02','03','04','07','0B']     , frenzy:'00', value:'22', text:'キリン'}],
    ['23', {unit:'2', level:'120', artifact:'T1' , choseableArea:['02','03','04','07','0B']     , frenzy:'00', value:'23', text:'キリン亜種'}],
    ['26', {unit:'2', level:'98' , artifact:'T10', choseableArea:['02','03','04','06']          , frenzy:'03', value:'26', text:'バサルモス'}],
    ['27', {unit:'2', level:'98' , artifact:'T4' , choseableArea:['02','03','04','06']          , frenzy:'03', value:'27', text:'バサルモス亜種'}],
    ['2C', {unit:'2', level:'101', artifact:'T11', choseableArea:['02','03','04']               , frenzy:'03', value:'2C', text:'ブラキディオス'}],
    ['30', {unit:'2', level:'98' , artifact:'T6' , choseableArea:['02','04','07']               , frenzy:'09', value:'30', text:'ジンオウガ'}],
    ['31', {unit:'2', level:'94' , artifact:'T7' , choseableArea:['02','04','07']               , frenzy:'03', value:'31', text:'ジンオウガ亜種'}],
    ['2A', {unit:'2', level:'120', artifact:'T1' , choseableArea:['02','03','04','07','0B','0C'], frenzy:'09', value:'2A', text:'イビルジョー'}],
    ['58', {unit:'2', level:'94' , artifact:'T5' , choseableArea:['02','03','04','0B','0C']     , frenzy:'09', value:'58', text:'セルレギオス'}],
    ['63', {unit:'2', level:'101', artifact:'T3' , choseableArea:['0B','0C']                    , frenzy:'09', value:'63', text:'ディアブロス'}],
    ['64', {unit:'2', level:'101', artifact:'T7' , choseableArea:['0B','0C']                    , frenzy:'03', value:'64', text:'ディアブロス亜種'}],
    ['67', {unit:'1', level:'120', artifact:'T8' , choseableArea:['02','04','06','0B']          , frenzy:'00', value:'67', text:'オオナズチ'}],
    ['6C', {unit:'2', level:'94' , artifact:'T4' , choseableArea:['04','0B','0C']               , frenzy:'03', value:'6C', text:'ダイミョウザザミ亜種'}]
  ]
);
//出土データ
const artifactData = new Map(
  [
    //モンスター非選択
    ['T0', {
      weapon:[
        'アックス/操虫棍',
        '大剣/太刀',
        '片手剣/双剣',
        'ランス/ガンランス',
        'ハンマー/狩猟笛',
        '弓/ボウガン'
      ],
      armor:[
        'オリジナルA',
        'オリジナルB',
        'オリジナルC',
        'オリジナルD',
        'オリジナルE',
        'オリジナルF',
        'トライA',
        'トライB',
        'トライC',
        'トライD',
        'トライE',
        'トライF',
        'ドスA',
        'ドスB',
        'ドスC',
        'ドスD',
        'ドスE',
        'ドスF'
      ]
    }],
    //クシャルダオラ(1F)、キリン亜種(23)、イビルジョー(2A)
    ['T1', {
      weapon:[
        'スラアク/操虫棍 (激流斧、エイムofトリック)',
        '大剣/太刀 (輝剣、ラスティクレイモア)',
        '片手剣/双剣 (峰山小太刀、祭囃子・無形ノ調)',
        'ランス/ガンランス (シルバープロミネンス、砕牙砲)',
        'ハンマー/狩猟笛 (星砕きプロメテオル、獄琴)',
        '弓/ライト (エクリプスボウ、フリルパラソル)'
      ],
      armor:[
        'オリジナルA (ダマスク)',
        'オリジナルB (ダマスク、デスギア)',
        'オリジナルC (ダマスク、デスギア)',
        'オリジナルD (ダマスク、デスギア)',
        'オリジナルE (ダマスク)',
        'オリジナルF (ダマスク)',
        'トライA (荒天/蒼天)',
        'トライB (荒天/蒼天、デスギア)',
        'トライC (荒天/蒼天、デスギア)',
        'トライD (荒天/蒼天、デスギア)',
        'トライE (荒天/蒼天)',
        'トライF (荒天/蒼天)',
        'ドスA (ミラバルZ)',
        'ドスB (ミラバルZ、デスギア)',
        'ドスC (ミラバルZ、デスギア)',
        'ドスD (ミラバルZ、デスギア)',
        'ドスE (ミラバルZ)',
        'ドスF (ミラバルZ)'
      ]
    }],
    //イャンクック(07)
    ['T2', {
      weapon:[
        'スラアク/操虫棍 (ディーエッジ、エイムofトリック)',
        '大剣/太刀 (41式対飛竜大剣、凍刀)',
        '片手剣/双剣 (マスターバング、ランポスクロウズ)',
        'ランス/ガンランス (合戦槍、フルボルテージ)',
        'ハンマー/狩猟笛 (ウォーバッシュ、ガンズ＝ロック)',
        '弓/ライト (クイーンブラスター、ボルボバレット)'
      ],
      armor:[
        'オリジナルA (アロイ)',
        'オリジナルB (アロイ)',
        'オリジナルC (アロイ)',
        'オリジナルD (アロイ)',
        'オリジナルE (アロイ)',
        'オリジナルF (アロイ)',
        'トライA (ルドロス)',
        'トライB (ルドロス)',
        'トライC (ルドロス)',
        'トライD (ルドロス)',
        'トライE (ルドロス)',
        'トライF (ルドロス)',
        'ドスA (ハンター)',
        'ドスB (ハンター)',
        'ドスC (ハンター)',
        'ドスD (ハンター)',
        'ドスE (ハンター)',
        'ドスF (ハンター)'
      ]
    }],
    //ゴアマガラ(1C)、ディアブロス(63)
    ['T3', {
      weapon:[
        'チャアク/操虫棍 (ディア＝ルテミス、エイムofトリック)',
        '大剣/太刀 (雷剣、成敗刀)',
        '片手剣/双剣 (ヒドゥンエッジ、王双刃)',
        'ランス/ガンランス (バベル、ナナ＝ハウル)',
        'ハンマー/狩猟笛 (ねこハンマー、ウネリシェルン)',
        '弓/ライト (鋼氷馬弓、ベルクーツ)'
      ],
      armor:[
        'オリジナルA (レウス)',
        'オリジナルB (レウス、フルフルU)',
        'オリジナルC (レウス、キリン)',
        'オリジナルD (フルフルU、キリン)',
        'オリジナルE (フルフルU)',
        'オリジナルF (キリン)',
        'トライA (レックス)',
        'トライB (レックス、フルフルU)',
        'トライC (レックス、キリン)',
        'トライD (フルフルU、キリン)',
        'トライE (フルフルU)',
        'トライF (キリン)',
        'ドスA (ゲリョスU)',
        'ドスB (ゲリョスU、フルフルU)',
        'ドスC (ゲリョスU、キリン)',
        'ドスD (フルフルU、キリン)',
        'ドスE (フルフルU)',
        'ドスF (キリン)'
      ]
    }],
    //バサルモス亜種(27)、ダイミョウザザミ亜種(6C)
    ['T4', {
      weapon:[
        'スラアク/操虫棍 (ディア＝ルテミス、ボーンロッド)',
        '大剣/太刀 (ジークムント、飛竜刀)',
        '片手剣/双剣 (ポイズンタバルジン、ギルドナイトセーバー)',
        'ランス/ガンランス (トゥースランス、プリンセスバースト)',
        'ハンマー/狩猟笛 (ヒドゥンブレイカー、ガンズロック)',
        '弓/ヘビィ (プロミネンスボウ、デュエルスタップ)'
      ],
      armor:[
        'オリジナルA (レイア)',
        'オリジナルB (レイア)',
        'オリジナルC (レイア)',
        'オリジナルD (レイア)',
        'オリジナルE (レイア)',
        'オリジナルF (レイア)',
        'トライA (ラギア)',
        'トライB (ラギア)',
        'トライC (ラギア)',
        'トライD (ラギア)',
        'トライE (ラギア)',
        'トライF (ラギア)',
        'ドスA (ザザミ)',
        'ドスB (ザザミ)',
        'ドスC (ザザミ)',
        'ドスD (ザザミ)',
        'ドスE (ザザミ)',
        'ドスF (ザザミ)'
      ]
    }],
    //キリン(22)、セルレギオス(58)
    ['T5', {
      weapon:[
        'スラアク/操虫棍 (王剣斧、セクトハルバー)',
        '大剣/太刀 (雷剣、成敗刀)',
        '片手剣/双剣 (ヒドゥンエッジ、王双刃)',
        'ランス/ガンランス (バベル、ナナ＝ハウル)',
        'ハンマー/狩猟笛 (ねこハンマー、ソニックビードロー)',
        '弓/ライト (鋼氷馬弓、ベルクーツ)'
      ],
      armor:[
        'オリジナルA (モノデビル)',
        'オリジナルB (モノデビル)',
        'オリジナルC (モノデビル)',
        'オリジナルD (モノデビル)',
        'オリジナルE (モノデビル)',
        'オリジナルF (モノデビル)',
        'トライA (ネブラ)',
        'トライB (ネブラ)',
        'トライC (ネブラ)',
        'トライD (ネブラ)',
        'トライE (ネブラ)',
        'トライF (ネブラ)',
        'ドスA (ディアブロ)',
        'ドスB (ディアブロ)',
        'ドスC (ディアブロ)',
        'ドスD (ディアブロ)',
        'ドスE (ディアブロ)',
        'ドスF (ディアブロ)'
      ]
    }],
    //ティガレックス(0B)、ジンオウガ(30)
    ['T6', {
      weapon:[
        'スラアク/操虫棍 (ヒドゥンアックス、ボーンロッド)',
        '大剣/太刀 (ジークムント、飛竜刀)',
        '片手剣/双剣 (ポイズンタバルジン、ギルドナイトセーバー)',
        'ランス/ガンランス (トゥースランス、プリンセスバースト)',
        'ハンマー/狩猟笛 (ヒドゥンブレイカー、ウネリシェルン)',
        '弓/ヘビィ (プロミネンスボウ、デュエルスタップ)'
      ],
      armor:[
        'オリジナルA (モノブロ)',
        'オリジナルB (モノブロ)',
        'オリジナルC (モノブロ)',
        'オリジナルD (モノブロ)',
        'オリジナルE (モノブロ)',
        'オリジナルF (モノブロ)',
        'トライA (フロギィ)',
        'トライB (フロギィ)',
        'トライC (フロギィ)',
        'トライD (フロギィ)',
        'トライE (フロギィ)',
        'トライF (フロギィ)',
        'ドスA (タロス)',
        'ドスB (タロス)',
        'ドスC (タロス)',
        'ドスD (タロス)',
        'ドスE (タロス)',
        'ドスF (タロス)'
      ]
    }],
    //ジンオウガ亜種(31)、ディアブロス亜種(64)
    ['T7', {
      weapon:[
        'スラアク/操虫棍 (モーターバースト、エイムofトリック)',
        '大剣/太刀 (封龍剣、軍刀)',
        '片手剣/双剣 (チュクチュク、テッセン)',
        'ランス/ガンランス (竜騎槍、ジェネラルパルド)',
        'ハンマー/狩猟笛 (鬼鉄丸、ヒドゥントーン)',
        '弓/ヘビィ (覇弓レラカムトルム、ギガン＝ショット)'
      ],
      armor:[
        'オリジナルA (リオソウル)',
        'オリジナルB (リオソウル、ゴア)',
        'オリジナルC (リオソウル、クシャナ)',
        'オリジナルD (ゴア、クシャナ)',
        'オリジナルE (ゴア)',
        'オリジナルF (クシャナ)',
        'トライA (レックスU)',
        'トライB (レックスU、ゴア)',
        'トライC (レックスU、クシャナ)',
        'トライD (ゴア、クシャナ)',
        'トライE (ゴア)',
        'トライF (クシャナ)',
        'ドスA (凛/艶)',
        'ドスB (凛/艶、ゴア)',
        'ドスC (凛/艶、クシャナ)',
        'ドスD (ゴア、クシャナ)',
        'ドスE (ゴア)',
        'ドスF (クシャナ)',
      ]
    }],
    //シャガルマガラ(1D)、テオテスカトル(20)、オオナズチ(67)
    ['T8', {
      weapon:[
        'チャアク/操虫棍 (ナバルクライス、金砕棍棒)',
        '大剣/太刀 (海帝剣、冥刀)',
        '片手剣/双剣 (ゴールドマロウ、海王双刃)',
        'ランス/ガンランス (七星槍、シルバールーク)',
        'ハンマー/狩猟笛 (ドラゴンブレイカー、ゴルトリコーダー)',
        '弓/ヘビィ (殲滅と破壊の剛弓、カオスウィング)'
      ],
      armor:[
        'オリジナルA (エスカドラ)',
        'オリジナルB (エスカドラ)',
        'オリジナルC (エスカドラ)',
        'オリジナルD (エスカドラ)',
        'オリジナルE (エスカドラ)',
        'オリジナルF (エスカドラ)',
        'トライA (リベリオン/ライオット)',
        'トライB (リベリオン/ライオット)',
        'トライC (リベリオン/ライオット)',
        'トライD (リベリオン/ライオット)',
        'トライE (リベリオン/ライオット)',
        'トライF (リベリオン/ライオット)',
        'ドスA (ドラゴンX)',
        'ドスB (ドラゴンX)',
        'ドスC (ドラゴンX)',
        'ドスD (ドラゴンX)',
        'ドスE (ドラゴンX)',
        'ドスF (ドラゴンX)'
      ]
    }],
    //ドスランポス(10)
    ['T9', {
      weapon:[
        'スラアク/操虫棍 (ディーエッジ、エイムofトリック)',
        '大剣/太刀 (41式対飛竜大剣、凍刀)',
        '片手剣/双剣 (マスターバング、ランポスクロウズ)',
        'ランス/ガンランス (合戦槍、フルボルテージ)',
        'ハンマー/狩猟笛 (ウォーバッシュ、ガンズロック)',
        '弓/ライト (クイーンブラスター、ボルボバレット)'
      ],
      armor:[
        'オリジナルA (アロイ)',
        'オリジナルB (アロイ)',
        'オリジナルC (アロイ)',
        'オリジナルD (アロイ)',
        'オリジナルE (アロイ)',
        'オリジナルF (アロイ)',
        'トライA (ルドロス)',
        'トライB (ルドロス)',
        'トライC (ルドロス)',
        'トライD (ルドロス)',
        'トライE (ルドロス)',
        'トライF (ルドロス)',
        'ドスA (ハンター)',
        'ドスB (ハンター)',
        'ドスC (ハンター)',
        'ドスD (ハンター)',
        'ドスE (ハンター)',
        'ドスF (ハンター)'
      ]
    }],
    //イャンクック亜種(08)、バサルモス(26)
    ['T10', {
      weapon:[
        'スラアク/操虫棍 (竜姫の剣斧、セクトハルバー)',
        '大剣/太刀 (41式飛竜大剣、凍刃)',
        '片手剣/双剣 (マスターバング、ランポスクロウズ)',
        'ランス/ガンランス (合戦槍、フルボルテージ)',
        'ハンマー/狩猟笛 (ウォーバッシュ、ガンズロック)',
        '弓/ライト (クイーンブラスター、ボルボバレット)'
      ],
      armor:[
        'オリジナルA (インゴット)',
        'オリジナルB (インゴット)',
        'オリジナルC (インゴット)',
        'オリジナルD (インゴット)',
        'オリジナルE (インゴット)',
        'オリジナルF (インゴット)',
        'トライA (フルフル)',
        'トライB (フルフル)',
        'トライC (フルフル)',
        'トライD (フルフル)',
        'トライE (フルフル)',
        'トライF (フルフル)',
        'ドスA (ゲリョス)',
        'ドスB (ゲリョス)',
        'ドスC (ゲリョス)',
        'ドスD (ゲリョス)',
        'ドスE (ゲリョス)',
        'ドスF (ゲリョス)'
      ]
    }],
    //ティガレックス亜種(0C)、ブラキディオス(2C)
    ['T11', {
      weapon:[
        'チャアク/操虫棍 (精鋭討伐隊盾斧、セクトハルバー)',
        '大剣/太刀 (封龍剣、軍刀)',
        '片手剣/双剣 (フロストエッジ、テッセン)',
        'ランス/ガンランス (竜騎槍、ジェネラルバルド)',
        'ハンマー/狩猟笛 (ナナ＝トリ、ソニックビードロー)',
        '弓/ヘビィ (覇弓レラカムトルム、ギガン＝ショット)'
      ],
      armor:[
        'オリジナルA (リオハート)',
        'オリジナルB (リオハート、ギザミ)',
        'オリジナルC (リオハート、ジンオウU)',
        'オリジナルD (ギザミ、ジンオウU)',
        'オリジナルE (ギザミ)',
        'オリジナルF (ジンオウU)',
        'トライA (アーティア)',
        'トライB (アーティア、ギザミ)',
        'トライC (アーティア、ジンオウU)',
        'トライD (ギザミ、ジンオウU)',
        'トライE (ギザミ)',
        'トライF (ジンオウU)',
        'ドスA (常磐/八千代)',
        'ドスB (常磐/八千代、ギザミ)',
        'ドスC (常磐/八千代、ジンオウU)',
        'ドスD (ギザミ、ジンオウU)',
        'ドスE (ギザミ)',
        'ドスF (ジンオウU)'
      ]
    }],
    //ラージャン(13)、イャンガルルガ(1E)
    ['T12', {
      weapon:[
        'チャアク/操虫棍 (フォースofフォール、金砕棍棒)',
        '大剣/太刀 (アギト、天上天下天地無双刀)',
        '片手剣/双剣 (エペ=ギルタナス、ニヴルブリザード)',
        'ランス/ガンランス (エストック、アームofティラン)',
        'ハンマー/狩猟笛 (クリスタルノヴァ、ヒドゥントーン)',
        '弓/ボウガン (龍弓、雷砲、カホウ)'
      ],
      armor:[
        'オリジナルA (シルバーソル)',
        'オリジナルB (シルバーソル、キリンU)',
        'オリジナルC (シルバーソル、アカムト)',
        'オリジナルD (キリンU、アカムト)',
        'オリジナルE (キリンU)',
        'オリジナルF (アカムト)',
        'トライA (フィリア)',
        'トライB (フィリア、キリンU)',
        'トライC (フィリア、アカムト)',
        'トライD (キリンU、アカムト)',
        'トライE (キリンU)',
        'トライF (アカムト)',
        'ドスA (グリード)',
        'ドスB (グリード、キリンU)',
        'ドスC (グリード、アカムト)',
        'ドスD (キリンU、アカムト)',
        'ドスE (キリンU)',
        'ドスF (アカムト)'
      ]
    }]
    
  ]
);
//エリア名データ
const areaNameData = new Map(
  [
    ['01', {value:'01', chooseable:['1','2','3','4','5','6','7','8'], text:'迷路'}],
    ['02', {value:'02', chooseable:['1','2','3','4','5','6','7','8'], text:'傾斜(丘)'}],
    ['03', {value:'03', chooseable:['1','2','3','4','5','6']        , text:'崖'}],
    ['04', {value:'04', chooseable:['1','2','3','4','5','6','7','8'], text:'水(川)'}],
    ['05', {value:'05', chooseable:['1','2','3','4','5','6','7','8'], text:'豚(猫)'}],
    ['06', {value:'06', chooseable:['1','2','3','4','5','6','7','8'], text:'蔦(ツタ)'}],
    ['07', {value:'07', chooseable:['1','2','3','4','5','6','7','8'], text:'天井(洞窟)'}],
    ['08', {value:'08', chooseable:['2','4','6','8']                , text:'柱(遺跡)'}],
    ['0A', {value:'0A', chooseable:['2','4','6','8']                , text:'宝'}],
    ['0B', {value:'0B', chooseable:['1','2','3','4','5','6','7','8'], text:'紫(水晶)'}],
    ['0C', {value:'0C', chooseable:['1','2','3','4','5','6','7','8'], text:'砂漠'}]
  ]
);

//タブ切り替えの挙動
function createTabChange() {
  document.getElementsByClassName('createContainer')[0].style.display = 'block';
  document.getElementsByClassName('storageContainer')[0].style.display = 'none';
  document.getElementsByClassName('switchTab')[0].classList.add('onTab');
  document.getElementsByClassName('switchTab')[0].classList.remove('offTab');
  document.getElementsByClassName('switchTab')[1].classList.add('offTab');
  document.getElementsByClassName('switchTab')[1].classList.remove('onTab');
}
function storageTabChange() {
  document.getElementsByClassName('createContainer')[0].style.display = 'none';
  document.getElementsByClassName('storageContainer')[0].style.display = 'block';
  document.getElementsByClassName('switchTab')[0].classList.add('offTab');
  document.getElementsByClassName('switchTab')[0].classList.remove('onTab');
  document.getElementsByClassName('switchTab')[1].classList.add('onTab');
  document.getElementsByClassName('switchTab')[1].classList.remove('offTab');
}
//guide表示
function guideOn() {
  document.getElementById('guideMessage').style.display = 'block';
  localStorage.clear('guideFlag');
  document.getElementsByClassName('guideChange')[0].classList.add('currentGuide');
  document.getElementsByClassName('guideChange')[1].classList.remove('currentGuide');
}
function guideOff() {
  document.getElementById('guideMessage').style.display = 'none';
  localStorage.setItem('guideFlag', 'none');
  document.getElementsByClassName('guideChange')[1].classList.add('currentGuide');
  document.getElementsByClassName('guideChange')[0].classList.remove('currentGuide');
}
//モンスター1体目のセレクトタグをセット、ロード時にのみ呼び出される
function setMonster1Select() {
  let target = document.getElementById('monster1');
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
  let blankOption = document.createElement('option');
  target.appendChild(blankOption);
  monsterData.forEach(currentMonsterData => {
    let newOption = document.createElement('option');
    newOption.value = currentMonsterData.value;
    newOption.text = currentMonsterData.text;
    target.appendChild(newOption);
  });
}
//モンスター2体目のセレクトタグをセット、モンスター1体目変更時にも呼び出される、mode1→モンスター1がunit1の場合、mode2→それ以外の場合
function setMonster2Select(mode) {
  let target = document.getElementById('monster2');
  while (target.firstChild) {
    target.removeChild(target.firstChild);
  }
  if (mode === 1) {
    selectValue.monster2 = '';
    document.getElementsByClassName('monster2')[0].classList.add('visibility');
    //mapsのモンスター{2}の名前visibility設定
    for (i=0; i<document.getElementsByClassName('areaMonster2Name').length; i++) {
      document.getElementsByClassName('areaMonster2Name')[i].classList.add('visibility');
    }
  } else if (mode === 2) {
    let blankOption = document.createElement('option');
    target.appendChild(blankOption);  
    monsterData.forEach(currentMonsterData => {
      if (currentMonsterData.unit === '2') {
        let newOption = document.createElement('option');
        newOption.value = currentMonsterData.value;
        newOption.text = currentMonsterData.text;
        target.appendChild(newOption);
      }
    });
    document.getElementsByClassName('monster2')[0].classList.remove('visibility');
  }
}
//モンスターに応じた出土を設定
function setArtifactSelect(T) {
  let weapon = document.getElementById('weapon');
  let armor = document.getElementById('armor');
  if (T === undefined) {
    for (i=1; i<weapon.childElementCount; i++) {
      weapon.children[i].textContent = artifactData.get('T0').weapon[i-1];
    }
    for (i=1; i<armor.childElementCount; i++) {
      armor.children[i].textContent = artifactData.get('T0').armor[i-1];
    }
  } else {
    for (i=1; i<weapon.childElementCount; i++) {
      weapon.children[i].textContent = artifactData.get(T).weapon[i-1];
    }
    for (i=1; i<armor.childElementCount; i++) {
      armor.children[i].textContent = artifactData.get(T).armor[i-1];
    }
  }
}
//初期レベルを自動設定
function setLevel() {
  let cnt = 0;
  if (selectValue.monster1 !== '') cnt += 1;
  if (selectValue.monster2 !== '') cnt += 1;
  let viewLevel = document.getElementById('level');
  if (cnt === 0) {
    viewLevel.value = '';
    selectValue.level = '';
  } else {
    let result = 0;
    let m1ID = '';
    let m2ID = '';
    if (selectValue.monster1 !== '') m1ID = monsterData.get(selectValue.monster1).value;
    if (selectValue.monster2 !== '') m2ID = monsterData.get(selectValue.monster2).value;
    if (cnt === 2) {
      if (m1ID === '63' && m2ID === '64') result = 99;
      else if (m1ID === '64' && m2ID === '63') result = 99;
      else if (m1ID === '10' && m2ID === '26') result = 92;
      else if (m1ID === '26' && m2ID === '10') result = 92;
      else if (m1ID === '10' && m2ID === '27') result = 92;
      else if (m1ID === '27' && m2ID === '10') result = 92;
      else if (m1ID === '26' && m2ID === '2C') result = 97;
      else if (m1ID === '2C' && m2ID === '26') result = 97;
      else if (m1ID === '27' && m2ID === '2C') result = 97;
      else if (m1ID === '2C' && m2ID === '27') result = 97;
      else if (m1ID === '13' && m2ID === '13') result = 119;
    }
    if (result === 0) {
      let m1 = 0;
      let m2 = 0;
      if (selectValue.monster1 !== '') m1 = parseInt(monsterData.get(selectValue.monster1).level);
      if (selectValue.monster2 !== '') m2 = parseInt(monsterData.get(selectValue.monster2).level);
      result = Math.floor((m1 + m2) / cnt);
    }
    viewLevel.value = result.toString(10);
    selectValue.level = result.toString(16).toUpperCase();
  }
}
//エリア1~5のエリア名セレクトタグをセット、ロード時のみ呼び出される
function setAreaTypeSelect() {
  let areaTypeSelect = new Array();
  areaTypeSelect.push(...document.getElementsByClassName('areaType'));
  areaTypeSelect.forEach(currentAreaTypeSelect => {
    areaNameData.forEach(currentAreaNameData => {
      let newOption = document.createElement('option');
      newOption.value = currentAreaNameData.value;
      newOption.text = currentAreaNameData.text;
      currentAreaTypeSelect.appendChild(newOption);
    });
  });
}
//引数に何エリア目かを取り、optionタグを一度削除、エリアの種類と形に合わせて⓪~③をセットする
function setAreaMonster1Option(areaNum) {
  //モンスター1体目の位置⓪~③と初期休眠食事のareaNum番目を変数に格納
  let areaMonster1 = document.getElementsByClassName('areaMonster1')[areaNum];
  let setMonster1 = document.getElementsByClassName('setMonster1')[areaNum];
  //対象のエリアが天井、水晶、砂漠の場合は位置セレクトを可視化せずに値だけセットして、初期休眠食事だけを可視化して、return
  if (selectValue.areaType[areaNum] === '07' || selectValue.areaType[areaNum] === '0B' || selectValue.areaType[areaNum] === '0C') {
    selectValue.areaMonster1[areaNum] = '01';
    setMonster1.classList.remove('visibility');
    return;
  }
  //可視化
  areaMonster1.classList.remove('visibility');
  setMonster1.classList.remove('visibility');
  //位置⓪~③のoptionを全て削除する
  while (areaMonster1.firstChild) {
    areaMonster1.removeChild(areaMonster1.firstChild);
  }
  //位置⓪~③のセレクトタグに空optionを追加する
  let blankOption = document.createElement('option');
  areaMonster1.appendChild(blankOption);
  //エリアの種類と形に合わせて、位置⓪~③のoptionをセットする
  switch (selectValue.areaType[areaNum]) {
    //傾斜、蔦の場合
    case '02':
    case '06':
      //出入り口で1か2を使用していると⓪が追加される
      if (selectValue.areaIn[areaNum] === '01' || selectValue.areaOut[areaNum] === '01' || selectValue.areaIn[areaNum] === '02' || selectValue.areaOut[areaNum] === '02') {
        let newOption = document.createElement('option');
        newOption.text = '⓪';
        newOption.value = '00';
        areaMonster1.appendChild(newOption);
      }
      //①は必ず追加される
      if (true) {
        let newOption = document.createElement('option');
        newOption.text = '①';
        newOption.value = '01';
        areaMonster1.appendChild(newOption);
      }
      //出入り口で5か6を使用していると②が追加される
      if (selectValue.areaIn[areaNum] === '05' || selectValue.areaOut[areaNum] === '05' || selectValue.areaIn[areaNum] === '06' || selectValue.areaOut[areaNum] === '06') {
        let newOption = document.createElement('option');
        newOption.text = '②';
        newOption.value = '02';
        areaMonster1.appendChild(newOption);
      }
      //出入り口で7か8を使用していると③が追加される
      if (selectValue.areaIn[areaNum] === '07' || selectValue.areaOut[areaNum] === '07' || selectValue.areaIn[areaNum] === '08' || selectValue.areaOut[areaNum] === '08') {
        let newOption = document.createElement('option');
        newOption.text = '③';
        newOption.value = '03';
        areaMonster1.appendChild(newOption);
      }
      break;
    //崖の場合
    case '03':
      //崖の出入り口で1か2を使用していると⓪が追加される
      if (selectValue.areaIn[areaNum] === '01' || selectValue.areaOut[areaNum] === '01' || selectValue.areaIn[areaNum] === '02' || selectValue.areaOut[areaNum] === '02') {
        let newOption = document.createElement('option');
        newOption.text = '⓪';
        newOption.value = '00';
        areaMonster1.appendChild(newOption);
      }
      //①は必ず追加される
      if (true) {
        let newOption = document.createElement('option');
        newOption.text = '①';
        newOption.value = '01';
        areaMonster1.appendChild(newOption);
      }
      //崖の出入り口で5か6を使用していると②が追加される
      if (selectValue.areaIn[areaNum] === '05' || selectValue.areaOut[areaNum] === '05' || selectValue.areaIn[areaNum] === '06' || selectValue.areaOut[areaNum] === '06') {
        let newOption = document.createElement('option');
        newOption.text = '②';
        newOption.value = '02';
        areaMonster1.appendChild(newOption);
      }
      break;
    //水の場合
    case '04':
      //⓪①②は必ず追加される
      if (true) {
        let newOption0 = document.createElement('option');
        let newOption1 = document.createElement('option');
        let newOption2 = document.createElement('option');
        newOption0.text = '⓪';
        newOption1.text = '①';
        newOption2.text = '②';
        newOption0.value = '00';
        newOption1.value = '01';
        newOption2.value = '02';
        areaMonster1.appendChild(newOption0);
        areaMonster1.appendChild(newOption1);
        areaMonster1.appendChild(newOption2);
      }
      //水の出入り口で7か8を使用していると③が追加される
      if (selectValue.areaIn[areaNum] === '07' || selectValue.areaOut[areaNum] === '07' || selectValue.areaIn[areaNum] === '08' || selectValue.areaOut[areaNum] === '08') {
        let newOption = document.createElement('option');
        newOption.text = '③';
        newOption.value = '03';
        areaMonster1.appendChild(newOption);
      }
      break;
  }
}
function setAreaMonster2Option(areaNum) {
  //モンスター1体目の位置⓪~③と初期休眠食事のareaNum番目を変数に格納
  let areaMonster2 = document.getElementsByClassName('areaMonster2')[areaNum];
  let setMonster2 = document.getElementsByClassName('setMonster2')[areaNum];
  //対象のエリアが天井、水晶、砂漠の場合は位置セレクトを可視化せずに値だけセットして、初期休眠食事だけを可視化して、return
  if (selectValue.areaType[areaNum] === '07' || selectValue.areaType[areaNum] === '0B' || selectValue.areaType[areaNum] === '0C') {
    selectValue.areaMonster2[areaNum] = '01';
    setMonster2.classList.remove('visibility');
    return;
  }
  //可視化
  areaMonster2.classList.remove('visibility');
  setMonster2.classList.remove('visibility');
  //位置⓪~③のoptionを全て削除する
  while (areaMonster2.firstChild) {
    areaMonster2.removeChild(areaMonster2.firstChild);
  }
  //位置⓪~③のセレクトタグに空optionを追加する
  let blankOption = document.createElement('option');
  areaMonster2.appendChild(blankOption);
  //エリアの種類と形に合わせて、位置⓪~③のoptionをセットする
  switch (selectValue.areaType[areaNum]) {
    //傾斜、蔦の場合
    case '02':
    case '06':
      //出入り口で1か2を使用していると⓪が追加される
      if (selectValue.areaIn[areaNum] === '01' || selectValue.areaOut[areaNum] === '01' || selectValue.areaIn[areaNum] === '02' || selectValue.areaOut[areaNum] === '02') {
        let newOption = document.createElement('option');
        newOption.text = '⓪';
        newOption.value = '00';
        areaMonster2.appendChild(newOption);
      }
      //①は必ず追加される
      if (true) {
        let newOption = document.createElement('option');
        newOption.text = '①';
        newOption.value = '01';
        areaMonster2.appendChild(newOption);
      }
      //出入り口で5か6を使用していると②が追加される
      if (selectValue.areaIn[areaNum] === '05' || selectValue.areaOut[areaNum] === '05' || selectValue.areaIn[areaNum] === '06' || selectValue.areaOut[areaNum] === '06') {
        let newOption = document.createElement('option');
        newOption.text = '②';
        newOption.value = '02';
        areaMonster2.appendChild(newOption);
      }
      //出入り口で7か8を使用していると③が追加される
      if (selectValue.areaIn[areaNum] === '07' || selectValue.areaOut[areaNum] === '07' || selectValue.areaIn[areaNum] === '08' || selectValue.areaOut[areaNum] === '08') {
        let newOption = document.createElement('option');
        newOption.text = '③';
        newOption.value = '03';
        areaMonster2.appendChild(newOption);
      }
      break;
    //崖の場合
    case '03':
      //崖の出入り口で1か2を使用していると⓪が追加される
      if (selectValue.areaIn[areaNum] === '01' || selectValue.areaOut[areaNum] === '01' || selectValue.areaIn[areaNum] === '02' || selectValue.areaOut[areaNum] === '02') {
        let newOption = document.createElement('option');
        newOption.text = '⓪';
        newOption.value = '00';
        areaMonster2.appendChild(newOption);
      }
      //①は必ず追加される
      if (true) {
        let newOption = document.createElement('option');
        newOption.text = '①';
        newOption.value = '01';
        areaMonster2.appendChild(newOption);
      }
      //崖の出入り口で5か6を使用していると②が追加される
      if (selectValue.areaIn[areaNum] === '05' || selectValue.areaOut[areaNum] === '05' || selectValue.areaIn[areaNum] === '06' || selectValue.areaOut[areaNum] === '06') {
        let newOption = document.createElement('option');
        newOption.text = '②';
        newOption.value = '02';
        areaMonster2.appendChild(newOption);
      }
      break;
    //水の場合
    case '04':
      //⓪①②は必ず追加される
      if (true) {
        let newOption0 = document.createElement('option');
        let newOption1 = document.createElement('option');
        let newOption2 = document.createElement('option');
        newOption0.text = '⓪';
        newOption1.text = '①';
        newOption2.text = '②';
        newOption0.value = '00';
        newOption1.value = '01';
        newOption2.value = '02';
        areaMonster2.appendChild(newOption0);
        areaMonster2.appendChild(newOption1);
        areaMonster2.appendChild(newOption2);
      }
      //水の出入り口で7か8を使用していると③が追加される
      if (selectValue.areaIn[areaNum] === '07' || selectValue.areaOut[areaNum] === '07' || selectValue.areaIn[areaNum] === '08' || selectValue.areaOut[areaNum] === '08') {
        let newOption = document.createElement('option');
        newOption.text = '③';
        newOption.value = '03';
        areaMonster2.appendChild(newOption);
      }
      break;
  }
}
//テンプレ
function setAreaMonsterTemplate(areaNum) {
  const m1 = selectValue.monster1;
  const m2 = selectValue.monster2;
  const area = selectValue.areaType[areaNum];     //選択中のエリアIDが入る
  const flg = selectValue.areaFlag[areaNum];      //エリアの形が決まっていたらtrue、決まってなければfalseが入る
  //visibilityを変化させるクラス
  const areaM1 = document.getElementsByClassName('areaMonster1')[areaNum];
  const areaM2 = document.getElementsByClassName('areaMonster2')[areaNum];
  const setM1 = document.getElementsByClassName('setMonster1')[areaNum];
  const setM2 = document.getElementsByClassName('setMonster2')[areaNum];
  //pink
  const iniM1 = document.getElementsByClassName('iniM1')[areaNum];
  const sleepM1 = document.getElementsByClassName('sleepM1')[areaNum];
  const mealM1 = document.getElementsByClassName('mealM1')[areaNum];
  //blue
  const iniM2 = document.getElementsByClassName('iniM2')[areaNum];
  const sleepM2 = document.getElementsByClassName('sleepM2')[areaNum];
  const mealM2 = document.getElementsByClassName('mealM2')[areaNum];
  if (m1 !== '' && area !== '') {
    const data = monsterData.get(m1).choseableArea; //移動可能エリアIDが配列で入る
    //移動可能かを判別
    for (PPP=0; PPP<data.length; PPP++) {
      if (area === data[PPP]) {   //移動可能なら初期休眠食事を表示する
        setM1.classList.remove('visibility');
        break;
      }
      if (PPP === data.length-1) setM1.classList.add('visibility');
    }
    //エリアの形が決まっている
    if (flg === true) {
      if (setM1.classList.contains('visibility') === false) {  //移動も可能なら
        setAreaMonster1Option(areaNum);
      } else {  //エリアの形は決まっているが移動は不可
        areaM1.classList.add('visibility');
        setM1.classList.add('visibility');
        selectValue.areaMonster1[areaNum] = '00';
        selectValue.areaIniM1[areaNum] = '00';
        selectValue.areaSleepM1[areaNum] = '00';
        selectValue.areaMealM1[areaNum] = '00';
        iniM1.classList.remove('pink');
        sleepM1.classList.remove('pink');
        mealM1.classList.remove('pink');
        if (areaNum === selectValue.areaIniM1) selectValue.areaIniM1 = '';
        if (areaNum === selectValue.areaSleepM1) selectValue.areaSleepM1 = '';
        if (areaNum === selectValue.areaMealM1) selectValue.areaMealM1 = '';
      }
    } else {  //エリアの形が決まっていない
      if (setM1.classList.contains('visibility') === false) {  //移動は可能なら
        areaM1.classList.add('visibility');
        selectValue.areaMonster1[areaNum] = '';
      } else {  //エリアの形が決まっておらず移動も不可の場合
        areaM1.classList.add('visibility');
        setM1.classList.add('visibility');
        selectValue.areaMonster1[areaNum] = '';
        selectValue.areaIniM1[areaNum] = '';
        selectValue.areaSleepM1[areaNum] = '';
        selectValue.areaMealM1[areaNum] = '';
        iniM1.classList.remove('pink');
        sleepM1.classList.remove('pink');
        mealM1.classList.remove('pink');
        if (areaNum === selectValue.areaIniM1) selectValue.areaIniM1 = '';
        if (areaNum === selectValue.areaSleepM1) selectValue.areaSleepM1 = '';
        if (areaNum === selectValue.areaMealM1) selectValue.areaMealM1 = '';         
      }
    }
  } else {  //m1かエリアが選択されていない場合
    areaM1.classList.add('visibility');
    setM1.classList.add('visibility');
    selectValue.areaMonster1[areaNum] = '';
    selectValue.areaIniM1[areaNum] = '';
    selectValue.areaSleepM1[areaNum] = '';
    selectValue.areaMealM1[areaNum] = '';
    iniM1.classList.remove('pink');
    sleepM1.classList.remove('pink');
    mealM1.classList.remove('pink');
    if (areaNum === selectValue.areaIniM1) selectValue.areaIniM1 = '';
    if (areaNum === selectValue.areaSleepM1) selectValue.areaSleepM1 = '';
    if (areaNum === selectValue.areaMealM1) selectValue.areaMealM1 = '';
  }
  if (m2 !== '' && area !== '') {
    const data = monsterData.get(m2).choseableArea; //移動可能エリアIDが配列で入る
    //移動可能かを判別
    for (PPP=0; PPP<data.length; PPP++) {
      if (area === data[PPP]) {   //移動可能なら初期休眠食事を表示する
        setM2.classList.remove('visibility');
        break;
      }
      if (PPP === data.length-1) setM2.classList.add('visibility');
    }
    //エリアの形が決まっている
    if (flg === true) {
      if (setM2.classList.contains('visibility') === false) {  //移動も可能なら
        setAreaMonster2Option(areaNum);
      } else {  //エリアの形は決まっているが移動は不可
        areaM2.classList.add('visibility');
        setM2.classList.add('visibility');
        selectValue.areaMonster2[areaNum] = '00';
        selectValue.areaIniM2[areaNum] = '00';
        selectValue.areaSleepM2[areaNum] = '00';
        selectValue.areaMealM2[areaNum] = '00';
        iniM2.classList.remove('pink');
        sleepM2.classList.remove('pink');
        mealM2.classList.remove('pink');
        if (areaNum === selectValue.areaIniM2) selectValue.areaIniM2 = '';
        if (areaNum === selectValue.areaSleepM2) selectValue.areaSleepM2 = '';
        if (areaNum === selectValue.areaMealM2) selectValue.areaMealM2 = '';
      }
    } else {  //エリアの形が決まっていない
      if (setM2.classList.contains('visibility') === false) {  //移動は可能なら
        areaM2.classList.add('visibility');
        selectValue.areaMonster2[areaNum] = '';
      } else {  //エリアの形が決まっておらず移動も不可の場合
        areaM2.classList.add('visibility');
        setM2.classList.add('visibility');
        selectValue.areaMonster2[areaNum] = '';
        selectValue.areaIniM2[areaNum] = '';
        selectValue.areaSleepM2[areaNum] = '';
        selectValue.areaMealM2[areaNum] = '';
        iniM2.classList.remove('pink');
        sleepM2.classList.remove('pink');
        mealM2.classList.remove('pink');
        if (areaNum === selectValue.areaIniM2) selectValue.areaIniM2 = '';
        if (areaNum === selectValue.areaSleepM2) selectValue.areaSleepM2 = '';
        if (areaNum === selectValue.areaMealM2) selectValue.areaMealM2 = '';         
      }
    }
  } else {  //m2かエリアが選択されていない場合
    areaM2.classList.add('visibility');
    setM2.classList.add('visibility');
    selectValue.areaMonster2[areaNum] = '';
    selectValue.areaIniM2[areaNum] = '';
    selectValue.areaSleepM2[areaNum] = '';
    selectValue.areaMealM2[areaNum] = '';
    iniM2.classList.remove('pink');
    sleepM2.classList.remove('pink');
    mealM2.classList.remove('pink');
    if (areaNum === selectValue.areaIniM2) selectValue.areaIniM2 = '';
    if (areaNum === selectValue.areaSleepM2) selectValue.areaSleepM2 = '';
    if (areaNum === selectValue.areaMealM2) selectValue.areaMealM2 = '';
  }
}
//モンスター位置⓪~③セレクトタグをセットする関数を呼ぶ為の形づくり、モンスターとエリアの形が変わった時に呼び出す
function setAreaMonster(areaNum) {
  if (areaNum === undefined) {  //モンスター変更時
    for (JJJ=0; JJJ<document.getElementsByClassName('areaType').length; JJJ++) {
      setAreaMonsterTemplate(JJJ);
    }
  } else {  //エリア関連変更時
    setAreaMonsterTemplate(areaNum);
  }
}
//全ての入力変更時に呼び出し、下のクエスト情報とコードをクリアする
function clear() {
  document.getElementsByClassName('resultButton')[0].classList.add('none');
  document.getElementsByClassName('resultText')[0].classList.add('none');
  document.getElementsByClassName('result')[0].innerHTML = '';
  document.getElementsByClassName('result')[1].innerHTML = '';
}
//m1変更時
function changeM1(value) {
  //モンスター2体目を使用可能かどうか判別し反映する処理
  let previousUnit = '';
  if (selectValue.monster1 !== '') {
    previousUnit = monsterData.get(selectValue.monster1).unit;
  }
  let currentUnit = '';
  if (value !== '') {
    currentUnit = monsterData.get(value).unit;
  } else {
    selectValue.areaIniM1 = '';
    selectValue.areaSleepM1 = '';
    selectValue.areaMealM1 = '';
  }
  if (previousUnit !== currentUnit) {
    if (previousUnit === '' && currentUnit === '1') {
      setMonster2Select(1);
    } else if (previousUnit === '1' && currentUnit === '') {
      setMonster2Select(2);
    } else if (previousUnit === '1' && currentUnit === '2') {
      setMonster2Select(2);
    } else if (previousUnit === '2' && currentUnit === '1') {
      setMonster2Select(1);
    }
  }
  selectValue.monster1 = value;
  //モンスターに応じた出土を設定
  if (value === '') {
    setArtifactSelect();
    //mapsのモンスター名visibility設定
    for (i=0; i<document.getElementsByClassName('areaMonster1Name').length; i++) {
      document.getElementsByClassName('areaMonster1Name')[i].classList.add('visibility');
    }
  } else {
    setArtifactSelect(monsterData.get(value).artifact);
    //mapsのモンスター名visibility解除
    for (i=0; i<document.getElementsByClassName('areaMonster1Name').length; i++) {
      document.getElementsByClassName('areaMonster1Name')[i].classList.remove('visibility');
    }
  }
  //①~③と初期休眠食事の可視不可視（引数なし）
  setAreaMonster();
}
//m2変更時
function changeM2(value) {
  selectValue.monster2 = value;
  if (value === '') {
    //mapsのモンスター名visibility設定
    for (i=0; i<document.getElementsByClassName('areaMonster2Name').length; i++) {
      document.getElementsByClassName('areaMonster2Name')[i].classList.add('visibility');
    }
    selectValue.areaIniM2 = '';
    selectValue.areaSleepM2 = '';
    selectValue.areaMealM2 = '';
  } else {
    //mapsのモンスター名visibility解除
    for (i=0; i<document.getElementsByClassName('areaMonster2Name').length; i++) {
      document.getElementsByClassName('areaMonster2Name')[i].classList.remove('visibility');
    }
  }
  //①~③と初期休眠食事の可視不可視（引数なし）
  setAreaMonster();
}
//エリアタイプ変更
function areaType(areaSelect) {
  //1回InOutのoptionを全て削除し、空のoptionをセットする
  while (areaSelect.nextElementSibling.firstChild) {
    areaSelect.nextElementSibling.removeChild(areaSelect.nextElementSibling.firstChild);
  }
  while (areaSelect.nextElementSibling.nextElementSibling.firstChild) {
    areaSelect.nextElementSibling.nextElementSibling.removeChild(areaSelect.nextElementSibling.nextElementSibling.firstChild);
  }
  let blankOption1 = document.createElement('option');
  areaSelect.nextElementSibling.appendChild(blankOption1);
  let blankOption2 = document.createElement('option');
  areaSelect.nextElementSibling.nextElementSibling.appendChild(blankOption2);
  //変更があったクラス番号を取得し、InOutのselectValueを削除する
  let doc = document.getElementsByClassName('areaType');
  doc = [].slice.call(doc);
  let idx = doc.indexOf(areaSelect);
  selectValue.areaIn[idx] = '';
  selectValue.areaOut[idx] = '';
  //エリアタイプが空以外の時はエリアInOutのオプションをセットする
  if (areaSelect.value !== '') {
    areaNameData.get(areaSelect.value).chooseable.forEach(currentChooseAble => {
      let newOption1 = document.createElement('option');
      newOption1.value = '0' + currentChooseAble;
      newOption1.text = currentChooseAble;
      let newOption2 = document.createElement('option');
      newOption2.value = '0' + currentChooseAble;
      newOption2.text = currentChooseAble;
      areaSelect.nextElementSibling.appendChild(newOption1);
      areaSelect.nextElementSibling.nextElementSibling.appendChild(newOption2);
    });
    //areaInOutを可視化する
    document.getElementsByClassName('areaIn')[idx].classList.remove('visibility');
    document.getElementsByClassName('areaOut')[idx].classList.remove('visibility');
  } else {
    //areaInOutを不可視化する
    document.getElementsByClassName('areaIn')[idx].classList.add('visibility');
    document.getElementsByClassName('areaOut')[idx].classList.add('visibility');
    //selectValueの初期化
    selectValue.areaMonster1[idx] = '';
    selectValue.areaMonster2[idx] = '';
  }
  //selectValueにエリアタイプを書き込む
  selectValue.areaType[idx] = areaSelect.value;
  //エリアInOutでマップ形状が不正だった場合のセレクトボックス赤背景を削除する
  document.getElementsByClassName('areaIn')[idx].classList.remove('areaError');
  document.getElementsByClassName('areaOut')[idx].classList.remove('areaError');
  //エリアの形が決まっていない状態表示に戻す
  selectValue.areaFlag[idx] = false;
  //⓪~③セット
  setAreaMonster(idx);
}
//In変更
function changeIn(inSelect) {
  let doc = document.getElementsByClassName('areaIn');
  doc = [].slice.call(doc);
  let idx = doc.indexOf(inSelect);
  selectValue.areaIn[idx] = inSelect.value;
  //マップの形状が不正だった場合の処理
  let a = inSelect.value;
  let b = document.getElementsByClassName('areaOut')[idx].value;
  if ((a!=='') && a===b || a==='01'&&b==='02' || a==='02'&&b==='01' || a==='03'&&b==='04' || a==='04'&&b==='03' || a==='05'&&b==='06' || a==='06'&&b==='05' || a==='07'&&b==='08' || a==='08'&&b==='07') {
    document.getElementsByClassName('areaIn')[idx].classList.add('areaError');
    document.getElementsByClassName('areaOut')[idx].classList.add('areaError');
    selectValue.areaFlag[idx] = false;
  } else {
    document.getElementsByClassName('areaIn')[idx].classList.remove('areaError');
    document.getElementsByClassName('areaOut')[idx].classList.remove('areaError');
    if (a !== '' && b !== '') selectValue.areaFlag[idx] = true;
    else selectValue.areaFlag[idx] = false;
  }
  //①~③と初期休眠食事の可視不可視
  setAreaMonster(idx);
}
//Out変更
function changeOut(outSelect) {
  let doc = document.getElementsByClassName('areaOut');
  doc = [].slice.call(doc);
  let idx = doc.indexOf(outSelect);
  selectValue.areaOut[idx] = outSelect.value;
  //マップの形状が不正だった場合の処理
  let a = outSelect.value;
  let b = document.getElementsByClassName('areaIn')[idx].value;
  if ((a!=='') && a===b || a==='01'&&b==='02' || a==='02'&&b==='01' || a==='03'&&b==='04' || a==='04'&&b==='03' || a==='05'&&b==='06' || a==='06'&&b==='05' || a==='07'&&b==='08' || a==='08'&&b==='07') {
    document.getElementsByClassName('areaIn')[idx].classList.add('areaError');
    document.getElementsByClassName('areaOut')[idx].classList.add('areaError');
    selectValue.areaFlag[idx] = false;
  } else {
    document.getElementsByClassName('areaIn')[idx].classList.remove('areaError');
    document.getElementsByClassName('areaOut')[idx].classList.remove('areaError');
    if (a !== '' && b !== '') selectValue.areaFlag[idx] = true;
    else selectValue.areaFlag[idx] = false;
  }
  //①~③と初期休眠食事の可視不可視
  setAreaMonster(idx);
}

//モンスター1体目変更時
document.getElementById('monster1').onchange = function() {
  clear();
  //M2使用可能か、出土設定、可視不可視設定
  changeM1(this.value);
  //初期レベル自動設定
  setLevel();
}
//モンスター2体目変更時
document.getElementById('monster2').onchange = function() {
  clear();
  changeM2(this.value);
  setLevel();
}
//出土武器変更時
document.getElementById('weapon').onchange = function() {
  clear();
  selectValue.weapon = this.value;
}
//出土防具変更時
document.getElementById('armor').onchange = function() {
  clear();
  selectValue.armor = this.value;
}
//出土防具タイプ（部位）変更時
document.getElementById('armorType').onchange = function() {
  clear();
  selectValue.armorType = this.value;
}
//初期レベル変更時
document.getElementById('level').onchange = function() {
  clear();
  let hex = this.value;
  hex = parseInt(hex).toString(16).toUpperCase();
  selectValue.level = hex;
}
//エリア1~5のエリアタイプ変更時
for (i=0; i<document.getElementsByClassName('areaType').length; i++) {
  document.getElementsByClassName('areaType')[i].addEventListener('change', (e) => {
    clear();
    areaType(e.target);
  });
}
//エリア1~5のIn変更時
for (i=0; i<document.getElementsByClassName('areaIn').length; i++) {
  document.getElementsByClassName('areaIn')[i].addEventListener('change', (e) => {
    clear();
    changeIn(e.target);
  });
}
//エリア1~5のOut変更時
for (i=0; i<document.getElementsByClassName('areaOut').length; i++) {
  document.getElementsByClassName('areaOut')[i].addEventListener('change', (e) => {
    clear();
    changeOut(e.target);
  });
}
//エリア1~5の位置⓪~③変更時
for (i=0; i<document.getElementsByClassName('areaMonster1').length; i++) {
  document.getElementsByClassName('areaMonster1')[i].addEventListener('change', (e) => {
    clear();
    let doc = document.getElementsByClassName('areaMonster1');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    selectValue.areaMonster1[idx] = e.target.value;
  });
}
for (i=0; i<document.getElementsByClassName('areaMonster2').length; i++) {
  document.getElementsByClassName('areaMonster2')[i].addEventListener('change', (e) => {
    clear();
    let doc = document.getElementsByClassName('areaMonster2');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    selectValue.areaMonster2[idx] = e.target.value;
  });
}
//初期休眠食事をクリック時の挙動
for (i=0; i<document.getElementsByClassName('iniM1').length; i++) {
  document.getElementsByClassName('iniM1')[i].addEventListener('click', (e) => {
    clear();
    let doc = document.getElementsByClassName('iniM1');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    if (selectValue.areaIniM1 === '0' + (idx + 1)) {
      selectValue.areaIniM1 = '';
      document.getElementsByClassName('iniM1')[idx].classList.remove('pink');
    } else {
      selectValue.areaIniM1 = '0' + (idx + 1);
      document.getElementsByClassName('iniM1')[idx].classList.add('pink');
      for (i=0; i<doc.length; i++) if (i !== idx) doc[i].classList.remove('pink');
    }
  });
}
for (i=0; i<document.getElementsByClassName('sleepM1').length; i++) {
  document.getElementsByClassName('sleepM1')[i].addEventListener('click', (e) => {
    clear();
    let doc = document.getElementsByClassName('sleepM1');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    if (selectValue.areaSleepM1 === '0' + (idx + 1)) {
      selectValue.areaSleepM1 = '';
      document.getElementsByClassName('sleepM1')[idx].classList.remove('pink');
    } else {
      selectValue.areaSleepM1 = '0' + (idx + 1);
      document.getElementsByClassName('sleepM1')[idx].classList.add('pink');
      for (i=0; i<doc.length; i++) if (i !== idx) doc[i].classList.remove('pink');
      if (document.getElementsByClassName('mealM1')[idx].classList.contains('pink') === true) {
        document.getElementsByClassName('mealM1')[idx].classList.remove('pink');
        selectValue.areaMealM1 = '';
      }
    }
  });
}
for (i=0; i<document.getElementsByClassName('mealM1').length; i++) {
  document.getElementsByClassName('mealM1')[i].addEventListener('click', (e) => {
    clear();
    let doc = document.getElementsByClassName('mealM1');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    if (selectValue.areaMealM1 === '0' + (idx + 1)) {
      selectValue.areaMealM1 = '';
      document.getElementsByClassName('mealM1')[idx].classList.remove('pink');
    } else {
      selectValue.areaMealM1 = '0' + (idx + 1);
      document.getElementsByClassName('mealM1')[idx].classList.add('pink');
      for (i=0; i<doc.length; i++) if (i !== idx) doc[i].classList.remove('pink');
      if (document.getElementsByClassName('sleepM1')[idx].classList.contains('pink') === true) {
        document.getElementsByClassName('sleepM1')[idx].classList.remove('pink');
        selectValue.areaSleepM1 = '';
      }
    }
  });
}
for (i=0; i<document.getElementsByClassName('iniM2').length; i++) {
  document.getElementsByClassName('iniM2')[i].addEventListener('click', (e) => {
    clear();
    let doc = document.getElementsByClassName('iniM2');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    if (selectValue.areaIniM2 === '0' + (idx + 1)) {
      selectValue.areaIniM2 = '';
      document.getElementsByClassName('iniM2')[idx].classList.remove('blue');
    } else {
      selectValue.areaIniM2 = '0' + (idx + 1);
      document.getElementsByClassName('iniM2')[idx].classList.add('blue');
      for (i=0; i<doc.length; i++) if (i !== idx) doc[i].classList.remove('blue');
    }
  });
}
for (i=0; i<document.getElementsByClassName('sleepM2').length; i++) {
  document.getElementsByClassName('sleepM2')[i].addEventListener('click', (e) => {
    clear();
    let doc = document.getElementsByClassName('sleepM2');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    if (selectValue.areaSleepM2 === '0' + (idx + 1)) {
      selectValue.areaSleepM2 = '';
      document.getElementsByClassName('sleepM2')[idx].classList.remove('blue');
    } else {
      selectValue.areaSleepM2 = '0' + (idx + 1);
      document.getElementsByClassName('sleepM2')[idx].classList.add('blue');
      for (i=0; i<doc.length; i++) if (i !== idx) doc[i].classList.remove('blue');
      if (document.getElementsByClassName('mealM2')[idx].classList.contains('blue') === true) {
        document.getElementsByClassName('mealM2')[idx].classList.remove('blue');
        selectValue.areaMealM2 = '';
      }
    }
  });
}
for (i=0; i<document.getElementsByClassName('mealM2').length; i++) {
  document.getElementsByClassName('mealM2')[i].addEventListener('click', (e) => {
    clear();
    let doc = document.getElementsByClassName('mealM2');
    doc = [].slice.call(doc);
    let idx = doc.indexOf(e.target);
    if (selectValue.areaMealM2 === '0' + (idx + 1)) {
      selectValue.areaMealM2 = '';
      document.getElementsByClassName('mealM2')[idx].classList.remove('blue');
    } else {
      selectValue.areaMealM2 = '0' + (idx + 1);
      document.getElementsByClassName('mealM2')[idx].classList.add('blue');
      for (i=0; i<doc.length; i++) if (i !== idx) doc[i].classList.remove('blue');
      if (document.getElementsByClassName('sleepM2')[idx].classList.contains('blue') === true) {
        document.getElementsByClassName('sleepM2')[idx].classList.remove('blue');
        selectValue.areaSleepM2 = '';
      }
    }
  });
}
//クエスト作成者名変更時
document.getElementById('author').oninput = function() {
  clear();
  for (i=0; i<12; i++) {
    if (this.value[i] === undefined) {
      selectValue.author[i] = '0000';
    } else {
      let tmp = this.value[i].charCodeAt(0).toString(16).toUpperCase();
      while (tmp.length < 4) {
        tmp = '0' + tmp;
      }
      selectValue.author[i] = tmp;
    }
  }
}
//識別ID
document.getElementById('questID').oninput = function() {
  clear();
  this.value = this.value.toUpperCase();
  const len = this.value.length;
  let newVal = '';
  for (i=0; i<len; i++) {
    if (this.value[i].match(/[A-F]|\d/g) !== null) {
      newVal += this.value[i];
    }
  }
  this.value = newVal;
  selectValue.questID = this.value;
}

//senaga19ボタン
function senaga19() {
  clear();
  document.getElementById('author').value = '＠senaga19';
  selectValue.author[0] = 'FF20';
  selectValue.author[1] = '0073';
  selectValue.author[2] = '0065';
  selectValue.author[3] = '006E';
  selectValue.author[4] = '0061';
  selectValue.author[5] = '0067';
  selectValue.author[6] = '0061';
  selectValue.author[7] = '0031';
  selectValue.author[8] = '0039';
  selectValue.author[9] = '0000';
  selectValue.author[10] = '0000';
  selectValue.author[11] = '0000';
}
//乱数生成ボタン
function randomNumber() {
  clear();
  let min = 0;
  let max = 4294967295;
  let random1 = Math.floor( Math.random() * (max + 1 - min) ) + min;
  let random2 = Math.floor( Math.random() * (max + 1 - min) ) + min;
  random1 = random1.toString(16).toUpperCase();
  random2 = random2.toString(16).toUpperCase();
  while (random1.length !== 8) {
    random1 = '0' + random1;
  }
  while (random2.length !== 8) {
    random2 = '0' + random2;
  }
  document.getElementById('questID').value = random1 + random2;
  selectValue.questID = random1 + random2;
}
//クエスト情報コピー
function copyInfo() {
  copyToClipboard(document.getElementsByClassName('questInfo')[1].textContent, 'クエスト情報をコピーしました\n上のクエスト情報読み込みボタンから復元できます');
}
//コードコピー
function copyCode() {
  copyToClipboard(document.getElementsByClassName('questCode')[1].textContent, 'チートコードをコピーしました\n依頼の際は左のクエスト情報をコピーして送って下さい');
}
//クエスト情報読み込みボタン
function loadInfo() {
  pasteFromClipboard();
}
//ストレージ保存ボタン
function saveStorage() {
  alert('準備中');
}
//コード生成ボタン
function generate() {
  let errorMessage = new Array('\"このメッセージは未入力箇所があった場合に表示されます\"','\"クエストが不完全の為、コードは生成されませんが、クエスト情報は入力した箇所のみで生成されます\"','\"以下未入力箇所です\"');
  if (selectValue.monster1 === '') {
    errorMessage.push('モンスター1体目');
  }
  if (selectValue.weapon === '') {
    errorMessage.push('出土武器');
  }
  if (selectValue.armor === '') {
    errorMessage.push('出土防具');
  }
  if (selectValue.armorType === '') {
    errorMessage.push('防具部位');
  }
  if (selectValue.level === '') {
    errorMessage.push('初期レベル');
  }
  for (i=0; i<4; i++) {
    if (selectValue.areaType[i] === '') {
      errorMessage.push(`エリア${i+1}の種類`);
    }
    if (selectValue.areaIn[i] === '' || selectValue.areaOut[i] === '') {
      errorMessage.push(`エリア${i+1}の入口出口`);
    }
    if (selectValue.areaMonster1[i] === '') {
      errorMessage.push(`エリア${i+1}のモンスター1位置`);
    }
  }
  if (selectValue.areaIniM1 === '') {
    errorMessage.push('モンスター1の初期エリア');
  }
  if (selectValue.areaSleepM1 === '') {
    errorMessage.push('モンスター1の休眠エリア');
  }
  if (selectValue.areaMealM1 === '') {
    errorMessage.push('モンスター1の食事エリア');
  }
  if (selectValue.questID.length !== 16) {
    errorMessage.push('クエスト識別ID');
  }
  if (selectValue.monster2 !== '') {
    for (i=0; i<4; i++) {
      if (selectValue.areaMonster2[i] === '') {
        errorMessage.push(`エリア${i+1}のモンスター2位置`);
      }
    }
    if (selectValue.areaIniM2 === '') {
      errorMessage.push('モンスター2の初期エリア');
    }
    if (selectValue.areaSleepM2 === '') {
      errorMessage.push('モンスター2の休眠エリア');
    }
    if (selectValue.areaMealM2 === '') {
      errorMessage.push('モンスター2の食事エリア');
    }
  }
  if (selectValue.areaType[4] !== '') {
    if (selectValue.areaIn[4] === '' || selectValue.areaOut[4] === '') {
      errorMessage.push('エリア5の入口出口');
    }
    if (selectValue.areaMonster1[4] === '') {
      errorMessage.push('エリア5のモンスター1位置');
    }
    if (selectValue.monster2 !== '' && selectValue.areaMonster2[4] === '') {
      errorMessage.push('エリア5のモンスター2位置');
    }
  }
  let al = '';
  errorMessage.forEach(ms => {
    al += ms + '\n';
  });
  if (errorMessage.length === 3 || false) {
    let end4 = '00';
    let end5 = '00';
    let frenzyM1 = monsterData.get(selectValue.monster1).frenzy;
    let frenzyM2 = '';
    let areaType4 = selectValue.areaType[4];
    let areaIn4 = selectValue.areaIn[4];
    let areaOut4 = selectValue.areaOut[4];
    let area4M1 = selectValue.areaMonster1[4];
    let m2 = selectValue.monster2;
    let area0M2 = selectValue.areaMonster2[0];
    let area1M2 = selectValue.areaMonster2[1];
    let area2M2 = selectValue.areaMonster2[2];
    let area3M2 = selectValue.areaMonster2[3];
    let area4M2 = selectValue.areaMonster2[4];
    let areaIniM2 = selectValue.areaIniM2;
    let areaSleepM2 = selectValue.areaSleepM2;
    let areaMealM2 = selectValue.areaMealM2;
    if (selectValue.areaType[4] === '') {
      end4 = '02';
      areaType4 = '00';
      areaIn4 = '01';
      areaOut4 = '01';
      area4M1 = '00';
      area4M2 = '00';
    } else {
      end5 = '02';
    }
    if (selectValue.monster2 === '') {
      m2 = '00';
      area0M2 = '00';
      area1M2 = '00';
      area2M2 = '00';
      area3M2 = '00';
      area4M2 = '00';
      areaIniM2 = '00';
      areaSleepM2 = '00';
      areaMealM2 = '00';
      frenzyM2 = '00';
    } else {
      frenzyM2 = monsterData.get(selectValue.monster2).frenzy;
    }
    let resultCode = document.getElementsByClassName('result')[1];
    resultCode.innerHTML = `E833E9D0 00000130<br>
${selectValue.author[1]}${selectValue.author[0]} ${selectValue.author[3]}${selectValue.author[2]}<br>
${selectValue.author[5]}${selectValue.author[4]} ${selectValue.author[7]}${selectValue.author[6]}<br>
${selectValue.author[9]}${selectValue.author[8]} ${selectValue.author[11]}${selectValue.author[10]}<br>
${selectValue.questID[6]}${selectValue.questID[7]}${selectValue.questID[4]}${selectValue.questID[5]}${selectValue.questID[2]}${selectValue.questID[3]}${selectValue.questID[0]}${selectValue.questID[1]} ${selectValue.questID[14]}${selectValue.questID[15]}${selectValue.questID[12]}${selectValue.questID[13]}${selectValue.questID[10]}${selectValue.questID[11]}${selectValue.questID[8]}${selectValue.questID[9]}<br>
00000000 ${selectValue.armorType}${selectValue.armor}${selectValue.weapon}00<br>
000000${selectValue.monster1} 00000001<br>
0007${selectValue.areaIniM1}FF 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
000000${m2} 00000001<br>
0007${areaIniM2}FF 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000001<br>
000700FF 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000001<br>
000700FF 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000001<br>
000700FF 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00000000<br>
${selectValue.areaMonster1[1]}${selectValue.areaMonster1[0]}${selectValue.areaSleepM1}${selectValue.areaMealM1} ${areaMealM2}${area4M1}${selectValue.areaMonster1[3]}${selectValue.areaMonster1[2]}<br>
${area2M2}${area1M2}${area0M2}${areaSleepM2} 0000${area4M2}${area3M2}<br>
00000000 00000000<br>
00000000 00000000<br>
00000000 00${selectValue.areaOut[0]}${selectValue.areaIn[0]}${selectValue.areaType[0]}<br>
00${selectValue.areaOut[1]}${selectValue.areaIn[1]}${selectValue.areaType[1]} ${end4}${selectValue.areaOut[2]}${selectValue.areaIn[2]}${selectValue.areaType[2]}<br>
${end5}${selectValue.areaOut[3]}${selectValue.areaIn[3]}${selectValue.areaType[3]} 00${areaOut4}${areaIn4}${areaType4}<br>
${frenzyM1}018C${selectValue.level} 000003${frenzyM2}<br>
D2000000 00000000<br>
`;
  } else {
    alert(al);
  }
  let author = '';
  for (i=0; i<12; i++) {
    if (selectValue.author[i] === '0000') {
      break;
    } else {
      let tmp = parseInt(selectValue.author[i], 16);
      author += String.fromCharCode(tmp);
    }
  }
  let level = '';
  if (selectValue.level !== '') {
    level = 'Lv.' + parseInt(selectValue.level, 16);
  }
  let weapon = '';
  if (selectValue.weapon !== '') weapon = artifactData.get('T0').weapon[parseInt(selectValue.weapon)];
  let armor = '';
  if (selectValue.armor !== '') armor = artifactData.get('T0').armor[parseInt(selectValue.armor, 16)];
  let armorType = ''
  switch (selectValue.armorType) {
    case '00':
      armorType = '(胴)';
      break;
    case '01':
      armorType = '(腕)';
      break;
    case '02':
      armorType = '(腰)';
      break;
    case '03':
      armorType = '(脚)';
      break;
    case '04':
      armorType = '(頭)';
      break;
  }
  let m1 = '';
  let m2 = '';
  if (selectValue.monster1 !== '') m1 = monsterData.get(selectValue.monster1).text;
  if (selectValue.monster2 !== '') m2 = monsterData.get(selectValue.monster2).text;
  let areaType = ['','','','',''];
  for (i=0; i<5; i++) {
    if (selectValue.areaType[i] !== '') areaType[i] = areaNameData.get(selectValue.areaType[i]).text.slice(0,1);
  }
  let iniM1 = '';
  let iniM2 = '';
  let sleepM1 = '';
  let sleepM2 = '';
  let mealM1 = '';
  let mealM2 = '';
  if (selectValue.areaIniM1 !== '') iniM1 = '初期' + selectValue.areaIniM1.slice(1,2);
  if (selectValue.areaIniM2 !== '') iniM2 = '初期' + selectValue.areaIniM2.slice(1,2);
  if (selectValue.areaSleepM1 !== '') sleepM1 = ',休眠' + selectValue.areaSleepM1.slice(1,2);
  if (selectValue.areaSleepM2 !== '') sleepM2 = ',休眠' + selectValue.areaSleepM2.slice(1,2);
  if (selectValue.areaMealM1 !== '') mealM1 = ',食事' + selectValue.areaMealM1.slice(1,2);
  if (selectValue.areaMealM2 !== '') mealM2 = ',食事' + selectValue.areaMealM2.slice(1,2);
  let areaIn = ['','','','',''];
  let areaOut = ['','','','',''];
  for (i=0; i<5; i++) {
    if (selectValue.areaIn[i] !== '') areaIn[i] = selectValue.areaIn[i].slice(1,2);
    if (selectValue.areaOut[i] !== '') areaOut[i] = ',' + selectValue.areaOut[i].slice(1,2);
  }
  let areaM1 = ['','','','',''];
  let areaM2 = ['','','','',''];
  for (i=0; i<5; i++) {
    switch (selectValue.areaMonster1[i]) {
      case '00':
        areaM1[i] = ' / ⓪';
        break;
      case '01':
        areaM1[i] = ' / ①';
        break;
      case '02':
        areaM1[i] = ' / ②';
        break;
      case '03':
        areaM1[i] = ' / ③';
        break;
    }
    switch (selectValue.areaMonster2[i]) {
      case '00':
        areaM2[i] = ',⓪';
        break;
      case '01':
        areaM2[i] = ',①';
        break;
      case '02':
        areaM2[i] = ',②';
        break;
      case '03':
        areaM2[i] = ',③';
        break;
    }
  }
  let resultInfo = document.getElementsByClassName('result')[0];
  resultInfo.innerHTML = `【MH4Gクエスト情報】<br>
○${author}<br>
○${selectValue.questID}<br>
○${weapon}<br>
○${armor}${armorType}<br>
○${level}<br>
○${m1}<br>
○${iniM1}${sleepM1}${mealM1}<br>
○${m2}<br>
○${iniM2}${sleepM2}${mealM2}<br>
○${areaType[0]}${areaIn[0]}${areaOut[0]}${areaM1[0]}${areaM2[0]}<br>
○${areaType[1]}${areaIn[1]}${areaOut[1]}${areaM1[1]}${areaM2[1]}<br>
○${areaType[2]}${areaIn[2]}${areaOut[2]}${areaM1[2]}${areaM2[2]}<br>
○${areaType[3]}${areaIn[3]}${areaOut[3]}${areaM1[3]}${areaM2[3]}<br>
○${areaType[4]}${areaIn[4]}${areaOut[4]}${areaM1[4]}${areaM2[4]}<br>
`;
  document.getElementsByClassName('resultButton')[0].classList.remove('none');
  document.getElementsByClassName('resultText')[0].classList.remove('none');
}

//クリップボードにコピーする
const copyToClipboard = (copyText, alertText)=>{
  navigator.clipboard.writeText(copyText)
    .then(
      success => alert(alertText),
      error => alert('失敗しました\nご報告お願いします')
    );
};
//クリップボードのテキストを代入（貼り付け）する
const pasteFromClipboard = ()=>{
  clear();
  navigator.clipboard.readText()
    .then(
      clipText => {
        const tmp = clipText.split('\n');
        const res = tmp.filter( (a) => {
          return a !== '';
        });
        if (res === '' || res === null) {
          alert(`1行目が【MH4Gクエスト情報】から始まるテキストを読み込めます\n現在クリップボードは空です（改行のみの場合も含む）`);
          return;
        }
        if (res[0] !== '【MH4Gクエスト情報】') {
          alert(`"1行目が【MH4Gクエスト情報】から始まるテキストを読み込めます"\n"以下現在のクリップボード"\n${clipText}`);
          return;
        }
        for (i=1; i<15; i++) {
          if (res[i][0] === undefined) {
            alert(`"2~15行目の1文字目に○が必要です"\n"以下現在のクリップボード"\n${clipText}`);
            return;
          }
          if (res[i][0] !== '○') {
            alert(`"2~15行目の1文字目に○が必要です"\n"以下現在のクリップボード"\n${clipText}`);
            return;
          }
        }
        selectValue.author = ['0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000','0000'];
        let author = '';
        for (i=1; i<13; i++) {
          if (res[1][i] === undefined) break;
          author += res[1][i];
          let tmp = res[1][i].charCodeAt(0).toString(16).toUpperCase();
          while (tmp.length < 4) {
            tmp = '0' + tmp;
          }
          selectValue.author[i-1] = tmp;
        }
        document.getElementById('author').value = author;
        selectValue.questID = '';
        document.getElementById('questID').value = '';
        for (i=1; i<17; i++) {
          if (res[2][i] === undefined) break;
          selectValue.questID += res[2][i];
          document.getElementById('questID').value += res[2][i];
        }
        selectValue.weapon = '';
        document.getElementById('weapon').value = '';
        let weapon = '';
        for (i=1; i<res[3].length; i++) {
          weapon += res[3][i];
        }
        for (i=0; i<artifactData.get('T0').weapon.length; i++) {
          if (artifactData.get('T0').weapon[i] === weapon) {
            selectValue.weapon = '0' + i;
            document.getElementById('weapon').value = '0' + i;
            break;
          }
        }
        selectValue.armor = '';
        selectValue.armorType = '';
        document.getElementById('armor').value = '';
        document.getElementById('armorType').value = '';
        console.log(res[4]);
        for (i=0; i<artifactData.get('T0').armor.length; i++) {
          console.log(artifactData.get('T0').armor[i]);
          let a = res[4].indexOf(artifactData.get('T0').armor[i]);
          console.log(a);
          if (a !== -1) {
            selectValue.armor = '0' + i.toString(16).toUpperCase();
            document.getElementById('armor').value = '0' + i.toString(16).toUpperCase();
          }
        }
        for (i=1; i<6; i++) {
          const typeName = document.getElementById('armorType').children[i].textContent;
          const a = res[4].indexOf(typeName);
          if (a !== -1) {
            selectValue.armorType = '0' + (i-1);
            document.getElementById('armorType').value = '0' + (i-1);
          }
        }
        selectValue.level = '';
        document.getElementById('level').value = '';
        let level = '';
        for (i=4; i<res[5].length; i++) {
          level += res[5][i];
        }
        if (level !== '') {
          document.getElementById('level').value = level;
          selectValue.level = parseInt(level).toString(16).toUpperCase();
        }
        selectValue.monster1 = '';
        selectValue.monster2 = '';
        document.getElementById('monster1').value = '';
        document.getElementById('monster2').value = '';
        const m1 = res[6].slice(1);
        const m2 = res[8].slice(1);
        if (m2 !== '') {
          monsterData.forEach(element => {
            if (m2 === element.text) {
              document.getElementById('monster2').value = element.value;
              changeM2(element.value);
            }
          });
        } else {
          changeM2('');
        }
        if (m1 !== '') {
          monsterData.forEach(element => {
            if (m1 === element.text) {
              document.getElementById('monster1').value = element.value;
              changeM1(element.value);
            }
          });
        } else {
          changeM1('');
        }
        for (i=0; i<5; i++) {
          document.getElementsByClassName('areaType')[i].value = '';
          document.getElementsByClassName('areaIn')[i].value = '';
          document.getElementsByClassName('areaOut')[i].value = '';
          document.getElementsByClassName('areaMonster1')[i].value = '';
          document.getElementsByClassName('areaMonster2')[i].value = '';
          document.getElementsByClassName('areaIn')[i].classList.add('visibility');
          document.getElementsByClassName('areaOut')[i].classList.add('visibility');
          document.getElementsByClassName('areaMonster1')[i].classList.add('visibility');
          document.getElementsByClassName('areaMonster2')[i].classList.add('visibility');
          document.getElementsByClassName('setMonster1')[i].classList.add('visibility');
          document.getElementsByClassName('setMonster2')[i].classList.add('visibility');
        }
        selectValue.areaType = ['','','','',''];
        selectValue.areaIn = ['','','','',''];
        selectValue.areaOut = ['','','','',''];
        selectValue.areaMonster1 = ['','','','',''];
        selectValue.areaMonster2 = ['','','','',''];
        selectValue.areaFlag = [false,false,false,false,false];
        areaNameData.forEach(element => {
          for (i=0; i<5; i++) {
            let a = res[10+i][1];
            let b = element.text[0];
            if (a === b) {
              let c = document.getElementsByClassName('areaType')[i];
              c.value = element.value;
              areaType(c);
            }
          }
        });
        for (i=0; i<5; i++) {
          let a = res[10+i].search(/(○|迷|傾|崖|水|豚|蔦|天|柱|宝|紫|砂)[1-8]/);
          if (a !== -1) {
            let c = document.getElementsByClassName('areaIn')[i];
            c.value = '0' + res[10+i][a+1];
            changeIn(c);
          }
          let b = res[10+i].search(/,[1-8]/);
          if (b !== -1) {
            let c = document.getElementsByClassName('areaOut')[i];
            c.value =  '0' + res[10+i][b+1];
            changeOut(c);
          }
        }
        for (i=0; i<5; i++) {
          let a = res[10+i].search(/ (⓪|①|②|③)/);
          if (a !== -1) {
            let c = res[10+i][a+1];
            switch (c) {
              case '⓪':
                c = '00';
                break;
              case '①':
                c = '01';
                break;
              case '②':
                c = '02';
                break;
              case '③':
                c = '03';
                break;
            }
            selectValue.areaMonster1[i] = c;
            document.getElementsByClassName('areaMonster1')[i].value = c;
          }
          let b = res[10+i].search(/,(⓪|①|②|③)/);
          if (b !== -1) {
            let c = res[10+i][b+1];
            switch (c) {
              case '⓪':
                c = '00';
                break;
              case '①':
                c = '01';
                break;
              case '②':
                c = '02';
                break;
              case '③':
                c = '03';
                break;
            }
            selectValue.areaMonster2[i] = c;
            document.getElementsByClassName('areaMonster2')[i].value = c;
          }
        }
        selectValue.areaIniM1 = '';
        selectValue.areaIniM2 = '';
        selectValue.areaSleepM1 = '';
        selectValue.areaSleepM2 = '';
        selectValue.areaMealM1 = '';
        selectValue.areaMealM2 = '';
        for (i=0; i<5; i++) {
          document.getElementsByClassName('iniM1')[i].classList.remove('pink');
          document.getElementsByClassName('sleepM1')[i].classList.remove('pink');
          document.getElementsByClassName('mealM1')[i].classList.remove('pink');
          document.getElementsByClassName('iniM2')[i].classList.remove('blue');
          document.getElementsByClassName('sleepM2')[i].classList.remove('blue');
          document.getElementsByClassName('mealM2')[i].classList.remove('blue');
        }
        const iniM1 = res[7].search(/初期[1-5]/);
        if (iniM1 !== -1) {
          selectValue.areaIniM1 = '0' + res[7].slice(iniM1+2, iniM1+3);
          document.getElementsByClassName('iniM1')[parseInt(selectValue.areaIniM1)-1].classList.add('pink');
        }
        const iniM2 = res[9].search(/初期[1-5]/);
        if (iniM2 !== -1) {
          selectValue.areaIniM2 = '0' + res[9].slice(iniM2+2, iniM2+3);
          document.getElementsByClassName('iniM2')[parseInt(selectValue.areaIniM2)-1].classList.add('blue');
        }
        const sleepM1 = res[7].search(/休眠[1-5]/);
        if (sleepM1 !== -1) {
          selectValue.areaSleepM1 = '0' + res[7].slice(sleepM1+2, sleepM1+3);
          document.getElementsByClassName('sleepM1')[parseInt(selectValue.areaSleepM1)-1].classList.add('pink');
        }
        const sleepM2 = res[9].search(/休眠[1-5]/);
        if (sleepM2 !== -1) {
          selectValue.areaSleepM2 = '0' + res[9].slice(sleepM2+2, sleepM2+3);
          document.getElementsByClassName('sleepM2')[parseInt(selectValue.areaSleepM2)-1].classList.add('blue');
        }
        const mealM1 = res[7].search(/食事[1-5]/);
        if (mealM1 !== -1) {
          selectValue.areaMealM1 = '0' + res[7].slice(mealM1+2, mealM1+3);
          document.getElementsByClassName('mealM1')[parseInt(selectValue.areaMealM1)-1].classList.add('pink');
        }
        const mealM2 = res[9].search(/食事[1-5]/);
        if (mealM2 !== -1) {
          selectValue.areaMealM2 = '0' + res[9].slice(mealM2+2, mealM2+3);
          document.getElementsByClassName('mealM2')[parseInt(selectValue.areaMealM2)-1].classList.add('blue');
        }
        if (res[15] !== undefined) {
          alert(`"1~15行目のテキストを読み込みました"\n"16行目以降にもテキストが存在する為、一応クリップボードの中身を全て表示します"\n${clipText}`);
        }
      }
    );
};

//ロード時
window.onload = function() {
  setMonster1Select();
  setMonster2Select(2);
  setArtifactSelect();
  setAreaTypeSelect();
  let a = localStorage.getItem('guideFlag');
  if (a === 'none') {
    document.getElementById('guideMessage').style.display = 'none';
    document.getElementsByClassName('guideChange')[1].classList.add('currentGuide');
  } else {
    document.getElementsByClassName('guideChange')[0].classList.add('currentGuide');
  }
}


