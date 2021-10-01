let auth = document.querySelector('.auth__form'),
    profile = document.querySelector('.profile__auth__form')

document.getElementById("form-submit").onclick = function(event) {
    event.preventDefault()

    let username = document.querySelector('#login').value,
        email = document.querySelector('#email').value,
        tel = document.querySelector('#tel').value,
        pass = document.querySelector('#password').value,
        rePass = document.querySelector('#re__password').value,
        profileTitle = document.querySelector('.profile__auth__title')

    let data = {
        "username" : username,
        "email" : email,
        "tel" : tel,
        "pass" : pass,
        "rePass" : rePass
    }

    if (data.username == "" || data.email == "" || data.tel == "" || data.pass == "" || data.rePass == "" || data.rePass != data.pass) {
        alert('Данные заполнены некорректно')
    } else {

        auth.classList.remove('visible')
        auth.classList.add('unvisible')
        profile.classList.remove('unvisible')
        profile.classList.add('visible')
        
        profileTitle.innerHTML = 'Здравствуйте, ' + data.username
    }
}

document.querySelector('.btn_out').onclick = function() {
    data = {}
    localStorage.clear()
    auth.classList.remove('unvisible')
    auth.classList.add('visible')
    profile.classList.remove('visible')
    profile.classList.add('unvisible')
}