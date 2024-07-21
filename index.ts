import { EventsSDK, LocalPlayer } from "github.com/octarine-public/wrapper/index"

EventsSDK.on("GameStarted", () => {
	console.log(LocalPlayer)
})
