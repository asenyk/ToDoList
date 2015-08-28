/**
 * Created by Junior on 19.08.2015.
 */

(function (document) {
    "use strict";

    var taskList = [{"id": 1, "taskbody": "task 1", "done": true},
        {"id": 2, "taskbody": "task 2", "done": false},
        {"id": 3, "taskbody": "task 3", "done": true}];
    var taskListID = document.getElementById("taskListID");
    var addTask = document.getElementById("btnAddNewTaskID");

    function addNewTask() {
        var getNewTask = document.getElementById("inputAddNewTaskID");
        var done = false;
        var taskbody = getNewTask.value;
        var id = taskList.length + 1;
        taskList.push({"id": id, "taskbody": taskbody, "done": done});
        printTask(taskbody, done, id);
    }

    function removeTask(id) {
        var removeElement = document.getElementById(id);
        removeElement.parentNode.removeChild(removeElement);
    }

    function printTask(taskbody, done, id) {
        var li = document.createElement("li");
        var input = document.createElement("input");
        var remove = document.createElement("a");
        var removeID = "taskID" + id;
        input.setAttribute("type", "checkbox");
        li.className = "list-group-item";
        input.className = "statusCheckbox";
        remove.className = "removeBtn btn btn-default";
        li.id = removeID;
        li.innerHTML = taskbody;
        remove.innerHTML = "(x)";
        taskListID.appendChild(li);
        li.appendChild(remove);
        li.insertBefore(input, li.firstChild);
        if (done === true) {
            input.checked = true;
            li.className = "statusDone list-group-item";
        }
        remove.onclick = function () {
            removeTask(removeID);
        }
    }

    function printAllTask() {
        for (var i = 0, n = taskList.length; i < n; i++) {
            printTask(taskList[i].taskbody, taskList[i].done, taskList[i].id);
        }
    }

    document.addEventListener("DOMContentLoaded", printAllTask);

    document.getElementById("inputAddNewTaskID").addEventListener("keypress", function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            addNewTask();
        }
    });

    addTask.onclick = function () {
        addNewTask();
    };


}(document));