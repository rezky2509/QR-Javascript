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
}

form.addEventListener('submit', onGenerateSubmit);