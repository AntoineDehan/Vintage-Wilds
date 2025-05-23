const discordLink = "https://discord.gg/a8WzmFp4BV";

PlayerEvents.loggedIn((event) => {
  event.player.tell("Hi and welcome to the first test release of my pack!");
  event.player.tell(Text.aqua("This is very WIP"));
  event.player.tell(
    "This test is to have feedback about the foundation of the pack, this is only the start of the pack."
  );
  event.player.tell(
    Text.blue("To give feedback, join the discord")
      .underlined(true)
      .clickOpenUrl(discordLink)
  );
  event.player.tell("Read quest and check recipes through JEI. Good luck!");
});
