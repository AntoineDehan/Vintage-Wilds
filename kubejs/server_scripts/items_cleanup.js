ServerEvents.tick((event) => {
  const server = event.server;

  if (!server || !server.persistentData) return;

  if (!server.persistentData.cleanedInitialItems) {
    server.runCommandSilent("kill @e[type=item]");
    server.tell("Nettoyage initial des items au sol effectué.");

    server.persistentData.cleanedInitialItems = true;
  }
});
