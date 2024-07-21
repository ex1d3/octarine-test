// import { ImageData, Menu } from "github.com/octarine-public/wrapper"

// export class MenuManager {
// 	public readonly RushKey: Menu.KeyBind

// 	private readonly utility = Menu.AddEntry("Utility")
// 	private readonly baseNode = this.utility.AddNode("OctarineTest", ImageData.Paths.Icons.arrow_gold_dif)

// 	constructor() {
// 		this.RushKey = this.baseNode.AddKeybind("Rush")
// 	}
// }

import {
	ImageData,
	Menu,
} from "github.com/octarine-public/wrapper/index"

export class MenuManager {
	public readonly AggroKey: Menu.KeyBind

	private readonly iconNode = ImageData.Paths.Icons.magic_resist

	private readonly utility = Menu.AddEntry("Utility")
	private readonly baseNode = this.utility.AddNode("AD", this.iconNode)

	constructor() {
		this.AggroKey = this.baseNode.AddKeybind("Aggro Key")
	}
}