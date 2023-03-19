#priority 1000;

import crafttweaker.events.IEventManager;
import crafttweaker.event.BlockHarvestDropsEvent;
import crafttweaker.block.IBlock;
import crafttweaker.event.BlockBreakEvent;
import crafttweaker.data.IData;
import crafttweaker.event.IEventCancelable;
import crafttweaker.player.IPlayer;
import crafttweaker.item.IItemStack;
import crafttweaker.item.IItemDefinition;

events.onBlockBreak(function(event as BlockBreakEvent) {
    if(event.isPlayer) {
        val player = event.player as IPlayer;
        val itemStack = player.currentItem;
        if(!isNull(itemStack) && itemStack.hasTag && !isNull(itemStack.tag.canBreak) && itemStack.tag.canBreak == true) {
            return;
        } else {
            event.cancel();
        }
    }
    // if(item.hasTag) {//只有带指定nbt的物品才可挖掘物品
    //     var data = item.tag as IData;
    //     if(data.canBreak == null) {
    //         event.cancel();
    //     }
    // } else {
    //     event.cancel();
    // }
});