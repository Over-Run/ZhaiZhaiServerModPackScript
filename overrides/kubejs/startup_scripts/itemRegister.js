StartupEvents.registry('item', event => {
	// Register new items here
	// event.create('example_item').displayName('Example Item')
    event.create('dirt_ball').displayName('土球').maxStackSize(8)
})