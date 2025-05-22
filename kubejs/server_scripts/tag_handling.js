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
  let axes = ["dens_addition:flint_axe", "dens_addition:copper_axe"];
  event.add("minecraft:axes", axes);

  // New Tags
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

  // Ores
  let ores = [
    "hardmodeores:pure_raw_gold",
    "hardmodeores:pure_raw_iron",
    "hardmodeores:pure_raw_copper",
  ];

  event.add("forge:raw_materials", ores);
});
