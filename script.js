function isPalindroma(str) {

  let pulita = str.replace(/\W/g, "").toLowerCase();

  let invertita = pulita.split("").reverse().join("");

    if (pulita === invertita) {

    return true;

  } 
  
    else {

    return false;
  }
  
}

console.log(isPalindroma("i topi non avevano nipoti"));

console.log(isPalindroma("true"));
