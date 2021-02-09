export default function makeid(length) {
	let result = ''
	const characters = 'ABCDEFGHIHKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

	const charLength = characters.length
	for (let i = 0; i < length; i++) {
		result += characters.charAt(Math.floor(Math.random() * charLength))
	}

	return result
}
