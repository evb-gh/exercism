export function gigasecond(x) {
	return (new Date(x.setSeconds(x.getSeconds() + 1e9)));
}
