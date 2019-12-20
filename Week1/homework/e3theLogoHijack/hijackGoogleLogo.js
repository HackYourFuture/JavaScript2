'use strict'

function hijackGoogleLogo () {
    let googleImage=document.querySelector('#hplogo')
    googleImage.src='https://www.hackyourfuture.dk/static/logo-dark.svg'
    googleImage.srcset='https://www.hackyourfuture.dk/static/logo-dark.svg'

    return googleImage
}


