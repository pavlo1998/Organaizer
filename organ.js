
let i = 0;
   
function getNumberId(a){
   
   let numb1 = (i++).toString();
   let result = '';
   result = a + `${numb1}`;
   return result;
}

function addNewTask()
{
   
      var inputElement = document.getElementById('addTask');
      var newTask = document.createElement('input');
      newTask.setAttribute("type", "checkbox");
      newTask.setAttribute("id", getNumberId('checkbox'));
      newTask.setAttribute("class", 'checkbox');
      var butt = document.createElement('button');
      butt.setAttribute('id', getNumberId('delete'))
      butt.setAttribute('class', 'delete')

      butt.innerHTML = 'X'
      
      

      var newDiv = document.createElement('div');
      newDiv.setAttribute("id", getNumberId('createDiv'));
      newDiv.setAttribute("class", 'createDiv');
      var firstDiv = document.getElementById('toDo');
      

      firstDiv.appendChild(newDiv);
      butt.onclick = function()
      {
        firstDiv.removeChild(newDiv);
      }
      

      
      var label = document.createElement("label");
      label.for = "checkbox" ;
      var br = document.createElement('br');
      
      
      
      label.innerHTML = inputElement.value
      newDiv.appendChild(newTask);
      newDiv.appendChild(label);
      newDiv.appendChild(butt);
      newDiv.appendChild(br);
     
      var doneDiv = document.getElementById('done');
      
     
      newTask.onclick = function()
      {
         if(!newTask.checked)
         {
         
            firstDiv.appendChild(newDiv);
         
            butt.onclick = function()
            {
               firstDiv.removeChild(newDiv)
            }
         }


         else if(newTask.checked)
         {
         
            doneDiv.appendChild(newDiv);
          
            butt.onclick = function()
            {
               doneDiv.removeChild(newDiv)
            }
            
         }
         
         
      }
  
      
}
