# Complete the solution so that it reverses all of the words within the string passed in.

# Example:

# solution("The greatest victory is that which requires no battle") 
# # should return "battle no requires which that is victory greatest The"

# https://www.codewars.com/kata/51c8991dee245d7ddf00000e/train/ruby

def solution(sentence)
  sentence.split.reverse.join(' ')
end