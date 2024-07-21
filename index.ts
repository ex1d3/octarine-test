import { EventsSDK, LocalPlayer } from "github.com/octarine-public/wrapper/index"

EventsSDK.on("AttackStarted", () => {
	console.log(LocalPlayer?.Hero?.Spells[0]?.UseAbility())
})
