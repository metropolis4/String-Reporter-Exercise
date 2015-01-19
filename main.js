var word = prompt("Please Enter a Word");
word.length === 0 ? prompt("Please Enter a Word!"): word = word;

// Capitalization function

function capitalize(name) {
	var first = name[0].toUpperCase();
	var rest = name.substr(1, name.length -1);
	return first + rest;
}

word = capitalize(word);

// new variables for the string functions required in the exercise

var length = word.length;
var third = word.charAt(2);
var lower = word.toLowerCase();
var upper = word.toUpperCase();
var sub = word.substring(1, 4);


// Final alert message

alert("You have entered the word " + word + ". " + "\n" +
		"The word " + word + " contains " + length + " letters." + "\n" +
		"The third character in " + word + " is " + third + ". " + "\n" +
		"In lowercase letters, it looks like this: " + lower + ". " + "\n" +
		"In uppercase letters, it looks like this: " + upper + ". " + "\n" +
		"Example of " + word + " in a sentence: I have always wanted a " + word + " of my very own! " + "\n" +
		"The subword from the second to the fourth letter is: " + sub);
