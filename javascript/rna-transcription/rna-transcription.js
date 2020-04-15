export function toRna (x) {

	const blueprint = {
		A : "U",
		T : "A",
		G : "C",
		C : "G",
	}

	const res = [...x];

	return (res.map(i => blueprint[i]).join(''));

}
