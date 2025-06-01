// PlayerEvents.tick((event) => {
//   const player = event.player;
//   const inventory = player.inventory;
//   const offHand = player.offHandItem;

//   const hotItems = [
//     "dens_addition:hot_copper_ingot",
//     "dens_addition:hot_copper_hammer_head_part",
//     "dens_addition:hot_copper_pickaxe_head_part",
//     "dens_addition:hot_copper_axe_head_part",
//     "dens_addition:hot_copper_sword_blade_part",
//   ];

//   const protectionItems = ["dens_addition:wooden_tongs"];

//   const hasHotItem = inventory.allItems.some((item) =>
//     hotItems.includes(item.id)
//   );
//   const hasProtection = protectionItems.includes(offHand.id);

//   if (hasHotItem && !hasProtection) {
//     player.attack(1.0);
//   }
// });
