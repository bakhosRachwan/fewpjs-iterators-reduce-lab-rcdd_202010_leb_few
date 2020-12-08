const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

const batteries = () => {
  
  let totalBatteries = 0
  returnt =batteryBatches.reduce((acc, val) => {
    return acc + val
  })
  return totalBatteries
};