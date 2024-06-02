function highlight() {
    //Write your code here
  for (let i = 0; i < boldItems.length; i++) {
        boldItems[i].classList.add('highlighted');
    }

}


function return_normal() {
    //Write your code here
for (let i = 0; i < boldItems.length; i++) {
        boldItems[i].classList.remove('highlighted');
    }
    
}
