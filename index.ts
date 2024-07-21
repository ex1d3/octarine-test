import { Ability, EventsSDK, LocalPlayer, Hero } from "github.com/octarine-public/wrapper/index"
import { MenuManager } from "./menu"

const bootstarp = new (class COctarineTest {
	private readonly menu = new MenuManager()

	constructor() {
		this.menu.RushKey.OnPressed(() => this.pressedRush())
	}

	private pressedRush(): void {
		const hero = this.getLocalHero()
		if (hero === undefined) {
			return
		}
		
		hero.Spells.forEach((spell: Nullable<Ability>) => {
			console.log(spell)
		})
	}

	private getLocalHero(): Nullable<Hero> {
		console.log("trying to get a hero")

		const hero = LocalPlayer?.Hero
		if (hero === undefined || !hero.IsAlive) {
			return
		}
		if (hero.IsInvulnerable || hero.IsCharge) {
			return
		}
		return hero
	}

})
