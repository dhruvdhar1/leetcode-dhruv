class Solution:
    def calculate(self, s: str) -> int:
        number = 0
        operator = "+"
        i=0
        stack = []
        while i<len(s):
            if(s[i].isdigit()):
                number = number * 10 + int(s[i])

            if (s[i] == "+" or s[i] == "-" or s[i] == "*" or s[i] == "/") or i == len(s)-1:
                #operator
                if operator == "+":
                    stack.append(number)
                elif operator == "-":
                    stack.append(-number)
                elif operator == "*":
                    stack.append(stack.pop() * number)
                elif operator == "/":
                    stack.append(int(stack.pop() / number))

                number = 0
                operator = s[i]
            i += 1
        
        res = 0
        while len(stack) > 0:
            res += stack.pop()
        
        return res