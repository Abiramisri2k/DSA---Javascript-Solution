var removeNthFromEnd = function(head, n) {
    let sentinel = new ListNode();
    sentinel.next = head;
    let length = 0;
    while(head){
        length++;
        head = head.next;
    }
    let prev = sentinel;
    for(let i=0; i<length-n; i++){
        prev = prev.next;
    }
    prev.next = prev.next.next;
    return sentinel.next;
};

//Time Complexity: O(n)
//Space Complexity: O(1)