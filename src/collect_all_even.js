function findSameElement(a, object_b){
  for(var i = 0; i <= object_b.value.length; i++){
    if(a === object_b.value[i]){
        return true;
    }
  }
}

function collect_same_elements(collection_a, object_b) {
  var sameElements = [];
  collection_a.forEach(function(a){
     if(findSameElement(a.key, object_b)){
       sameElements.push(a.key);
     }
  });

  return sameElements;
}

module.exports = collect_same_elements;
