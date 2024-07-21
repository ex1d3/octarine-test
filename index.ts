import {
	Ability,
	Creep,
	Entity,
	EventsSDK,
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

const getLocalHero = (): Nullable<Hero> => {
	const hero: Nullable<Hero> = LocalPlayer?.Hero
	if (hero === undefined || !hero.IsAlive) {
		return
	}
	return hero
}

EventsSDK.on('EntityDestroyed', (ent: Entity): void => {
	if (ent instanceof Creep) {
		const creep: Creep = ent as Creep;
		console.log(creep.XPBounty, creep.XPBountyExtra, creep.Name)
	}
})