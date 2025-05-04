ServerEvents.tags("item", (event) => {
  let ores = [
    "hardmodeores:pure_raw_gold",
    "hardmodeores:pure_raw_iron",
    "hardmodeores:pure_raw_copper",
  ];
  event.add("forge:raw_materials", ores);

  let axes = ["dens_addition:flint_axe"];
  event.add("minecraft:axes", axes);
});
