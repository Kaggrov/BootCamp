function addCourse(){
    let Courses = document.getElementById('course');
    Courses.options[Courses.options.length] = new Option(document.getElementById("coursetext").value ,document.getElementById("coursetext").value);
    
    document.getElementById("coursetext").value="";

}