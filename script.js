
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`Current time: ${hours}:${minutes}:${seconds}`);
if(hours > 16) {
    alert("Good Evening, welcome to my resume!");
} else if(hours == 12) {
    alert("Good Afternoon, welcome to my resume!");
} else if(hours < 12) {
    alert("Good morning, welcome to my resume!");
}

 var clock =document.getElementsByTagName("clock")
 clock.innerHTML = hours + ":" + minutes
$(".list1").ready(function(){
    $(".list1").hide()
})
$(".skillAnim").click(function(){
    if($(".list1").is(":hidden")){
    $(".list1").show("slow")
    } else {
    $(".list1").hide("slow")
    }
    //I need the .list1 to disappear by default and reappear
})