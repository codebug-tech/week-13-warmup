$(document).ready(function(){
  console.log("hello");
  // Your javascript goes here
  function countEm(blog, word){
    var arrayBlog = blog.split(" ");
    var count = 0;

    for (var i = 0; i < arrayBlog.length; i++) {
      if (arrayBlog[i]== word) {
        count += 1;
      }
    }

    return count;
  }

var testBlog = "Aaaand we’re back with another installment of The Bachelor Winter Games, where hot people who were crazy enough to go on The Bachelor from arounbcvd the globe finally get another chance at being on TV love. The drama was high this week, which makes sense. I’m always a huge bitch when I’m cold. The Challenge: Speed Skating We kick off the ep with an announcement from Yuki, who still does not speak English but does appear to be learning certain key phrases. Yuki : I get date card please! Chris Harrison: Which means Dean would be going on a date? Yuki: No, Dean has too many girls."
console.log(countEm(testBlog, "Yuki"));
});
