/**
 * Created by Junior on 19.08.2015.
 */

var taskList = ["task 1", "task 2", "task 3"];

var printTask = function (taskList, taskListID, document) {
    for (i = 0, n = taskList.length; i < n; i++) {
        var li = document.createElement("li");
        li.innerHTML = taskList[i];
        taskListID.appendChild(li);
    }
}

var onLoadWindow = function(window) {
    var result;
    if (window.addEventListener){
        result = function(callback) {
            window.addEventListener("load", callback, false);
        };
    } else if (window.attachEvent){
        result = function(callback) {
            window.attachEvent("onload", callback);
        };
    } else {
        result = function() {};
    }
    return result;
}(window);
onLoadWindow(function() {
    printTask(taskList, document.getElementById("taskListID"), document);
});
