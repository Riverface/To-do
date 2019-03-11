$(document).ready(function() {
//var taskBook = new Taskbook();
$("#taskForm").submit(function(event){
event.preventDefault();
newTask = new Task($("#taskname").val(), $("#taskdesc").val(), $("#prereqs").val(), false );
addtask(newTask);
console.log(newTask);
});



   // Stuff to do as soon as the DOM is ready

});

Taskbook.prototype.addtask = function(task) {
  task.id = this.assignId();
  this.tasks.push(task);
}

Taskbook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

Taskbook.prototype.findtask = function(id) {
  for (var i=0; i< this.tasks.length; i++) {
    if (this.tasks[i]) {
      if (this.tasks[i].id == id) {
        return this.tasks[i];
      }
    }
  };
  return false;
}

function Task(taskname, taskbody, requirements, completed) {
this.taskname = taskname,
this.taskbody = taskbody,
this.requirements = requirements,
this.completed = completed
}
function Taskbook()
{
this.contacts = [],
this.currentId = 0

}
task.prototype.taskPrint = function()
{
this = "";
this += "<div><div><br>" taskname + "<br></div>";
this += "<div>" + taskdesc + "</div>";
this += "<input type='checkbox'>" + "</div>";
this += "</div>";

}
