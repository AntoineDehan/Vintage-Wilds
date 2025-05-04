ServerEvents.recipes((event) => {
  // Ores
  event.remove({ type: "minecraft:smelting", input: "#forge:raw_materials" });
  event.remove({ type: "minecraft:smelting", output: "#forge:ingots" });
  event.remove({ type: "minecraft:smelting", output: "#forge:nuggets" });

  event.remove({ type: "minecraft:smelting", output: "#forge:foods" });
  event.remove({ type: "minecraft:smelting", input: "#forge:foods" });

  let tag = "forge:foods"; // Remplace par le tag que tu veux

  // Récupérer les items du tag et les imprimer dans la console
  Ingredient.of(`#${tag}`).stacks.forEach((itemStack) => {
    console.log(`Item in tag ${tag}: ${itemStack.id}`);
  });
});
