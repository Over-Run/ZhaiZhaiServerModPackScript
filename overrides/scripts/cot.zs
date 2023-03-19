#loader contenttweaker

import mods.contenttweaker.VanillaFactory;
import mods.contenttweaker.Item;
import mods.contenttweaker.Block;
import mods.contenttweaker.IItemRightClick;
import mods.contenttweaker.Commands;

var dirt_ball as Item = VanillaFactory.createItem("dirt_ball");//土球
dirt_ball.maxStackSize = 8;//最大可堆叠8
dirt_ball.beaconPayment = false;
dirt_ball.creativeTab = <creativetab:misc>;//创造式物品栏
dirt_ball.register();