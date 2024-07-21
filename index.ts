import { Ability, EventsSDK, LocalPlayer } from "github.com/octarine-public/wrapper/index"

EventsSDK.on("AttackStarted", () => {
	
	LocalPlayer?.Hero?.Spells.forEach((spell: Nullable<Ability>) => {
		spell?.UseAbility()
	})
})
