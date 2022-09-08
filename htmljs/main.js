
let text =document.getElementById('text');
let price =document.getElementById('price');
let taxos =document.getElementById('taxos');
let ads =document.getElementById('ads');
let disoount =document.getElementById('disoount');
let total =document.getElementById('total');
let cont =document.getElementById('cont');
let cata =document.getElementById('cata');
let btn =document.getElementById('btn');
let mood ='create'
let ='tmp';

function get() {
    if ( price.value != '') {
         
        let index = +price.value + +taxos.value + +ads.value - +disoount.value; 
        total.innerHTML = index;
        total.style.backgroundColor = 'green'
    }
    else
    {
        total.innerHTML = '';
        total.style.backgroundColor='rgb(114, 9, 9)'
    }
    
}
let array ;
if (localStorage.prodo != null) {
    array=JSON.parse(localStorage.prodo)
}
else
{
    array =[];
}


btn.onclick = function(){
    let personal ={
        text:text.value.toLowerCase(),
        price:price.value,
        taxos: taxos.value,
        ads:ads.value, 
        disoount:disoount.value,
        total:total.innerHTML,
         cont:cont.value,
        cata:cata.value.toLowerCase(),
       
        
    }
    if ( text.value !=''&& price.value !='' && cata.value !='' &&  personal.cont < 200  ) {
        if ( mood === 'create') {
            if ( personal.cont>1 ) {
            for (let i = 0; i < personal.cont  ; i++) {
                
                array.push(personal);
            }
        }else{
            array.push(personal);
           }
        
        } else 
{
    array[tmp] = personal;
    mood = 'create';
    cont.style.display='block';
    btn.innerHTML='create';
}

         creat();
    }
 

  

   localStorage.setItem('prodo' , JSON.stringify(array) )
     console.log(personal); 
    
     getdsta();
    }


function creat() {
    text.value='';
    price.value='';
    taxos.value='';
    ads.value='';
    disoount.value='';
    total.innerHTML='';
    cont.value='';
    cata.value='';
}
function getdsta() {
let table =''
for (let i = 0; i < array.length; i++) {
    table += `
    <tr>
    <td>${i+1}</td>
    <td>${array[i].text}</td>
    <td>${array[i].price}</td>
    <td>${array[i].taxos}</td>
    <td>${array[i].ads}</td>
    <td>${array[i].disoount}</td>
    <td>${array[i].total}</td>
    <td>${array[i].cata}</td>
    <td><button onclick="uppdet(${i})" >update</button></td>
    <td><button onclick =" deletedata( ${i} )" id="deleted" >delete</button></td>
  </tr>
    `
}

document.getElementById('tbody').innerHTML =table;

if ( array.length>0 ) {
    let btndelet = document.getElementById('deletall');
    btndelet.innerHTML =`<button onclick =" datadelet()">Delete All  (${array.length})</button>`
}else{
    btndelet.innerHTML =``;
}
}

getdsta();


function deletedata(i) {
    array.splice(i,1);
    localStorage.prodo = JSON.stringify(array);
    getdsta();   
} 


  function datadelet(){
    localStorage.clear();
    array.splice(0);
    getdsta();
  }  
   function uppdet(i) {
    text.value=array[i].text;
    price.value=array[i].price;
    taxos.value=array[i].taxos;
    ads.value=array[i].ads;
    disoount.value=array[i].disoount;
    get() ;
   cont.style.display='none';
   cata.value=array[i].cata;
   btn.innerHTML="update";
   mood='update';
   tmp = i;
   }
   let searchmood='text'
   function searchdata(id) {
    let search=document.getElementById('ser');
    if (id == 'search1' ) {
        searchmood='text';
       

    }
    else{
        searchmood='category';
       
    }search.placeholder='searh by ' + searchmood;
    
    search.focus();
    search.value='';
    getdsta();

   }



    function datasrearch(value){
        let table ='';
    if ( searchmood =='text') {
        for (let i = 0; i < array.length; i++) {
            if (array[i].text.includes(value.toLowerCase())) {
                
            table += `
    <tr>
    <td>${i}</td>
    <td>${array[i].text}</td>
    <td>${array[i].price}</td>
    <td>${array[i].taxos}</td>
    <td>${array[i].ads}</td>
    <td>${array[i].disoount}</td>
    <td>${array[i].total}</td>
    <td>${array[i].cata}</td>
    <td><button onclick="uppdet(${i})" >update</button></td>
    <td><button onclick =" deletedata( ${i} )" id="deleted" >delete</button></td>
  </tr> 
 `
}
       
 }
        
    }else{
        for (let i = 0; i < array.length; i++) {
            if (array[i].cata.includes(value.toLowerCase())) {
                
            table += `
    <tr>
    <td>${i}</td>
    <td>${array[i].text}</td>
    <td>${array[i].price}</td>
    <td>${array[i].taxos}</td>
    <td>${array[i].ads}</td>
    <td>${array[i].disoount}</td>
    <td>${array[i].total}</td>
    <td>${array[i].cata}</td>
    <td><button onclick="uppdet(${i})" >update</button></td>
    <td><button onclick =" deletedata( ${i} )" id="deleted" >delete</button></td>
  </tr> 
 `
}
       
 }
        

    }
    document.getElementById('tbody').innerHTML =table;
   }


