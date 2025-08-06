ServerEvents.tags("item", (event) => {
  let foodItems = Ingredient.all.stacks
    .toArray()
    .filter((stack) => stack.item.foodProperties)
    .map((stack) => stack.item.id);

  let tag = event.get("forge:foods");

  foodItems.forEach((id) => {
    tag.add(id);
  });
});

ServerEvents.tags("item", (event) => {
  // Axes

  event.add(
    "minecraft:axes",
    "dens_addition:flint_axe",
    "dens_addition:copper_axe",
    "overgeared:copper_axe"
  );

  /// Defenses Tags
  // Reinforced Doors
  event.add(
    "forge:doors/reinforced",
    "blocky_siege:reinforced_mangrove_door",
    "blocky_siege:reinforced_dark_oak_door",
    "blocky_siege:reinforced_acacia_door",
    "blocky_siege:reinforced_spruce_door",
    "blocky_siege:reinforced_oak_door",
    "blocky_siege:reinforced_birch_door",
    "blocky_siege:reinforced_warped_door",
    "blocky_siege:reinforced_crimson_door",
    "blocky_siege:reinforced_bamboo_door"
  );

  // Breakable Blocks - Blocks that will be able to be broken by raiding monsters
  event.add("forge:raidable_blocks", "ytech:reinforced_bricks");

  //// Crafting tags
  event.add(
    "forge:rods/metal",
    "ytech:copper_rod",
    "ytech:golden_rod",
    "ytech:iron_rod"
  );

  event.add(
    "forge:plates/metal",
    "ytech:copper_plate",
    "ytech:iron_plate",
    "ytech:golden_plate"
  );

  event.add(
    "forge:shelves",
    "primalstorage:mangrove_shelves",
    "primalstorage:dark_oak_shelves",
    "primalstorage:acacia_shelves",
    "primalstorage:jungle_shelves",
    "primalstorage:birch_shelves",
    "primalstorage:spruce_shelves",
    "primalstorage:oak_shelves"
  );

  event.add("forge:stripped_logs", [
    "minecraft:stripped_oak_log",
    "minecraft:stripped_oak_wood",
    "minecraft:stripped_spruce_log",
    "minecraft:stripped_spruce_wood",
    "minecraft:stripped_birch_log",
    "minecraft:stripped_birch_wood",
    "minecraft:stripped_jungle_log",
    "minecraft:stripped_jungle_wood",
    "minecraft:stripped_acacia_log",
    "minecraft:stripped_acacia_wood",
    "minecraft:stripped_dark_oak_log",
    "minecraft:stripped_dark_oak_wood",
    "minecraft:stripped_mangrove_log",
    "minecraft:stripped_mangrove_wood",
    "minecraft:stripped_cherry_log",
    "minecraft:stripped_cherry_wood",
    "minecraft:stripped_crimson_stem",
    "minecraft:stripped_crimson_hyphae",
    "minecraft:stripped_warped_stem",
    "minecraft:stripped_warped_hyphae",
    "sapwood:stripped_maple_log",
    "sapwood:stripped_pale_wood",
  ]);

  //// Smithing

  event.add("forge:hammers", "overgeared:copper_smithing_hammer");
  event.add(
    "overgeared:smithing_hammers",
    "iguanatweaksexpanded:wooden_hammer"
  );

  //// Ores
  event.add(
    "forge:raw_materials",
    "hardmodeores:pure_raw_gold",
    "hardmodeores:pure_raw_iron",
    "hardmodeores:pure_raw_copper"
  );

  //// Seasons crops

  // Spring
  event.add(
    "sereneseasons:spring_crops",
    "wildberries:strawberry",
    "wildberries:cranberries",
    "wildberries:blackberry",
    "wildberries:raspberry",
    "wildberries:blueberries",
    "quark:blue_blossom_sapling",
    "quark:lavender_blossom_sapling",
    "quark:orange_blossom_sapling",
    "quark:yellow_blossom_sapling",
    "quark:red_blossom_sapling",
    "legendarysurvivaloverhaul:ice_fern_seeds",
    "legendarysurvivaloverhaul:sun_fern_seeds",
    "legendarysurvivaloverhaul:water_plant_seeds"
  );
  // Summer
  event.add(
    "sereneseasons:summer_crops",
    "quark:ancient_sapling",
    "legendarysurvivaloverhaul:ice_fern_seeds",
    "legendarysurvivaloverhaul:sun_fern_seeds",
    "legendarysurvivaloverhaul:water_plant_seeds"
  );
  // Autumn
  event.add(
    "sereneseasons:autumn_crops",
    "wildberries:strawberry",
    "wildberries:cranberries",
    "wildberries:blackberry",
    "wildberries:raspberry",
    "wildberries:blueberries",
    "quark:blue_blossom_sapling",
    "quark:lavender_blossom_sapling",
    "quark:orange_blossom_sapling",
    "quark:yellow_blossom_sapling",
    "quark:red_blossom_sapling",
    "legendarysurvivaloverhaul:ice_fern_seeds",
    "legendarysurvivaloverhaul:sun_fern_seeds",
    "legendarysurvivaloverhaul:water_plant_seeds"
  );
  // Winter
  event.add("sereneseasons:winter_crops");
  // Year-Round

  //// Misc
  event.add("forge:buckets/empty", "ytech:clay_bucket");
  event.add(
    "charcoal_pit:kiln_straw",
    "farmersdelight:straw",
    "lititup:switchgrass_fiber"
  );
  event.add("overgeared:tongs", "dens_addition:wooden_tongs");
});
