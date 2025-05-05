EntityEvents.spawned((event) => {
  const entity = event.entity;
  if (entity.type != "minecraft:wolf") return;

  const ai = entity.getBrain();
  ai.removeGoals("target"); // Nettoie les anciens comportements (optionnel)
  ai.addGoal(2, "minecraft:nearest_attackable_target", {
    target: "minecraft:player",
    must_see: true,
    must_reach: true,
  });
});
