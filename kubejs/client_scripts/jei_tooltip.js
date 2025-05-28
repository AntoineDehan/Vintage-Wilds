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
      "This Primitive Crafting Table is used for specific Surface Crafting. You will need to place items on the surface of this Primitive Crafting Table.",
    ]
  );
});
