//Backendless.initApp("55DFB313-760B-DEE2-FFFF-D333FD2E3E00","62848460-C67E-8D24-FF42-C03EEEDAF000","v1");

var APP_ID = '55DFB313-760B-DEE2-FFFF-D333FD2E3E00';
var APP_KEY = '62848460-C67E-8D24-FF42-C03EEEDAF000';
var APP_VER = 'v1';

Backendless.initApp(APP_ID, APP_KEY, APP_VER);


//define a task object (model)
function Tasks() {
    this.Task = "";
    // you could add more parameters to you tasks here
}

// Define task object for use in adding task to Backendless
// see https://backendless.com/documentation/data/android/data_data_object.htm 
//public class Task
//{
//  // using public fields, but you can 
//  // use getter/setter methods too
//  public String name;
//}

var tasks = Backendless.Persistence.of( Tasks ).find().data;

function onAppReady() {
    if( navigator.splashscreen && navigator.splashscreen.hide ) {   // Cordova API detected
        navigator.splashscreen.hide() ;
    }
    
    //run a query
    
    
//    tasks.forEach(function (task) {
//      alert(task.Task);
//    })    
//    alert(tasks[1].Task);
//    alert(tasks[0].Task);
    
    
    // Initialise buttons once page has loaded
    $("#addTaskButton").click(addToList);
    $("#update").click(updateList);
    
    //$("#test").append("<li> ADDED ITEM</li>");
    
    alert("onAppReady!!!");
    
    
}
document.addEventListener("app.Ready", onAppReady, false) ; 


function addToList(){
    // Get input from text box
    var tasktext = $("#addTaskText").val();
    
    // 
    var myCar = new Object();
myCar.make = "Ford";
    
    // Create new task and set its .Task to input
    var newTask = new Tasks();
    newTask.Task = tasktext;
    
    // save task to backendless
    Backendless.Persistence.of( Tasks ).save(newTask);
    
    // update list
    $('#taskList').append("<li>"+newTask.Task+"</li>").listview('refresh');
    
    
//    alert(newTask.Task);
//    alert("addToList");
}


function updateList(){
    // Getting sorted list on created date
    var query = new Backendless.DataQuery(); 
    query.condition = "Task == TEST";
//    QueryOptions queryOptions = new QueryOptions();
//    queryOptions.addSortByOption( "created ASC" );
//    dataQuery.setQueryOptions( queryOptions );
    
    // example of retrieving first task
    var singleTask = Backendless.Persistence.of( Tasks ).findFirst();
    alert(singleTask.Task);
    
    // get fresh version of list
    tasks = Backendless.Persistence.of( Tasks ).find().data;
    
    //wipe the list clean
    $('#taskList').empty();

    //add each tasks
    for (var i = 0; i < tasks.length; i++) {
        $('#taskList').append("<li>"+tasks[i].Task+"</li>");
    }
    
    //refresh the listview
    $('#taskList').listview('refresh');
  
    //alert("UPDATE");
}




// Jquery mobile onpageshow example
//$(document).on("pageshow","#todoPage", onPageShow);
//
//function onPageShow() {
//    alert("pageshow");
//}

