// priority: 0

console.info('Hello, World! (You will see this line every time server resources reload)')

ServerEvents.recipes(event => {
	// Change recipes here
})

ServerEvents.tags('item', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})

ItemEvents.rightClicked(event => {
	let hand = event.item
	let inventory = event.player.inventory
	if(hand.id == 'kubejs:dirt_ball') {
		hand.count--
		inventory.allItems.set(inventory.getStackInSlot(hand), hand)
	}
})

BlockEvents.rightClicked(event => {
	
})