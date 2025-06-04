ServerEvents.recipes((event) => {
  // Wooden tools
  event.remove({ output: "minecraft:wooden_pickaxe" });
  event.remove({ output: "minecraft:wooden_axe" });
  event.remove({ output: "minecraft:wooden_hoe" });
  event.remove({ output: "minecraft:wooden_shovel" });
  event.remove({ output: "minecraft:wooden_sword" });

  // Flint tools - replaced by mine
  event.remove({ output: "iguanatweaksexpanded:flint_pickaxe" });
  event.remove({ output: "iguanatweaksexpanded:flint_axe" });
  event.remove({ output: "iguanatweaksexpanded:flint_hoe" });
  event.remove({ output: "iguanatweaksexpanded:flint_shovel" });
  event.remove({ output: "iguanatweaksexpanded:flint_sword" });

  event.remove({ output: "ytech:flint_axe" });

  // Copper tools - replaced by mine
  event.remove({ output: "iguanatweaksexpanded:copper_pickaxe" });
  event.remove({ output: "iguanatweaksexpanded:copper_axe" });
  event.remove({ output: "iguanatweaksexpanded:copper_hoe" });
  event.remove({ output: "iguanatweaksexpanded:copper_shovel" });
  event.remove({ output: "iguanatweaksexpanded:copper_sword" });

  event.remove({
    output: "minecraft:copper_ingot",
    mod: "iguanatweaksreborn",
  });

  ///// Iguanatweaksreborn Items \\\\\
  event.remove({ id: "iguanatweaksexpanded:chained_copper_helmet" });
  event.remove({ id: "iguanatweaksexpanded:chained_copper_chestplate" });
  event.remove({ id: "iguanatweaksexpanded:chained_copper_leggings" });
  event.remove({ id: "iguanatweaksexpanded:chained_copper_boots" });

  event.remove({ output: "iguanatweaksexpanded:coated_copper_pickaxe" });
  event.remove({ output: "iguanatweaksexpanded:coated_copper_axe" });
  event.remove({ output: "iguanatweaksexpanded:coated_copper_hoe" });
  event.remove({ output: "iguanatweaksexpanded:coated_copper_shovel" });
  event.remove({ output: "iguanatweaksexpanded:coated_copper_sword" });
  event.remove({ output: "iguanatweaksexpanded:coated_copper_hoe" });
  event.remove({ output: "iguanatweaksexpanded:coated_copper_hammer" });

  ///// Ytech items \\\\\
  event.remove({ id: "ytech:copper_saw" });
  event.remove({ id: "ytech:golden_saw" });
  event.remove({ id: "ytech:iron_saw" });

  // event.remove({ type: "ytech:workspace_crafting" });

  // event.remove({ type: "ytech:hammering" });
  event.remove({ id: "ytech:copper_plate" });
  event.remove({ id: "ytech:iron_plate" });
  event.remove({ id: "ytech:golden_plate" });

  event.remove({ output: "ytech:fire_pit" });
  event.remove({ output: "ytech:unlit_torch" });

  event.remove({ id: "ytech:birch_planks" });
  event.remove({ id: "minecraft:birch_planks" });
  event.remove({
    id: "projectvibrantjourneys:birch_planks_from_birch_hollow_log",
  });
  event.remove({ id: "ytech:cherry_planks" });
  event.remove({ id: "minecraft:cherry_planks" });
  event.remove({
    id: "projectvibrantjourneys:cherry_planks_from_cherry_hollow_log",
  });
  event.remove({ id: "ytech:bamboo_planks" });
  event.remove({ id: "minecraft:bamboo_planks" });
  event.remove({ id: "ytech:warped_planks" });
  event.remove({ id: "minecraft:warped_planks" });
  event.remove({ id: "ytech:jungle_planks" });
  event.remove({ id: "minecraft:jungle_planks" });
  event.remove({
    id: "projectvibrantjourneys:jungle_planks_from_jungle_hollow_log",
  });
  event.remove({ id: "ytech:mangrove_planks" });
  event.remove({ id: "minecraft:mangrove_planks" });
  event.remove({
    id: "projectvibrantjourneys:mangrove_planks_from_mangrove_hollow_log",
  });
  event.remove({ id: "ytech:crimson_planks" });
  event.remove({ id: "minecraft:crimson_planks" });
  event.remove({ id: "ytech:spruce_planks" });
  event.remove({ id: "minecraft:spruce_planks" });
  event.remove({
    id: "projectvibrantjourneys:spruce_planks_from_spruce_hollow_log",
  });
  event.remove({ id: "ytech:acacia_planks" });
  event.remove({ id: "minecraft:acacia_planks" });
  event.remove({
    id: "projectvibrantjourneys:acacia_planks_from_acacia_hollow_log",
  });
  event.remove({ id: "ytech:dark_oak_planks" });
  event.remove({ id: "minecraft:dark_oak_planks" });
  event.remove({
    id: "projectvibrantjourneys:dark_oak_planks_from_dark_oak_hollow_log",
  });
  event.remove({ id: "ytech:oak_planks" });
  event.remove({ id: "minecraft:oak_planks" });
  event.remove({ id: "projectvibrantjourneys:oak_planks_from_oak_hollow_log" });

  event.remove({ output: "ytech:gold_knife" });
  event.remove({ output: "ytech:iron_knife" });
  event.remove({ output: "ytech:lead_knife" });
  event.remove({ output: "ytech:tin_knife" });
  event.remove({ output: "ytech:bronze_knife" });
  event.remove({ output: "ytech:flint_knife" });

  event.remove({ output: "ytech:crushed_galena" });
  event.remove({ output: "ytech:crushed_cassiterite" });
  event.remove({ output: "ytech:crushed_iron" });
  event.remove({ output: "ytech:crushed_copper" });
  event.remove({ output: "ytech:crushed_gold" });

  event.remove({ output: "ytech:copper_hammer" });
  event.remove({ output: "ytech:bronze_hammer" });
  event.remove({ output: "ytech:lead_hammer" });
  event.remove({ output: "ytech:iron_hammer" });
  event.remove({ output: "ytech:golden_hammer" });
  event.remove({ output: "ytech:stone_hammer" });
  event.remove({ output: "ytech:tin_hammer" });

  // event.remove({ output: "ytech:mangrove_tanning_rack" });
  // event.remove({ output: "ytech:birch_tanning_rack" });
  // event.remove({ output: "ytech:cherry_tanning_rack" });
  // event.remove({ output: "ytech:acacia_tanning_rack" });
  // event.remove({ output: "ytech:spruce_tanning_rack" });
  // event.remove({ output: "ytech:dark_oak_tanning_rack" });
  // event.remove({ output: "ytech:oak_tanning_rack" });
  // event.remove({ output: "ytech:jungle_tanning_rack" });

  event.remove({ output: "ytech:bronze_mortar_and_pestle" });
  event.remove({ output: "ytech:lead_mortar_and_pestle" });
  event.remove({ output: "ytech:tin_mortar_and_pestle" });

  event.remove({ output: "ytech:copper_axe" });
  event.remove({ output: "ytech:copper_sword" });
  event.remove({ output: "ytech:copper_shovel" });
  // event.remove({ output: "ytech:copper_hoe" });

  event.remove({ output: "ytech:copper_helmet" });
  event.remove({ output: "ytech:copper_chestplate" });
  event.remove({ output: "ytech:copper_leggings" });
  event.remove({ output: "ytech:copper_boots" });

  event.remove({ output: "ytech:bronze_anvil" });
  // event.remove({ output: "ytech:bronze_ingot" });
  event.remove({ output: "ytech:bronze_saw" });
  event.remove({ output: "ytech:bronze_plate" });
  event.remove({ output: "ytech:bronze_rod" });
  event.remove({ output: "ytech:bronze_block" });
  event.remove({ output: "ytech:bronze_spear" });

  event.remove({ output: "ytech:bronze_helmet" });
  event.remove({ output: "ytech:bronze_chestplate" });
  event.remove({ output: "ytech:bronze_leggings" });
  event.remove({ output: "ytech:bronze_boots" });

  event.remove({ output: "ytech:lead_rod" });
  event.remove({ output: "ytech:lead_plate" });
  event.remove({ output: "ytech:lead_block" });
  event.remove({ output: "ytech:lead_saw" });
  event.remove({ output: "ytech:raw_galena_block" });

  event.remove({ output: "ytech:tin_rod" });
  event.remove({ output: "ytech:tin_plate" });
  event.remove({ output: "ytech:tin_block" });
  event.remove({ output: "ytech:tin_saw" });
  event.remove({ output: "ytech:raw_cassiterite_block" });

  event.remove({ mod: "ytech", output: "minecraft:copper_ingot" });

  // Reset Craft on Surface recipes
  event.remove({ mod: "craft_on_surface" });

  // Traps
  event.remove({ output: "simply_traps:slime_trap" });
  event.remove({ output: "simply_traps:circular_barbed_wire_iron" });
  event.remove({ output: "simply_traps:circular_barbed_wire_ivy" });

  // Misc
  event.remove({
    mod: "minecraft",
    type: "iguanatweaksexpanded:forging",
  });
  event.remove({
    mod: "iguanatweaksexpanded",
    type: "iguanatweaksexpanded:forging",
  });

  event.remove({ id: "iguanatweaksexpanded:forge" });
  event.remove({ output: "brickfurnace:brick_blast_furnace" });
  event.remove({
    type: "minecraft:blasting",
  });
  event.remove({
    type: "iguanatweaksexpanded:multi_item_blasting",
  });
  event.remove({
    type: "iguanatweaksexpanded:multi_item_soul_blasting",
  });

  event.remove({ mod: "minecraft", output: "minecraft:chest" });
});
