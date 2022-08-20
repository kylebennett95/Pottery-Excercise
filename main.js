const buyClay = () => {
    const pottery = {}
    return pottery
  }
  
  
  const makePottery = (pottery, shape) => {
    pottery.shape = shape
    return pottery
  }
  
  const bisqueFire = (pottery) => {
    pottery.readyForGlazing = true
    return pottery
  }
  
  
  const glazePottery = (pottery) => {
    // this check if pottery.readyForGlazing exists and is true
    if(pottery.readyForGlazing) {
      pottery.glazing = "Midnight Blue"
      return pottery
      // This console log is not accessible by the JS
      console.log("adding glaze")
    } else {
      console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
  
  }
  
  const finalFiring = (potteryObject, temperature) => {
    if (temperature > 1200) {
        // Add cracked property with value of true
    }
    else {
        // Add cracked property with value of false
    }
  }
  
  const makeBowl = (shape) => {
    const boughtClay = buyClay()
    const basicBowl = makePottery(boughtClay,shape)
    const fired = bisqueFire(basicBowl) // {shape: "bowl", readyForGlazing: true}
    const glaze = glazePottery(fired)  // {shape: "bowl", readyForGlazing: true, glazing: "Midnight Blue"}
    console.log(glaze)
  }
  
  makeBowl("vase")