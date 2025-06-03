PlayerEvents.tick((event) => {
  const player = event.player;
  const mainHand = player.mainHandItem;
  const offHand = player.offHandItem;
  const isInWater = player.isInWater();

  const torchId = "realistictorches:lit_torch";
  const extinguishedTorchId = "realistictorches:unlit_torch";

  if (isInWater) {
    if (mainHand.id == torchId) {
      const count = mainHand.count;
      player.setMainHandItem(Item.of(extinguishedTorchId, count));
    }

    if (offHand.id == torchId) {
      const count = offHand.count;
      player.setOffHandItem(Item.of(extinguishedTorchId, count));
    }
  }
});
