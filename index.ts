import { Ability, Hero, ImageData, LocalPlayer, Menu } from "github.com/octarine-public/wrapper"

const Entry: Menu.Node = Menu.AddEntry("Utility")
const OctarineTest: Menu.Node = Entry.AddNode("Octarine Test", ImageData.Paths.Icons.arrow_gold_dif)
const TestKey: Menu.KeyBind = OctarineTest.AddKeybind("Test key")

const GetLocalHero = (): Nullable<Hero> => {
	const hero = LocalPlayer?.Hero
	if (hero === undefined || !hero.IsAlive) {
		return
	}
	if (hero.IsInvulnerable || hero.IsCharge) {
		return
	}
	return hero
}

TestKey.OnPressed(() => {
	const hero: Nullable<Hero> = GetLocalHero()
	if (hero === undefined) {
		return
	}

	const spells: Nullable<Ability>[] = hero.Spells;

	for (const spell of spells) {
		if (spell) {
			spell.UseAbility()
		}
	}
})
