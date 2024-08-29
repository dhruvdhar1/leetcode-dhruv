class RandomizedSet:

    def __init__(self):
        self.map = {}
        self.arr = []

    def insert(self, val: int) -> bool:
        if val in self.map:
            return False
        self.arr.append(val)
        idx = len(self.arr) - 1
        self.map[val] = idx
        return True

    def remove(self, val: int) -> bool:
        if val not in self.map:
            return False
        idx = self.map[val]
        last = self.arr[-1]
        self.arr[idx] = last
        self.arr.pop()
        self.map[last] = idx
        self.map.pop(val)
        return True

    def getRandom(self) -> int:
        rand = math.floor(random.random() * len(self.arr))
        return self.arr[rand]


# Your RandomizedSet object will be instantiated and called as such:
# obj = RandomizedSet()
# param_1 = obj.insert(val)
# param_2 = obj.remove(val)
# param_3 = obj.getRandom()