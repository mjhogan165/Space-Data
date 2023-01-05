// see e16.md

export function find(array, callback) {
    for (const elm of array){
        if(callback(elm)){
          return elm
        }
      }
}
