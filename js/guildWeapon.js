//コンテンツ
const target4 = document.getElementsByClassName("m4");
const target4G = document.getElementsByClassName("4G");

//フラグ
let flg = true;

//ラジオボタン
const radio_btns = document.querySelectorAll(`input[type='radio'][name='drone']`);
for (let target of radio_btns) {
	target.addEventListener(`change`, () => {
		flg = !flg;
        if (flg) {
            for (i=0; i<target4.length; i++) {
                target4[i].style.display = "none";
            }
            for (i=0; i<target4G.length; i++) {
                target4G[i].style.display = "block";
            }
            document.getElementsByTagName('h1')[0].classList.remove("af");
            document.getElementsByTagName('h1')[1].classList.remove("af");
            document.getElementsByTagName('h1')[2].classList.remove("af");
            document.getElementsByTagName('h1')[0].classList.add("bef");
            document.getElementsByTagName('h1')[1].classList.add("bef");
            document.getElementsByTagName('h1')[2].classList.add("bef");
            for (i=0; i<document.getElementsByTagName('h2').length; i++) {
                document.getElementsByTagName('h2')[i].style.borderLeft = "solid 5px #7db4e6";
            }
            for (i=0; i<document.getElementsByTagName('ul').length; i++) {
                document.getElementsByTagName('ul')[i].style.boxShadow = "0px 0px 5px #89c3eb";
            }
            for (i=0; i<document.getElementsByTagName('ol').length; i++) {
                document.getElementsByTagName('ol')[i].style.boxShadow = "0px 0px 5px #89c3eb";
            }
        } else {
            for (i=0; i<target4.length; i++) {
                target4[i].style.display = "block";
            }
            for (i=0; i<target4G.length; i++) {
                target4G[i].style.display = "none";
            }
            document.getElementsByTagName('h1')[0].classList.remove("bef");
            document.getElementsByTagName('h1')[1].classList.remove("bef");
            document.getElementsByTagName('h1')[2].classList.remove("bef");
            document.getElementsByTagName('h1')[0].classList.add("af");
            document.getElementsByTagName('h1')[1].classList.add("af");
            document.getElementsByTagName('h1')[2].classList.add("af");
            for (i=0; i<document.getElementsByTagName('h2').length; i++) {
                document.getElementsByTagName('h2')[i].style.borderLeft = "solid 5px #ffc778";
            }
            for (i=0; i<document.getElementsByTagName('ul').length; i++) {
                document.getElementsByTagName('ul')[i].style.boxShadow = "0px 0px 5px #ffc778";
            }
            for (i=0; i<document.getElementsByTagName('ol').length; i++) {
                document.getElementsByTagName('ol')[i].style.boxShadow = "0px 0px 5px #ffc778";
            }
        }
	});
}