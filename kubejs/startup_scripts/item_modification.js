ItemEvents.modification((event) => {
  event.modify("overgeared:heated_copper_ingot", (item) => {
    item.maxStackSize = 64;
  });
});
