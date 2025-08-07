LootJS.modifiers((event) => {
  event
    .addEntityLootModifier(
      "naturalist:boar",
      "naturalist:elephant",
      "naturalist:deer",
      "quark:foxhound",
      "naturalist:lion",
      "naturalist:rhino"
    )
    .replaceLoot("minecraft:leather", "ytech:raw_hide", true);
});
