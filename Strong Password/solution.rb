#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'minimumNumber' function below.
#
# The function is expected to return an INTEGER.
# The function accepts following parameters:
#  1. INTEGER n
#  2. STRING password
#

def minimumNumber(n, password)
    # Return the minimum number of characters to make the password strong
    count = 0
    pass_array = password.split('')
    count += 1 if (pass_array & "0123456789".split('')).empty?
    count += 1 if (pass_array & "abcdefghijklmnopqrstuvwxyz".split('')).empty?
    count += 1 if (pass_array & "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')).empty?
    count += 1 if (pass_array & "!@#\$%^&*()-+".split('')).empty?
    return count if n + count >= 6
    return 6 -n if n + count < 6
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

password = gets.chomp

answer = minimumNumber n, password

fptr.write answer
fptr.write "\n"

fptr.close()
