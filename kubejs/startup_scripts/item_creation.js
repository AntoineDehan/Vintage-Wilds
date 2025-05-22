StartupEvents.registry("item", (e) => {
  // The texture for this item has to be placed in kubejs/assets/kubejs/textures/item/test_item.png
  e.create("dens_addition:fire_wood");

  // Pottery
  e.create("dens_addition:unfired_cooking_pot");
  e.create("dens_addition:unfired_canteen");
  // e.create("dens_addition:unfired_grill");

  //Flint tools
  e.create("dens_addition:flint_shovel", "shovel").tier("flint");
  e.create("dens_addition:flint_axe", "axe").tier("flint");

  //Copper tools
  e.create("dens_addition:copper_pickaxe", "pickaxe").tier("copper");
  e.create("dens_addition:copper_shovel", "shovel").tier("copper");
  e.create("dens_addition:copper_axe", "axe").tier("copper");
  e.create("dens_addition:copper_sword", "sword").tier("copper");

  //Forging
  e.create("dens_addition:hot_copper_ingot");

  e.create("dens_addition:hot_copper_hammer_head_part");
  e.create("dens_addition:hot_copper_pickaxe_head_part");
  e.create("dens_addition:hot_copper_axe_head_part");
  e.create("dens_addition:hot_copper_sword_blade_part");

  e.create("dens_addition:wooden_tongs");
});
