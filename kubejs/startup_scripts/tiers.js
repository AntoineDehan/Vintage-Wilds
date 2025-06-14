// Tools

ItemEvents.toolTierRegistry((event) => {
  event.add("flint", (tier) => {
    tier.uses = 35;
    tier.speed = 1.5;
    tier.attackDamageBonus = 0;
    tier.level = 0;
    tier.enchantmentValue = 3;
    tier.repairIngredient = "minecraft:flint";
  });
});

ItemEvents.toolTierRegistry((event) => {
  event.add("copper", (tier) => {
    tier.uses = 150;
    tier.speed = 4.0;
    tier.attackDamageBonus = 1.0;
    tier.level = 1;
    tier.enchantmentValue = 5;
    tier.repairIngredient = "#forge:ingots/copper";
  });
});

// Armors

ItemEvents.armorTierRegistry((event) => {
  event.add("improvised", (tier) => {
    tier.durabilityMultiplier = 4;
    tier.slotProtections = [1, 1, 1, 1];
    tier.enchantmentValue = 2;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "#immersive_weathering:bark";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });
});
