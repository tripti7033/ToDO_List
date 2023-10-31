const input = document.querySelector('.inp');
const add = document.querySelector('.add');
let list_el = document.querySelector('.tasks');

function addd() {
  let task = input.value;
  // console.log(task);
  if (input.value != "") {
    const task_el = document.createElement("div");
    task_el.classList.add("task");

    const task_content_el = document.createElement("div");
    task_content_el.classList.add("content");
    // task_content_el.innerText=task;

    task_el.appendChild(task_content_el);

    const input_el = document.createElement("input");
    input_el.classList.add("text");
    input_el.type = "text";
    input_el.value = task;
    input_el.setAttribute("readonly", "readonly");

    task_content_el.appendChild(input_el);


    const action_el = document.createElement("div");
    action_el.classList.add("actions");

    const edit_el = document.createElement("button");
    edit_el.classList.add("edit");
    edit_el.innerText = "Edit";

    let delete_el = document.createElement("button");
    delete_el.classList.add("delete");
    delete_el.innerText = " Delete";

    action_el.appendChild(edit_el);
    action_el.appendChild(delete_el);
    task_el.appendChild(action_el);

    list_el.appendChild(task_el);

    input.value = "";
    edit_el.addEventListener('click', function () {
      if (edit_el.innerText.toLowerCase() == "edit") {
        input_el.removeAttribute("readonly");
        input_el.focus();
        edit_el.innerText = "Save";
      } else {
        input_el.setAttribute("readonly", "readonly");
        edit_el.innerText = "Edit"
      }
    })

    delete_el.addEventListener('click', () => {
      console.log(task_el);
      list_el.removeChild(task_el)

    })
  }
  else {
    alert("You need to enter the data")
  }

}
add.addEventListener('click', addd)

document.addEventListener('keydown', function(e){
  if(e.key === 'Enter'){
     addd();
  }
})

//   let task = input.value;
//   // console.log(task);
//   if (input.value != "") {
//     const task_el = document.createElement("div");
//     task_el.classList.add("task");

//     const task_content_el = document.createElement("div");
//     task_content_el.classList.add("content");
//     // task_content_el.innerText=task;

//     task_el.appendChild(task_content_el);

//     const input_el = document.createElement("input");
//     input_el.classList.add("text");
//     input_el.type = "text";
//     input_el.value = task;
//     input_el.setAttribute("readonly", "readonly");

//     task_content_el.appendChild(input_el);


//     const action_el = document.createElement("div");
//     action_el.classList.add("actions");

//     const edit_el = document.createElement("button");
//     edit_el.classList.add("edit");
//     edit_el.innerText = "Edit";

//     let delete_el = document.createElement("button");
//     delete_el.classList.add("delete");
//     delete_el.innerText = " Delete";

//     action_el.appendChild(edit_el);
//     action_el.appendChild(delete_el);
//     task_el.appendChild(action_el);

//     list_el.appendChild(task_el);

//     input.value = "";
//     edit_el.addEventListener('click', function () {
//       if (edit_el.innerText.toLowerCase() == "edit") {
//         input_el.removeAttribute("readonly");
//         input_el.focus();
//         edit_el.innerText = "Save";
//       } else {
//         input_el.setAttribute("readonly", "readonly");
//         edit_el.innerText = "Edit"
//       }
//     })

//     delete_el.addEventListener('click', () => {
//       console.log(task_el);
//       list_el.removeChild(task_el)

//     })
//   }
//   else {
//     alert("You need to enter the data")
//   }

// })


