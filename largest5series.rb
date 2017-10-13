# In the following 6 digit number:

# 283910
# 91 is the greatest sequence of 2 digits.

# In the following 10 digit number:

# 1234567890
# 67890 is the greatest sequence of 5 digits.

# Complete the solution so that it returns the largest five digit number found within the number given. The number will be passed in as a string of only digits. It should return a five digit integer. The number passed may be as large as 1000 digits.

# https://www.codewars.com/kata/51675d17e0c1bed195000001/train/ruby

def solution(digits)
  greatest = 0
  (0..(digits.size - 1)).each do |pos|
    num = digits[pos..pos+5].to_i
    greatest = num if num > greatest
  end
  greatest  
end