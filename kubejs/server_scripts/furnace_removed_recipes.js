ServerEvents.recipes((event) => {
  // Ores
  event.remove({ type: "minecraft:smelting", input: "#forge:raw_materials" });

  event.remove({ type: "minecraft:smelting", output: "minecraft:iron_ingot" });
  event.remove({
    type: "minecraft:smelting",
    output: "minecraft:copper_ingot",
  });
  event.remove({
    type: "minecraft:smelting",
    output: "minecraft:golden_ingot",
  });
  event.remove({
    type: "minecraft:smelting",
    output: "minecraft:netherite_ingot",
  });
  event.remove({ type: "minecraft:smelting", output: "ytech:lead_ingot" });
  event.remove({ type: "minecraft:smelting", output: "ytech:tin_ingot" });
  event.remove({ type: "minecraft:smelting", output: "ytech:bronze_ingot" });
  event.remove({ type: "minecraft:smelting", input: "minecraft:clay_ball" });

  event.remove({ type: "minecraft:smelting", output: "#forge:nuggets" });

  // Food
  event.remove({ type: "minecraft:smelting", output: "#forge:foods" });
  event.remove({ type: "minecraft:smelting", input: "#forge:foods" });

  // let tag = "forge:foods";

  // Ingredient.of(`#${tag}`).stacks.forEach((itemStack) => {
  //   console.log(`Item in tag ${tag}: ${itemStack.id}`);
  // });
});
