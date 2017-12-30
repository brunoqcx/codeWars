# Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

# Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.

# Example:

# solution(1000) # should return 'M'
# Help:

# Symbol    Value
# I          1
# V          5
# X          10
# L          50
# C          100
# D          500
# M          1,000
# Remember that there can't be more than 3 identical symbols in a row.

def solution(number)
  str = ''  

  ROMAN_DIC.each_with_index do |dic, index|
    if number > 5
        if index > 0 && index < ROMAN_DIC.size - 1 && (number > (dic[0] + (ROMAN_DIC[index + 1][0] * 3)))
            str =  str + ROMAN_DIC[index + 1][1] + ROMAN_DIC[index - 1][1]
            number = number - (ROMAN_DIC[index - 1][0] - ROMAN_DIC[index + 1][0])
        end       
    else
        if index > 0 && index < ROMAN_DIC.size - 1 && (number > (ROMAN_DIC[index + 1][0] * 3))
            str =  str + ROMAN_DIC[index + 1][1] + dic[1]
            number = number - (ROMAN_DIC[index + 1][0] + dic[0])
        end
    end  

    while number >= dic[0]
      str = str + dic[1]
      number = number - dic[0]
    end    
  end     

  str
end

ROMAN_DIC = [
  [1000, "M"],
  [500, "D"],
  [100, "C"],
  [50, "L"],
  [10, "X"],
  [5,"V"],
  [1,"I"]
].freeze  
