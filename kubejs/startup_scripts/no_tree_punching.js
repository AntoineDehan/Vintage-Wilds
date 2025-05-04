ForgeEvents.onEvent(
  "net.minecraftforge.event.entity.player.PlayerEvent$BreakSpeed",
  (event) => {
    global.harvestChecker(event);
  }
);

global.harvestChecker = (
  /** @type {Internal.PlayerEvent$BreakSpeed} */ event
) => {
  const { entity, state } = event;
  if (!state.tags.anyMatch((tag) => tag.location() == "minecraft:logs")) return;
  if (!entity.mainHandItem.hasTag("minecraft:axes")) event.setNewSpeed(0);
};
