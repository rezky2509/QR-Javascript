// let values = {}

// $('.unifiltercontrol').change(function(e){
//     let data = $(this).data('param');
//     let value = this.value;
//     values[data] = value;

//     let keys = Object.keys(values);

//     for(inc = 0; inc < keys.length; inc++) {
//         let key = keys[inc];
//         params.push(key+'=)
//     }
// })

document.form_selected.onclick = function(){
    var url = document.querySelector('input[name=url]:checked').value;    
    result.innerHTML = 'Link Selected is ' +url
}

// google form responsive 

// @media screen and (max-width: 700px){
//     iframe[src*="https://docs.google.com/forms/d/e/1FAIpQLSednbpxaOugrtewNg4duM5K3lr6vILV1uFOq57j7PA2tyGh_Q/viewform?embedded=true"] {
//         width: 100% !important;
//         height: 800px;
//     }
// }

