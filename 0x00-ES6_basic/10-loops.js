export default function appendToEachArrayValue(array, appendString) {
    const arrays = []
    for (let element of array) {
      arrays.push(appendString + element);
    }
  
    return arrays;
  }