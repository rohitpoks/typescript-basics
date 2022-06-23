// expand around center
var longestPalindromicSubstring = function (input) {
    if (input.length === 0)
        return 0;
    var longest = 1;
    // check odd-length palindromes
    for (var i = 0; i < input.length; i++) {
        var left = i - 1;
        var right = i + 1;
        while (left > -1 &&
            right < input.length &&
            input.charAt(left) === input.charAt(right)) {
            longest = Math.max(longest, right - left + 1);
            left--;
            right++;
        }
        // check even-length palindromes
        left = i;
        right = i + 1;
        while (left > -1 &&
            right < input.length &&
            input.charAt(left) === input.charAt(right)) {
            longest = Math.max(longest, right - left + 1);
            left--;
            right++;
        }
    }
    return longest;
};
console.log(longestPalindromicSubstring("ra"));
