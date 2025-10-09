(function() {
  var names = ["Bill", "John", "Jen", "Jason", "Paul", "Frank", "Steven", "Larry", "Paula", "Laura", "Jim"];

  console.log("=== Основний функціонал: Hello / Goodbye ===");
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();

    if (firstLetter === "j") {
      byeSpeaker.speak(names[i]);
    } else {
      helloSpeaker.speak(names[i]);
    }
  }

  // === Додатковий функціонал: фільтрація за сумою ASCII-кодів ===
  console.log("\n=== Додатковий функціонал: імена, де сума ASCII-значень > 500 ===");

  function asciiSum(str) {
    var sum = 0;
    for (var j = 0; j < str.length; j++) {
      sum += str.charCodeAt(j);
    }
    return sum;
  }

  var threshold = 500;
  for (var i = 0; i < names.length; i++) {
    var sum = asciiSum(names[i]);
    if (sum > threshold) {
      console.log(names[i] + " -> сума ASCII = " + sum);
    }
  }
})();
