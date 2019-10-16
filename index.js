function addNewTask(e) {
    var newLi = document.createElement("li");
    newLi.classList.add("taskListItem");
    newLi.innerText = e;
    document.querySelector("#myTaskList").appendChild(newLi);
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
function bubblesort() {
    var sortedTask = getTasksAsArray().sort();
<<<<<<< HEAD
    while (myTaskList.childElementCount > 0) {
=======
    while (myTaskList.childElementCount>0) {
>>>>>>> 08b26bd696784fddc0d943e2b1e9fb85cb6541f5
        myTaskList.removeChild(myTaskList.lastChild);
    };
    sortedTask.forEach((e) => addNewTask(e));
};
