const form=document.getElementById('form');
form.addEventListener('submit',addProduct);

async function addProduct()
{
    const price=document.getElementById('price');
    const name=document.getElementById('name');
    const newItem={
        price:price.value,
        name:name.value
    }
    try{
        const item=await axios.post('http://localhost:4000/admin',newItem)
        if(item.status==200)
        {
            location.reload();
        }
    }
    catch(err){
        console.log(err);
    }
}
const ul=document.createElement('ul');
function display(id, price, name)
{
    const li=document.createElement('li');
    li.setAttribute('id',id);
    const text=document.createTextNode(`Product name: ${name}, Selling Price: ${price}`);
    const  del=document.createElement('button');
    del.textContent= 'delete';
    li.appendChild(text);
    li.appendChild(del);
    ul.appendChild(li);
    del.addEventListener('click',deleteItem);
}
async function deleteItem(e)
{
    e.preventDefault();
    try{
        const id=this.parentElement.id;
        const item=await axios.delete(`http://localhost:4000/admin/${id}`)
        if(item.status==200)
        {
            console.log('successfully deleted');
            location.reload();
        }
    }
    catch(err){
        console.log(err);
    }
}

document.addEventListener('DOMContentLoaded',getPage);

async function getPage()
{
    let total=0;
    try{
        
    const items=await axios.get('http://localhost:4000/admin')
    if(items.status==200)
    {
        for(let i=0;i<items.data.length;i++)
        {
            total+= items.data[i].price;
            display(items.data[i].id, items.data[i].price, items.data[i].name);
        }
    }
    const totalPrice=document.getElementById('product-list');
    const textCont= document.createTextNode(total);
    totalPrice.appendChild(textCont);
    const list=document.getElementById('list');
    list.appendChild(ul);
    }
    catch(err){
        console.log(err);
    }
}