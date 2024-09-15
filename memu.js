
let taskcount=2;
let additon=document.querySelector('.add');

additon.addEventListener('click',()=>{
    //storing input value
    let Taskinput=document.querySelector(".Write").value
    //checking empty string
    if(Taskinput==""){
        alert("Please Enter your Task");
    }
    else{
        //accesing most senior div
        let srdiv=document.querySelector('.work');
         //creating div
        let creatediv=document.createElement('div');
        creatediv.classList.add("addTask");
        //creating h3
        let createh3=document.createElement('h3');
        createh3.innerText=`${taskcount}.${Taskinput}`;
        //creating checkbox
        let createCheck=document.createElement('input');
        createCheck.type="checkbox";
        createCheck.classList.add("done")
        //create delete
        let createDelete=document.createElement('button');
        createDelete.classList.add('delete');
        createDelete.innerHTML='<i class="fa-solid fa-trash-can"></i>'

        creatediv.append(createh3);
        creatediv.append(createCheck);
        creatediv.append(createDelete);
        srdiv.append(creatediv);
        setTimeout(()=>alert("Task Added"),300);

        taskcount++;
        document.querySelector('.Write').value="";

        createDelete.addEventListener('dblclick',()=>{
            createCheck.remove();
            createDelete.remove();
            createh3.remove();
            setTimeout(()=>alert("Task Deleted"),300);
        })
    }


})


let deletion = document.querySelector('.delete');
let head = document.querySelector('h3')
let delicon=document.querySelector('.delete')
let check=document.querySelector('.done')

deletion.addEventListener('dblclick',()=>{
    head.remove();
    delicon.remove();
    check.remove();
    setTimeout(()=>alert("Task Deleted"),300);
})




