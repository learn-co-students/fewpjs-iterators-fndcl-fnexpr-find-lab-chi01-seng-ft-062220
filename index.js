const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){ 
  let win = record.find(function(record) {return record.result === "W"})
    if (win){
    return win.year
    }
  }