let count = 1;
setInterval( function(){
    nextImage();
}, 5000)
function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

document.querySelector('#seta_up').addEventListener('click', () => {
    window.scrollTo(top)
})