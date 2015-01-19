// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
){
  var body = document.body;
  var result = [];
  function getClass(array){
    //Higher Level
    for(var i = 0, length = array.length; i < length; i +=1){
      if(array[i].classList && array[i].classList.contains(className)){
        result.push(array[i]);
      }
      if(array[i].childNodes.length){
        getClass(array[i].childNodes);
      }
    }
  }
  if(body.classList.contains(className)){
    result.push(body);
  }
  
  getClass(body.childNodes);
  
  return result;
};


