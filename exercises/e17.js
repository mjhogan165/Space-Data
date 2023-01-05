export function minBy(array, cb) {
    array.sort((a, b) => cb(b) > cb(a) ? -1 : 1 )
    return array[0]
}

export function maxBy(array, cb) {
    array.sort((a, b) => cb(b) < cb(a) ? -1 : 1 )
    return array[0]
}
