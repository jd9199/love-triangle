/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;  
  for (let i = 0, length = preferences.length; i<length; i++) { 
      const second = preferences[i] - 1; 
      if(second === i){
       continue; 
      }       
      const third = preferences[second] - 1;   
      if(third === second){
       continue;
      }
      if(i === preferences[third] - 1){
      count++;
      }
    } 
   return count/3;
};
