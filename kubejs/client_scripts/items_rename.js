ClientEvents.lang("en_us", (event) => {
  event.renameItem("ytech:unfired_decoration_pot", "Unfired Storage Pot");
});

RecipeViewerEvents.removeRecipes((event) => {
  event.remove('"iguanatweaksexpanded:flint_pickaxe"');
});
