const player = document.querySelector('.player');
const block = document.querySelector('.block');

document.addEventListener("keydown", function(event){
    jump();
});

function jump () {
    if (player.classList != "jump"){
        player.classList.add("jump")
    }
    setTimeout( function (){
        player.classList.remove("jump")
    }, 1000)
}