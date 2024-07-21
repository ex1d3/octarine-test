// import { Ability, EventsSDK, LocalPlayer, Hero, Entity } from "github.com/octarine-public/wrapper/index"
// import { MenuManager } from "./menu"

// const bootstarp = new (class COctarineTest {
// 	private readonly menu = new MenuManager()

// 	constructor() {
// 		this.menu.RushKey.OnPressed(() => this.pressedRush())
// 	}

// 	public EntityDestroyed(_: Entity) {
// 		console.log("Entity destroyed!")
// 	}

// 	private pressedRush(): void {
// 		const hero = this.getLocalHero()
// 		if (hero === undefined) {
// 			return
// 		}
		
// 		hero.Spells.forEach((spell: Nullable<Ability>) => {
// 			console.log(spell)
// 		})
// 	}

// 	private getLocalHero(): Nullable<Hero> {
// 		console.log("trying to get a hero")

// 		const hero = LocalPlayer?.Hero
// 		if (hero === undefined || !hero.IsAlive) {
// 			return
// 		}
// 		if (hero.IsInvulnerable || hero.IsCharge) {
// 			return
// 		}
// 		return hero
// 	}

// })

// EventsSDK.on("EntityDestroyed", entity => bootstarp.EntityDestroyed(entity))


import {
	Entity,
	EventsSDK,
	Hero,
	Input,
	LocalPlayer,
	Sleeper,
	Unit
} from "github.com/octarine-public/wrapper/index"

import { MenuManager } from "./menu"

const bootstrap = new (class CAggroDeaggro {
	private readonly units: Unit[] = []
	private readonly menu = new MenuManager()

	constructor() {
		this.menu.AggroKey.OnPressed(() => this.pressedAggro())
	}

	private pressedAggro() {
		return
	}
})()