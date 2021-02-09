import { auth, provider } from '../firebase'

export const signInWithGoogle = async () => {
	let user
	try {
		const res = await auth.signInWithPopup(provider)
		user = res.user
	} catch (error) {
		console.log(error.message)
	}
	return user
}

export const logout = async () => {
	try {
		await auth.signOut()
	} catch (error) {
		console.log(error.message)
	}
}
