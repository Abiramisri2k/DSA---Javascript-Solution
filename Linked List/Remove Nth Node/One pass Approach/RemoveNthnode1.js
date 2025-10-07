var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let first = sentinel;
    for(let i=0; i<n; i++){
        first = first.next;
    }
    let second = sentinel;
    while(first && first.next){
        second = second.next;
        first = first.next;
    }
    second.next = second.next.next;
    return sentinel.next;
};

// Time Complexity: O(n)
// Space Complexity: O(1)