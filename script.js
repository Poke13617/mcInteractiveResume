
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const seconds = now.getSeconds();

console.log(`Current time: ${hours}:${minutes}:${seconds}`);
if(hours > 16) {
    alert("Good Evening, welcome to my website!")
} else if(hours == 12) {
    alert("Good Afternon, welcome to my website!")
} else if(hours < 12) {
    alert("Good morning, welcome to my website")
}



$(".skillAnim").click(function(){


    //I need the .list1 to disappear by default and reappear
})