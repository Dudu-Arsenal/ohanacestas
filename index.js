let count = 1;
setInterval( function(){
    nextImage();
    console.log("A")
}, 5000)
function nextImage(){
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}