ClientEvents.lang("en_us", (event) => {
  event.renameItem("ytech:unfired_decoration_pot", "Unfired Storage Pot");
  event.renameItem("quark:iron_plate", "Iron Plate Block");
});

RecipeViewerEvents.removeRecipes((event) => {
  event.remove('"iguanatweaksexpanded:flint_pickaxe"');
});
