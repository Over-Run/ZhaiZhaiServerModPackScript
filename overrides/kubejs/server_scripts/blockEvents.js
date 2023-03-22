BlockEvents.rightClicked(event => {
	if(event.block.id == 'minecraft:grass_block' || event.block.id == 'minecraft:dirt') {
		let r = event.player.random.nextDouble()
		if(r >= 0.4) {
			event.server.runCommandSilent(`summon minecraft:item ${event.player.x} ${event.player.y} ${event.player.z} {Item:{id:"kubejs:dirt_ball",Count:1}}`)
		}
		// event.server.runCommandSilent(`give ${event.player.name} kubejs:dirt_ball`)
		if(r >= 0.9) {
			event.server.runCommandSilent(`setblock ${event.block.x} ${event.block.y} ${event.block.z} minecraft:air`)
		}
		
	}
})