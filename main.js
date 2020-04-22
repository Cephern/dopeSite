const embed = new Twitch.Embed("twitch-embed", {
  width: "90%",
  height: "600",
  channel: "dopecrown",
  theme: "dark",
});

embed.addEventListener(Twitch.Embed.VIDEO_READY, () => {
  var player = embed.getPlayer();
  player.play();
});
