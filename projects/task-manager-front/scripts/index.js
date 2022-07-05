let getUserButton = document.getElementById('getUser');
getUserButton.addEventListener('click', getUsers);


async function getUsers(){

    console.log(sessionStorage.getItem('principal'));

    let response = await fetch(`${apiUrl}/users`, {
        credentials: 'include'
    });

    if(response.status == 200){
        let data = await response.json();

        console.log(data);

        // redirect the page on success
        // window.location.href="../index.html";
    } else{
        console.log('Unable to retrieve users.')
    }
}