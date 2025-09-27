var hasCycle = function(head) {
  let seenNodes = new Set();
  let curr = head;
  while(curr){
    if(seenNodes.has(curr)){
      return true;
    }
    seenNodes.add(curr);
    curr = curr.next;
  }
  return false;
}

// Time Complexity: O(n) (each node visited once).
// Space Complexity: O(n) (extra set to store nodes).