var taskBook = new Taskbook();
$(document).ready(function() {
  //var taskBook = new Taskbook();
  var newTask = new Task;
  $("#taskForm").submit(function(event){
    event.preventDefault();
    newTask = new Task($("#taskname").val(), $("#taskdesc").val(), $("#prereqs").val(), false );
    console.log(newTask);
    taskBook.addtask(newTask);
    $("#tasks").html("");

    Refreshtasks(taskBook);

  });
  // Stuff to do as soon as the DOM is ready
});
function Refreshtasks(book)
{
  $("#tasks").html("");
  book.tasks.forEach(function(tsk){
    $("#tasks").append(tsk.taskPrint());
    Attachremove(tsk);
  });
  console.log("Done refreshing.");
}

function Attachremove(tsk)
{
  console.log("#task" + tsk.id + "close");
  $("#task" + tsk.id + "close").click(function(){
    taskBook.tasks.splice(window[tsk.id] - 1, 1);
    Refreshtasks(taskBook);
    console.log("Done adding close button");
      console.log("#task" + tsk.id + "close");
  });
  console.log("Done adding close button");
}


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

function Taskbook(){
  this.tasks = [],
  this.currentId = 0

}

Task.prototype.taskPrint = function(){
  var taskprint= "<div id='" + "task" + this.id + "'>";
  taskprint += "<div class='container main'><div class=''> Name:<br>" + this.taskname + "<br></div>";
  taskprint += "<div> Description:" + this.taskbody + "</div>";
  taskprint += " Completed? <input type='checkbox' id='" + "task" + this.id + "completed'></input>";
  taskprint += "<br><input type='button' value='close' id='task" + this.id + "close'></input>  " + "</div>";
  taskprint += "</div></div>";
  return taskprint;
}
