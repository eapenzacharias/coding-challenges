#!/bin/ruby

require 'json'
require 'stringio'

#
# Complete the 'jumpingOnClouds' function below.
#
# The function is expected to return an INTEGER.
# The function accepts INTEGER_ARRAY c as parameter.
#

def jumpingOnClouds(c)
    # Write your code here
    count = 0
    i = 0
    while i < c.length()-1 do
        if c[i+2] == 0
            count += 1
            i += 2
            puts '+2 = 0'
        elsif c[i+1] == 0
            count +=1
            i += 1
            puts '+1 = 0'
        end
    end
    count
end

fptr = File.open(ENV['OUTPUT_PATH'], 'w')

n = gets.strip.to_i

c = gets.rstrip.split.map(&:to_i)

result = jumpingOnClouds c

fptr.write result
fptr.write "\n"

fptr.close()
