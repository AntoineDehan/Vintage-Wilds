StartupEvents.registry("block", (event) => {
  event
    .create("dens_addition:primitive_crafting_table")
    .box(16, 16, 16, 0, 1, 0)
    .fullBlock(false);
});
