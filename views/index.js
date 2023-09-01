
const display=document.getElementById('display');
const form=document.getElementById('form');

form.addEventListener('submit',addExpense);

function addExpense(e)
{
    let amt=document.getElementById('amount');
    let cat=document.getElementById('cat');
    e.preventDefault();
    const exp={
        amount: amt.value,
        category: cat.value
    };
    
    addExp(exp);

    async function addExp(exp)
    {
       
        try{
            const id=document.getElementById('id').value;
            if(!id)
            {
            const res=await axios.post('http://localhost:4000/expense',exp)
            if(res.status == 200)
            {
                location.reload();
                console.log('created successfully');
    
            }
        }else{
            const res=await axios.put(`http://localhost:4000/expense/${id}`,exp)
            if(res.status ==200)
            {
                location.reload();
                
            }
        }
        
        }
        catch(err){
            console.log(err);
        }
    }
    amt.value='';
    cat.value='';
}
const ul=document.createElement('ul');
function displayData(id, amt, cat)
{
    const div=document.createElement('div');
    div.setAttribute('id',id);
    const text=document.createTextNode('amount:'+amt+', '+cat);
    const del=document.createElement('button');
    del.textContent='delete';
    const edit=document.createElement('button');
    edit.textContent='edit';
    div.appendChild(text);
    div.appendChild(del);
    div.appendChild(edit);
    const li=document.createElement('li');
    li.appendChild(div);
    ul.appendChild(li);

    del.addEventListener('click',deleteExp);
    edit.addEventListener('click',editExp);

    async function deleteExp(e)
    {
        e.preventDefault();
        try{
            const par=this.parentElement;
            const id=par.id
            const res=await axios.delete(`http://localhost:4000/expense/${id}`)
            if(res.status===200)
            {
                console.log('deleted successfully');
                location.reload();
            }
        }
        catch(err){
            console.log(err);
           }
    }
    async function editExp(e)
    {
        e.preventDefault();
        try{
            const par=this.parentElement;
            const id=par.id;
            const res=await axios.get(`http://localhost:4000/expense/${id}`)
            if(res.status===200)
            {
                console.log('returned successfully');
                
                document.getElementById('amount').value=res.data.amount;
                document.getElementById('cat').value=res.data.category;
                document.getElementById('id').value=res.data.id;
            }
           
        }
        catch(err){
            console.log(err);
           }
    }
    
}







document.addEventListener('DOMContentLoaded',content);

async function content()
{
    try{
        const res=await axios.get('http://localhost:4000/expense')
        console.log(res.data)
        for(let i=0;i<res.data.length;i++)
        {
            displayData(res.data[i].id,res.data[i].amount,res.data[i].category);
        }
        
    }
    catch(err){
        console.log(err);
    }
}
display.appendChild(ul);