function prestige (i) {
  if (player.generators[i].prestigeAmount.lt(prestigeThreshold)) {
    return false;
  }
  let prestigeRank = player.generators.length - i - 1;
  if (prestigeRank === 0) {
    initializeTier();
  }
  player.generators[i + 1].prestigeAmount = player.generators[i + 1].prestigeAmount.plus(
    getPrestigeGain(player.generators[i].prestigeAmount));
  for (let k = 0; k <= i; k++) {
    resetTier(k);
  }
  partialResetTier(i + 1);
  if (prestigeRank <= 1)
    player.incrementali.currencyAmount = 1;
    player.incrementali.galaxies = 0;
    player.incrementali.nextGalaxy = 100;
}
