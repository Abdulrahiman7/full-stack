
const bodyDisplay=document.getElementById('data-display');
//storing form into database by post
const form=document.getElementById('form');
form.addEventListener('submit',newUser);
function newUser(e)
{
    e.preventDefault();
    let name=document.getElementById('name').value;
    let mobile=document.getElementById('mobile').value;
    let email=document.getElementById('email').value;
    const newForm={
        'name':name,
        'mobile':mobile,
        'email':email
    }
    console.log(newForm);
    postData(newForm);
     async function postData(newForm){

        try{
            const res=await axios.post('http://localhost:4000/form',newForm);
            console.log('posted successfully')
           if(res.status === 200)
           {
            location.reload();
            
            // display(res.data.name,res.data.mobile,res.data.email)
        }
        
        }
        catch(err) {
            console.log(err);
        }
     }

}



const ul=document.createElement('ul');
function display(id,name,mobile,email)
{
    
    const div=document.createElement('div');
    div.setAttribute('id',id);
    const textContent=document.createTextNode(name+', '+mobile+', '+email);
    const delet=document.createElement('button');
    delet.textContent='Delete';
    delet.setAttribute('id','delete');
    div.appendChild(textContent);
    div.appendChild(delet);
    const li=document.createElement('li');
    li.appendChild(div);
    ul.appendChild(li);
   
       //deleting function of a user


delet.addEventListener('click',delUser);
async function delUser(e)
{
    e.preventDefault();
    try{
        
    console.log('deleting started');
    const par=this.parentElement;
    const delid=par.id;
    console.log(delid);
    const res=await axios.delete(`http://localhost:4000/form/${delid}`);
    if(res.status === 200)
    {
        console.log('deleted successfully');
        location.reload();
    }
}
catch(err){
    console.log(err);
}
}

}


 document.addEventListener('DOMContentLoaded',()=>{
    userData();
    async function userData(){
       
        try{
            const user=await axios.get('http://localhost:4000/form')
    
            for(let i=0;i<user.data.length;i++)
            {
                display(user.data[i].id,user.data[i].name, user.data[i].mobile, user.data[i].email)
            }
        }
        catch(err){
            console.log(err);
        }
    }
    

})
bodyDisplay.appendChild(ul);


