var addTwoNumbers = function(l1, l2) {
    let num1 = 0, num2 = 0;
    let multiplier = 1;

    while (l1 !== null) {
        num1 += l1.val * multiplier;
        l1 = l1.next;
        multiplier *= 10;
    }

    multiplier = 1;

    while (l2 !== null) {
        num2 += l2.val * multiplier;
        l2 = l2.next;
        multiplier *= 10;
    }

    let sum = num1 + num2;
    let dummyHead = new ListNode(0);
    let current = dummyHead;

    if (sum === 0) {
        return dummyHead;
    }

    while (sum > 0) {
        current.next = new ListNode(sum % 10);
        sum = Math.floor(sum / 10);
        current = current.next;
    }

    return dummyHead.next;
}