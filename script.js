// $('#link-url').after('<span class="error-message">Sila masukkan link website sahaja!</span>')

// $('#link-url').on('input', function (evt){\
//     var url = evt.target.url-link
//     if(isValidUrl())
// })

// function isValidUrl(str) {
//     const patternUrl = new RegExp (
//         '^([a-zA-Z]+:\\/\\/)?' + // protocol
//       '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
//       '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR IP (v4) address
//       '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
//       '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
//       '(\\#[-a-z\\d_]*)?$', // fragment locator
//     'i'
//     );
//     return patternUrl.test(str);
// }

// above is checking realtime for url 


const form = document.getElementById('form-generate');
// input url
const qrcode = document.getElementById('qrcode');

console.log('form');

const onGenerateSubmit = (e) => {
    e.preventDefault();

    const linkurl = document.getElementById('link-url').value;
    const size = document.getElementById('size').value;

        console.log('linkurl','size')
    
        let request = XMLHttpRequest();

        request.open("GET",{
            "data": "https://www.qrcode-monkey.com",
            "config": {
                "body":"circle",
                "logo":"https://www.lindungianak.com/wp-content/uploads/2023/04/d288edb3-3488-4df0-a2a0-153b367ff561.jpg"
            },
            "size":200,
            "download":false,
            "file":"svg"
        })
        request.send();
        request.onload = () => {
            console.log(request);
            if (request.status ==200) {
                console.log(request.response)
            }
        }
}

// form.addEventListener('submit', onGenerateSubmit);

