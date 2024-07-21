import { EventsSDK, LocalPlayer } from "github.com/octarine-public/wrapper/index"

EventsSDK.on("AbilityLevelChanged", () => {
	console.log(LocalPlayer)
})
