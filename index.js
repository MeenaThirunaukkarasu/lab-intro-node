class SortedList {
  constructor() {
    this.items = []
    this.length = this.items.length
  }

  add(item) {
    this.items.push(item)
    this.items.sort(function(a, b){return a - b})
    this.length = this.items.length

  }
  // this.items.sort((a,b)=>{return a - b})

  get(pos) {
    if(pos>this.length-1){
      throw new Error("OutOfBounds")
    }
    else{
  return this.items[pos]
}
  }

  max() {
    if(this.items.length===0){
      throw new Error("EmptySortedList")
    }
    
    else{
      return Math.max(...this.items)
    }
  }

  min() {
    if(this.items.length===0){
      throw new Error("EmptySortedList")
    }
    
    else{
      return Math.min(...this.items)
    }
  }

  sum() {
    let sum = 0
    this.items.forEach(item => {
      sum += item
    })
    
    return sum
    
  }

  avg() {
    let avg
    if(this.items.length===0){
    throw new Error("EmptySortedList")
  }
    else{let ans = this.sum()
   avg = ans/this.length
  }
  return avg
  
}
}

module.exports = SortedList;




