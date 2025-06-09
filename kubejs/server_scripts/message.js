const discordLink = "https://discord.gg/a8WzmFp4BV";

PlayerEvents.loggedIn((event) => {
  event.player.tell("Welcome to an early BETA release of Vintage Wilds.");
  event.player.tell("Read quest and check recipes through JEI. Good luck!");
  event.player.tell(
    Text.blue("To give feedback, join the discord")
      .underlined(true)
      .clickOpenUrl(discordLink)
  );
});
