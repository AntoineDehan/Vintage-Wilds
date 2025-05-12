// Tools

ItemEvents.toolTierRegistry((event) => {
  event.add("flint", (tier) => {
    tier.uses = 35;
    tier.speed = 1.0;
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
  event.add("reinforced_leather", (tier) => {
    tier.durabilityMultiplier = 15;
    tier.slotProtections = [2, 3, 4, 2];
    tier.enchantmentValue = 9;
    tier.equipSound = "minecraft:item.armor.equip_leather";
    tier.repairIngredient = "#forge:ingots/copper";
    tier.toughness = 0.0;
    tier.knockbackResistance = 0.0;
  });
});
