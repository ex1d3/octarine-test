import { ImageData, Menu } from "github.com/octarine-public/wrapper"

export class MenuManager {
	public readonly RushKey: Menu.KeyBind

	private readonly utility = Menu.AddEntry("Utility")
	private readonly baseNode = this.utility.AddNode("OctarineTest", ImageData.Paths.Icons.arrow_gold_dif)

	constructor() {
		this.RushKey = this.baseNode.AddKeybind("Rush")
	}
}