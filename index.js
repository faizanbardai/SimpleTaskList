function addNewTask(e) {
    //create new list item and add class to it
    var newLi = document.createElement("li");
    newLi.classList.add("taskListItem");

    //add text to it
    newLi.innerText = e;

    //append it to the unordered list
    document.querySelector("#myTaskList").appendChild(newLi);

    //clear the input text field
    newTask.value = "";
    newTask.focus();

};
function enterToAdd(event) {

    if (event.keyCode === 13) {
        addNewTask(newTask.value);
    };
};
function removeLast() {
    //check if there any list item present; if so, then delete the last element
    myTaskList.childElementCount > 0 ? myTaskList.removeChild(myTaskList.lastChild) : null;
};
function removeFirst() {
    //check if there any list item present; if so, then delete the first element
    myTaskList.childElementCount > 0 ? myTaskList.removeChild(myTaskList.firstChild) : null;
};
function getTasksAsArray() {
    //get all the list items as node list
    var allTasks = document.querySelectorAll("#myTaskList li");

    //For each list item, save it's inner text value in an array
    var allTasksAsString = [];
    allTasks.forEach((e) => allTasksAsString.push(e.innerText));
    return allTasksAsString;
};
function changeTaskBackgroundColor() {
    //apply the selected color to the background of unordered list
    document.querySelector("#myTaskList").style.backgroundColor = colorPicker.value;
};
function bubblesort() {
    //sort the array alphabetically
    var sortedTask = getTasksAsArray().sort();

    //delete all list items
    myTaskList.innerHTML = "";

    //repopulate the list items after sorting 
    //by calling addNewTask function and passing each list item as parameter
    sortedTask.forEach((e) => addNewTask(e));
};
