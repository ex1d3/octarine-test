import {
	EventsSDK,
	Menu,
	ParticlesSDK,
	TickSleeper,
} from "github.com/octarine-public/wrapper/index"

const particles = new ParticlesSDK(),
	Sleeper = new TickSleeper()

const Entry = Menu.AddEntry("Utility")
const OctarineTest = Entry.AddNode(
	"OctarineTest",
	"panorama/images/spellicons/monkey_king_tree_dance_png.vtex_c",
	undefined,
	0
)
const RushKey = OctarineTest.AddKeybind("Rush key")

EventsSDK.on("GameEnded", () => {
	particles.DestroyAll()
	Sleeper.ResetTimer()
})