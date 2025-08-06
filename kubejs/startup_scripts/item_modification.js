ItemEvents.modification((event) => {
  event.modify("overgeared:heated_copper_ingot", (item) => {
    item.maxStackSize = 64;
  });
  event.modify("overgeared:copper_axe", (item) => {
    item.tier = (tier) => {
      tier.uses = 150;
      tier.speed = 4.0;
      tier.attackDamageBonus = 1.0;
      tier.level = 1;
      tier.enchantmentValue = 5;
      tier.repairIngredient = "#forge:ingots/copper";
    };
  });
});
