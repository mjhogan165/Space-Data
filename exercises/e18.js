import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const years = data.asteroids.map(x => x.discoveryYear)


  years.sort(function compareFn(a, b) { 
  if(a < b){return -1}
    if(a>b){return 1}
    if(a === b){
      return 0
    }
  })
  
  let duplicates = []
  years.sort(function compareFn(a, b) { 
  if(a < b){return -1}
    if(a>b){return 1}
    if(a === b){
      duplicates.push(a)
      return 0
    }
  
  })
  
  function maxBy(array, cb) {
      array.sort((a, b) => cb(b) < cb(a) ? -1 : 1 )
      return array[0]
  }
  
  function count(arr, value){
    let counted = arr.filter(x => x === value)
    return counted.length
  }
  
  const countedArr = []
  for(let elm of duplicates){
    // let num = count(test, elm )
    // console.log(count(duplicates, elm ))
    countedArr.push({year: elm, count: count(duplicates, elm)})
  }
  
  const ans = maxBy(countedArr, x => x.count)
  return ans.year
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
