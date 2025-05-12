ServerEvents.tags("item", (event) => {
  let foodItems = Ingredient.all.stacks
    .toArray()
    .filter((stack) => stack.item.foodProperties)
    .map((stack) => stack.item.id);

  let tag = event.get("forge:foods");

  foodItems.forEach((id) => {
    tag.add(id);
  });
});

ServerEvents.tags("item", (event) => {
  event.add("minecraft:axes", "dens_addition:copper_axe");
});
