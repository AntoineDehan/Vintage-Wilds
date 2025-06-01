JEIEvents.information((event) => {
  // Campfire Surface Crafting
  event.addItem(
    ["minecraft:campfire"],
    [
      'To craft the Campfire without a crafting table you can check the recipes in the "Surface Crafting" tab. Take the items needed and Right-Click on the ground with it. When you have placed all the items, with an Empty Hand AND Off-Hand, press Shift Right-Click to complete the craft ',
    ]
  );

  event.addItem(
    ["dens_addition:primitive_crafting_table"],
    [
      "This Primitive Crafting Table is used for specific Surface Crafting. You will need to place items with a right-click on the surface of this Primitive Crafting Table.",
    ]
  );

  event.addItem(
    ["sapwood:sap"],
    [
      "Sap can be collected from a Maple Tree with a Spigot. Use the Spigot, wait some time then collect it by hand or with a bucket!",
    ]
  );
  event.addItem(
    ["realistictorches:lit_torch"],
    ["Torches do burn out with time and need to be relit."]
  );
  event.addItem(
    ["ytech:primitive_smelter"],
    [
      "The Primitive Smelter uses a temperature system. It has a default max temperature of 900°C. To increase the max temperature you can add Chimneys on top of it. Up to 4 Brick Chimneys and 4 Reinforced Chimneys (total of 8).",
    ]
  );
});
