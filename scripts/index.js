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





    const hScroll = document.getElementById('h-scroll');

    window.addEventListener('load', () => {
    let count = 0;
    self.setInterval(() => {
        hScroll.scrollTo(hScroll.scrollLeft + 1, 0);
       
        count += 1;
        
        if (count % 250 == 0){
            let src_string = "/images/album-covers/" + getRandomImg() + ".jpg";
            let append_string = '<img class="home-album" id="pic7" src=' + src_string + ' alt="pic7" width="275" height="275">'
            $("#h-scroll").append(append_string);
            $("#h-scroll").prepend(append_string);
        }
    }, 25);
    });

});


function getRandomImg() {
    min = Math.ceil(1);
    max = Math.floor(26);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
