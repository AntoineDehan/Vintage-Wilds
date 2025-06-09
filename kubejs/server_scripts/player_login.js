let ticksSinceStart = 0;
let cleanupStarted = false;

ServerEvents.tick((event) => {
  const server = event.server;

  if (!server || !server.persistentData) return;

  if (!server.persistentData.cleanedInitialItems && !cleanupStarted) {
    cleanupStarted = true;
    ticksSinceStart = 0;
  }

  if (cleanupStarted) {
    ticksSinceStart++;

    if (ticksSinceStart >= 200) {
      server.runCommandSilent("kill @e[type=item]");
      server.tell("§7Items have been cleaned.");
      server.runCommandSilent(
        "effect give @a legendarysurvivaloverhaul:cold_resistance 280 0 true"
      );
      server.runCommandSilent(
        "effect give @a legendarysurvivaloverhaul:heat_resistance 280 0 true"
      );
      server.persistentData.cleanedInitialItems = true;
      cleanupStarted = false;
    }
  }
});
