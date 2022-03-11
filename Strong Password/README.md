# Subarray Division - HackerRank

### [Challenge Link](https://www.hackerrank.com/challenges/the-birthday-bar/problem)


Louise joined a social networking site to stay in touch with her friends. The signup page required her to input a name and a password. However, the password must be strong. The website considers a password to be strong if it satisfies the following criteria:

- Its length is at least `6`.
- It contains at least one digit.
- It contains at least one lowercase English character.
- It contains at least one uppercase English character.
- It contains at least one special character. The special characters are: !@#$%^&*()-+
She typed a random string of length `n` in the password field but wasn't sure if it was strong. Given the string she typed, can you find the minimum number of characters she must add to make her password strong?

Note: Here's the set of types of characters in a form you can paste in your solution:
```
numbers = "0123456789"
lower_case = "abcdefghijklmnopqrstuvwxyz"
upper_case = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
special_characters = "!@#$%^&*()-+"
```

### Example
`password = '2bbbb'`
This password is 5 characters long and is missing an uppercase and a special character. The minimum number of characters to add is `2`.

`password = '2bb#A'`
This password is 5 characters long and has at least one of each character type. The minimum number of characters to add is `1`.

## Function Description

Complete the minimumNumber function in the editor below.

minimumNumber has the following parameters:

- int n: the length of the password
- string password: the password to test

### Returns
- int: the minimum number of characters to add

### Input Format
The first line contains an integer `n`, the length of the password.

The second line contains the password string. Each character is either a lowercase/uppercase English alphabet, a digit, or a special character.

### Constraints
- `1 <= n <= 100`
- All characters in password are in [a-z], [A-Z], [0-9], or [!@#$%^&*()-+ ].


## Sample Input

### Sample Input 0
```
3
Ab1
```

### Sample Output 0
```
3
```

### Sample Input 1
```
11
#HackerRank
```

### Sample Output 1
```
1
```
