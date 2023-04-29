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

const menuLinks = document.querySelectorAll('.links-header a');

menuLinks.forEach((link) =>{
    link.addEventListener('click', () =>{
        setTimeout(()=>{
            history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }, 1);
    })
})