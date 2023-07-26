var result = getData(); // ここでgetData関数を呼び出す。
var elem = document.getElementById("result"); // ここでresultの値を表示する。
elem.innerHTML = result; // ここでresultの値を表示する。
/*getDataの中でhogehoge関数を呼び出す。*/
function getData() {
    return hogehoge();
}
/*hogehoge関数は変更せず、getData関数の中を変更する。*/
function hogehoge() {
    return "hogehoge";
}