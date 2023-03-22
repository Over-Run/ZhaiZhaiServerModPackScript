ItemEvents.rightClicked(event => {
	let hand = event.item
	let inventory = event.player.inventory
	if(hand.id == 'kubejs:dirt_ball') {
		hand.count--
		inventory.allItems.set(inventory.getStackInSlot(hand), hand)
	}
})