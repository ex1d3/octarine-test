import {
	Ability,
	Hero,
	LocalPlayer,
	Menu,
} from "github.com/octarine-public/wrapper/index"

const Entry = Menu.AddEntry("Utility")
const OctarineTest = Entry.AddNode(
	"Rush",
	"panorama/images/spellicons/monkey_king_tree_dance_png.vtex_c",
	undefined,
	0
)

const RushState = OctarineTest.AddToggle("State")
const RushKey = OctarineTest.AddKeybind("Rush key")

const getLocalHero = (): Nullable<Hero> => {
	const hero: Nullable<Hero> = LocalPlayer?.Hero
	if (hero === undefined || !hero.IsAlive) {
		return
	}
	return hero
}

RushKey.OnPressed(() => {
	if (!RushState.value) {
		console.log("Rush key pressed, but its offed!")
		return
	}

	const hero: Nullable<Hero> = getLocalHero()
	if (hero === undefined) {
		return
	}

	hero.Spells.forEach((spell: Nullable<Ability>): void => {
		spell?.UseAbility()
	})
})
