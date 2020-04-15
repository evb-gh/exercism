export const isPangram = text => {
	const str = text.toUpperCase();	

	const alphabet = new Set();

	for (let i = 0; i < str.length; i++) {

		let letter = str.charCodeAt(i);

		if (letter >= 65 && letter <= 90) // man ascii
			alphabet.add(letter);
	}

	return (alphabet.size === 26);
}
