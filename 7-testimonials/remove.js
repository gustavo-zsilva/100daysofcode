const removeBtn = document.querySelector('.remove button')
removeBtn.addEventListener('click', () => {
    if(confirm('Deseja apagar este depoimento? ')) {
        console.log(all.length);
        
        all.splice(counter, 1)

        configureIds()
    }
})

function configureIds() {
    for(let i = 0; i <= all.length; i++) {
        all[i].id = i
    }

    // all.forEach(i => {
    //     all[i].id = i
    //     console.log(all[i].id);
    // });
}

// function importScript() {(function() {

//     var script = document.createElement('script');
//     script.type = 'text/javascript';
//     script.src = '../7-testimonials/script.js';
    
//     document.getElementsByTagName('head')[0].appendChild(script);
//     })();
    
//     console.log(all);
//     console.log(counter);
    
// }

