/**
 * Created by Junior on 19.08.2015.
 */

(function (document) {
    "use strict";

    var taskList = [{"id": 1, "taskbody": "task 1", "done": true},
        {"id": 2, "taskbody": "task 2", "done": false},
        {"id": 3, "taskbody": "task 3", "done": true}];
    var taskListID = document.getElementById("taskListID");

    function printTask() {
        for (var i = 0, n = taskList.length; i < n; i++) {
            var li = document.createElement("li");
            var input = document.createElement("input");
            input.setAttribute("type", "checkbox");
            if (taskList[i].done === true){
                input.checked = true;
            }
            li.className = "list-group-item";
            input.className = "statuscheckboxStatus";
            li.innerHTML = taskList[i].taskbody;
            taskListID.appendChild(li);
            li.insertBefore(input, li.firstChild);
        }
    }

    document.addEventListener("DOMContentLoaded", printTask);

}(document));
