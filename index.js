const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = () => {
  
  let totalBatteries = batteryBatches.reduce((acc, val) => {
    return acc + val
  }, 0)
  return totalBatteries
};