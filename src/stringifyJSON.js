var stringifyJSON = function(obj) {
  // Every value have to be within quotes.
  //Even the string. number can be contained inside
  //a quote by String(number) but string cannot be contained
  //within quotes by String(string) must use below `stringer`
  //function.
  // This is necessary as JSON.stringify makes everything
  //contained inside quotes even string values.
  function stringer(val){
      return '"' + val + '"';
  }
  
  function str(value) {
    if(typeof value === "number"){
      return String(value);
    } else if (typeof value === "string"){
      // we want to return "'apple'" rather than
      //"apple" hence quotes around strings which already
      //have quotes.
      return stringer(value);
    } else if (typeof value === "boolean"){
      return String(value);
    } else if (Array.isArray(value)){
      var arrayResults = [];
      for (var i = 0, length = value.length; i < length; i++){
        arrayResults.push(str(value[i]));
      }
      var joinedResult = "[" + arrayResults.join(",") + "]";
      return joinedResult;
    } else if (typeof value === "object"){
      // Would have put value != null but that would also
      //catch undefined. so !value or value !== null is used
      //Note that `undefined` should be ignored. i.e. returns
      //nothing when undefined => returns undefined.
      if(!value){
        return "null";
      }
      var objectResults = [];
      for(var key in value){
        if(value.hasOwnProperty(key)){
          var v = str(value[key])
          // if checks for `undefined` case in which it will
          //simply skip values that has undefined value.
          if(v){
            objectResults.push(stringer(key) + ":" + v)
          }
        }
      }
      var joinedObjResult = "{" + objectResults.join(",") + "}";
      return joinedObjResult;
    }
  }
  return str(obj);
};
