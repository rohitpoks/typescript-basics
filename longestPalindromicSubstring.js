// expand around center
function longestPalindromicSubstring(input) {
    if (input.length === 0)
        return "";
    var longest = 1;
    var left_index = 0;
    var right_index = 0;
    // check odd-length palindromes
    for (var i = 0; i < input.length; i++) {
        var left = i - 1;
        var right = i + 1;
        while (left > -1 &&
            right < input.length &&
            input.charAt(left) === input.charAt(right)) {
            if (longest < right - left + 1) {
                longest = Math.max(longest, right - left + 1);
                left_index = left;
                right_index = right;
            }
            left--;
            right++;
        }
        // check even-length palindromes
        left = i;
        right = i + 1;
        while (left > -1 &&
            right < input.length &&
            input.charAt(left) === input.charAt(right)) {
            if (longest < right - left + 1) {
                longest = Math.max(longest, right - left + 1);
                left_index = left;
                right_index = right;
            }
            left--;
            right++;
        }
    }
    return input.substring(left_index, right_index + 1);
}
;
console.log(longestPalindromicSubstring("ra"));
