//SETA PARA O TOPO
document.querySelector('#seta_up').addEventListener('click', () => {
    window.scrollTo(top)
})

//REMOVER O ID DO LINK DO SITE
const menuLinks = document.querySelectorAll('.links-header a');
menuLinks.forEach((link) =>{
    link.addEventListener('click', () =>{
        setTimeout(()=>{
            history.replaceState('', document.title, window.location.origin + window.location.pathname + window.location.search);
        }, 1);
    })
})