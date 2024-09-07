class DoublyLinkedList {
    val = null
    key = null
    next = null
    prev = null
    constructor(key, val, next=null, prev=null) {
        this.val = val
        this.key = key
        this.next = next
        this.prev = prev
    }
}
class LRUCache {
    map = null
    capacity = 0
    head = null
    tail = null
    constructor(capacity: number) {
        this.map = new Map()
        this.capacity = capacity
        this.head = new DoublyLinkedList(-1, -1)
        this.tail = new DoublyLinkedList(-1, -1)
        this.head.next = this.tail
        this.tail.prev = this.head
    }

    get(key: number): number {
        if(!this.map.has(key)) return -1
        const node = this.map.get(key)

        if(node != this.head.next) {
            node.prev.next = node.next
            node.next.prev = node.prev

            node.next = null
            node.prev = null
            const start = this.head.next
            node.next = start
            start.prev = node
            this.head.next = node
            node.prev = this.head
        }

        return node.val
    }

    put(key: number, value: number): void {
        if(this.map.has(key)) {
            const node = this.map.get(key)
            node.val = value
            this.get(key)
        } else {
            const newNode = new DoublyLinkedList(key, value)
            if(this.map.size === this.capacity) {
                this.removeNode()
            }
            const firstNode = this.head.next
            firstNode.prev = newNode
            newNode.next = firstNode
            this.head.next = newNode
            newNode.prev = this.head
            this.map.set(key, newNode)
        }
    }

    removeNode() {
        const last = this.tail.prev
        last.prev.next = this.tail
        this.tail.prev = last.prev
        last.next = null
        last.prev = null
        this.map.delete(last.key)
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */