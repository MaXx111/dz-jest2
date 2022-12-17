export default function getUpgrateHealthyStatus(array) {
  return array.sort((a, b) => {
    if (a.health < b.health) {
      return 1;
    }
    if (a.health > b.health) {
      return -1;
    }

    return 0;
  });
}
