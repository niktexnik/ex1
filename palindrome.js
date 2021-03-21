
window.onload = function() {
  function isPalindrome(str) {
    const length = str.length;
    if (length < 2) return true;

    if (str[0] === str[length - 1]) {
      return isPalindrome(str.slice(1, length - 1));
    }

    return false;
  }

  let form = document.forms.my;
  let input = form.elements.palindrome;
  let span = document.getElementById("resultSpan");
  console.log(span);

  form.addEventListener("submit", (event) => { 
    event.preventDefault();
    console.log("Form was submitted!");
    let palindrome = input.value;
    console.log(palindrome);
    let result = isPalindrome(palindrome);
    console.log('result :', result);
    document.querySelector('#resultSpan').innerHTML = result;
  });

  // form.submit();
};
//console.log(isPalindrome('radar'));
//console.log(isPalindrome('a'));
//console.log(isPalindrome('abs'));
