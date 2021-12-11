// constant variables
const CLEAR_BUTTON = document.getElementById("clear-btn"),
      LIST_ITEM = document.getElementsByTagName("LI");

// creates list with entered values
function addListItem() {
    const INPUT = document.getElementById("text");

// if input is left blank dont action remaining function code
    if (INPUT.value.trim().length === 0) {
        console.log("test");
        alert("Please enter an item");
    } else {
        let text = document.getElementById("text").value,
        divNode = document.createElement("div"),
        listNode = document.getElementById("list"), 
        liNode = document.createElement("li"),
        textNode = document.createTextNode(text),
        textDivNode = document.createElement("div"),
        ranID = randomID(),
        editButton = document.createElement("button"),
        deleteButton = document.createElement("button");

    editButton.innerHTML = "Edit";
    deleteButton.innerHTML = "Delete";
     
    editButton.contentEditable = false;
    deleteButton.contentEditable = false;

      listNode.appendChild(liNode);
      liNode.appendChild(textDivNode);
      textDivNode.appendChild(textNode);
      liNode.appendChild(divNode);
      divNode.appendChild(deleteButton);
      divNode.appendChild(editButton);
      liNode.className = "grocery-item";
      divNode.className = "btn-container";
      textDivNode.id = `item-${ranID}`;
      liNode.id = `list-${ranID}`;
      deleteButton.id = `delete-${ranID}`;
      deleteButton.className = "delete-btn";
      editButton.id = `edit-${ranID}`;
      editButton.className = "edit-btn";

  // button event listeners
    const DELETE_B = document.getElementById(`delete-${ranID}`),
          EDIT_B = document.getElementById(`edit-${ranID}`);

    DELETE_B.addEventListener("click", deleteBtn);
    EDIT_B.addEventListener("click", editBtn);
   }
}

// clears input value after button click
function clearInput() {
    const INPUT = document.getElementById("text");

    INPUT.value = " ";
}

// clear all list items
function clearList() {
  document.getElementById("list").innerHTML= " ";
}

// generates a random id
function randomID () {
  return Math.random().toString(36).substr(2, 9);
};

// allows Enter key to submit values
document.addEventListener("keyup", function(e) {
  if (e.key === 'Enter') {
    e.preventDefault();
    document.getElementById("add-to-list-btn").click();
  }
});

// delete list item
function deleteBtn (e) { 
  let id = e.target.id.split("-").pop();
  document.getElementById(`list-${id}`).remove();
}

// edit list item
function editBtn (e) {
  let id = e.target.id.split("-").pop(),
      item = document.getElementById(`list-${id}`),
      editBtn = document.getElementById(`edit-${id}`);

 item.contentEditable = true;

 if(editBtn.innerHTML === "Edit") {
   editBtn.innerHTML = "Save";
  item.style.backgroundColor = "lightgrey";
 } else if (editBtn.innerHTML = "Save") {
   editBtn.innerHTML = "Edit";
   item.contentEditable = false;
   item.style.backgroundColor = null;
 } else {
   editBtn.innerHTML = "Edit"; 
   item.contentEditable = true;
 }
}
