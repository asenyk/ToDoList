/**
 * Created by Junior on 19.08.2015.
 */

(function(document){ "use strict";

    var taskList = ["task 1", "task 2", "task 3"];
    var taskListID = document.getElementById("taskListID");

    function printTask() {
        for (var i = 0, n = taskList.length; i < n; i++) {
            var li = document.createElement("li");
            li.innerHTML = taskList[i];
            taskListID.appendChild(li);
        }
    }

    document.addEventListener("DOMContentLoaded", printTask);

}(document));
