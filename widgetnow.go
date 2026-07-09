// Package widgetnow is the "Now" DRIVER — Current job + currently-playing game.
//
// It self-registers into the widget base plugin on import. Install by blank-import:
//
//	import _ "github.com/togo-framework/widget-now"
package widgetnow

import "github.com/togo-framework/widget"

func init() {
	widget.Register(widget.Descriptor{
		Key:         "now",
		Title:       "Now",
		DefaultZone: "sidebar",
		Asset:       "/widgets/now.js",
	})
}
