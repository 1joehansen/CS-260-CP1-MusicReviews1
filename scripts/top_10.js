$('document').ready(function(){
    $("#pic1").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic2").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic3").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic4").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic5").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic6").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic7").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic8").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic9").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");
    $("#pic10").attr("src", "/images/album-covers/" + getRandomImg() + ".jpg");

});


function getRandomImg() {
    min = Math.ceil(1);
    max = Math.floor(26);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
