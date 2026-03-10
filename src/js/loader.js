;(async () => {
    window.unsafeWindow = {
        global: window,
        config: {},
        info: {}
    }

	try {
		const response = await fetch("config.json")
		window.unsafeWindow.config = await response.json()
	} catch (error) {
		console.error(error)
		return
	}

	try {
		const response = await fetch("info.json")
		window.unsafeWindow.info = await response.json()
	} catch (error) {
		console.error(error)
		return
	}

	const script = document.createElement("script")
	script.src = `src/js/build.js`
	script.type = "module"
	document.body.appendChild(script)
})()
