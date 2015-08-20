/**
 * Created by Junior on 19.08.2015.
 */

(function (document) {
    "use strict";

    var taskList = [{"id": 1, "taskbody": "task 1", "status": "done"},
        {"id": 2, "taskbody": "task 2", "status": "in progress"},
        {"id": 3, "taskbody": "task 3", "status": "done"}];
    var taskListID = document.getElementById("taskListID");

    function printTask() {
        for (var i = 0, n = taskList.length; i < n; i++) {
            var li = document.createElement("li");
            li.innerHTML = taskList[i].taskbody + " --> status - " + taskList[i].status;
            taskListID.appendChild(li);
        }
    }

    document.addEventListener("DOMContentLoaded", printTask);

}(document));
