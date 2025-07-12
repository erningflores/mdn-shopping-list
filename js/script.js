const list = document.querySelector('ul');
const input = document.querySelector('#item');
const btn = document.querySelector('button');

function addList(){
    const theItem = input.value;
    input.value = "";

    if(theItem.trim() === ""){
        return;
    }

    const li = document.createElement('li');
    const span = document.createElement('span');
    const deleteBtn = document.createElement('button');

    li.appendChild(span);
    li.appendChild(deleteBtn);
    span.textContent = theItem;
    deleteBtn.textContent = "Delete";
    list.appendChild(li);

    li.tabIndex = 0;

    deleteBtn.addEventListener('click', event => {
        event.preventDefault();
        
        const liToRemove = deleteBtn.parentNode;
        const nextElement = liToRemove.nextSibling;
        const prevElement = liToRemove.previousSibling;

        liToRemove.remove();

        if(nextElement){
            nextElement.focus();
        }else if(prevElement){
            prevElement.focus();
        }else {
            input.focus();
        }
    });

    li.focus();
}

btn.addEventListener('click', addList);