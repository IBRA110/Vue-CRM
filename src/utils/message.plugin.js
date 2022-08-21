import M from 'materialize-css'

export default function sendMessage (mess, text) {
	if (mess === 'mess') {
		M.toast({ html: text })
		return
	}
	M.toast({ html: `[error] ${text}` })
}
