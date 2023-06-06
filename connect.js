

const uname = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const form=document.getElementById('contact-form');
const userList = document.getElementById('userList');
const axiosInstance = axios.create({
    baseURL:'http://localhost:3000'
});

try {
    
    window.addEventListener('DOMContentLoaded',async()=>{

        const res = await axiosInstance.get('/getDetails');

        for(let i =0 ; i<res.data.length;i++){
                
            showOnScreen(res.data[i]);

        }
        // console.log(res);
    })
} catch (error) {
    console.log(error);
}



form.addEventListener('submit',async(res)=>{

    let myobj={
        userName:uname.value,
        phNum:phone.value,
        email:email.value,
    }

    const result = await axiosInstance.post('/postDetails',myobj);

    showOnScreen(result);
    
})


function showOnScreen(myobj) {


    console.log('hello');
    console.log(myobj);
    const li = document.createElement('li');

    const del = document.createElement('button');

    //  Delete button
    del.innerHTML = 'Delete Products';
    del.classList.add('Add');
    // del.style.margin='0px 6px';
    // del.style.padding='0px 6px';



    li.appendChild(document.createTextNode(`${myobj.userName},${myobj.phoneNumber},${myobj.email}`));

    li.appendChild(del);

    userList.style.listStyle = 'none';
    userList.appendChild(li);



    del.onclick = async () => {

        await axiosInstance.post(`/deleteDetails/${myobj.id}`);

        userList.removeChild(li);
    }




}