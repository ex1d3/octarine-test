import { EventsSDK } from "github.com/octarine-public/wrapper/index"
import { AddEntry } from "github.com/octarine-public/wrapper/wrapper/Menu"

EventsSDK.on("GameStarted", () => {
	console.log("Hello world!")
	AddEntry("12")
})
