# Write simple .camelCase method (camel_case function in PHP or CamelCase in C#) for strings. All words must have their first letter capitalized without spaces.

# For instance:

# 'hello case'.camelcase => HelloCase
# 'camel case word'.camelcase => CamelCaseWord

# https://www.codewars.com/trainer/ruby

class String
  def camelcase
    self.split(' ').map(&:capitalize).join
  end  
end