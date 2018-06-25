let dishes = ['fork', 'spoon', 'knife', 'plate']

function washDish(dish)
{
  console.log(`I am currently washing ${dish}`)
}

dishes.map(washDish)
console.log()
dishes.forEach(washDish)

dishes.map(function washDish(dish){
  console.log(`${dish}`)
})