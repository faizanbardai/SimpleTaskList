function addNewTask() {
    var newTask = document.createElement("li");
    newTask.classList.add("taskListItem");
    newTask.innerText = document.querySelector("#newTask").value;
    document.querySelector("#myTaskList").appendChild(newTask);
    document.querySelector("#newTask").value = "";
};
function removeLast() {
    myTaskList.childElementCount > 0 ? myTaskList.removeChild(myTaskList.lastChild) : null;

};
function removeFirst() {
    myTaskList.childElementCount > 0 ? myTaskList.removeChild(myTaskList.firstChild) : null;
};
function getTasksAsArray() {
    var allTasks = document.querySelectorAll("#myTaskList li");
    var allTasksAsString = [];
    allTasks.forEach((e) => allTasksAsString.push(e.innerText));
    return allTasksAsString;
};
function changeTaskBackgroundColor() {
    document.querySelector("#myTaskList").style.backgroundColor = colorPicker.value;
};