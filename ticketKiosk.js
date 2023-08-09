function ticketKiosk(customerAge) {
  if (customerAge <= 12) {
      return "Here is your free ticket";
  } else if (customerAge >= 13 && customerAge <= 17) {
      return "Here is your discounted teen ticket";
  } else if (customerAge >= 18 && customerAge <= 64) {
      return "Here is your adult ticket";
  } else {
      return "Here is your discounted senior ticket";
  }
}