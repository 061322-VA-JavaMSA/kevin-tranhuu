console.log('Hello from login.js!');

let loginButton = document.getElementById('submitButton');
loginButton.addEventListener('click', login);



async function login(){

    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    let response = await fetch(`${apiUrl}/auth`,{
        method: 'POST',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            'username': `${username}`,
            'password': `${password}`
        })
    });

    if(response.status == 200){
        let data = await response.json();


        console.log(data);
        sessionStorage.setItem('principal', data);
        // redirect the page on success
        window.location.href="../index.html";
    } else{
        console.log('Unable to login.')
    }
}