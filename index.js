function addNewTask() {
    var newTaskText = document.querySelector("#newTask").value;
    var newTask = document.createElement("li");
    newTask.innerText = newTaskText;
    document.querySelector("#myTaskList").appendChild(newTask);
};
function removeLast() {
    myTaskList.removeChild(myTaskList.lastChild);
};
function removeFirst() {
    myTaskList.removeChild(myTaskList.firstChild);
}