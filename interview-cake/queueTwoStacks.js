const QueueTwoStacks = function() {
  this.inStack = [];
  this.outStack = [];
}

QueueTwoStacks.prototype.enque = function(item) {
  this.inStack.push(item);
}

QueueTwoStacks.prototype.deque = function() {
  if (this.inStack.length ===  0) {
    return undefined;
  }
  this.outStack.push(this.inStack[0]);
  this.inStack = this.inStack.slice(1);
}

let que = new QueueTwoStacks;
que.enque(1)
que.enque(2)
que.enque(3)
que.deque()
que.deque()
console.log("Instack is %d", que.inStack);
console.log("Outstack is %d", que.outStack);