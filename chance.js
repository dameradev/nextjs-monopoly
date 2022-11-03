export default [
    {
      title: "Advance to Go (Collect $200)",
      action: "move",
      tileid: "go"
    },
    {
      title: "Advance to Illinois Avenue - If you pass Go, collect $200",
      action: "move",
      tileid: "illinoiseave"
    },
    {
      title: "Advance to St. Charles Place - If you pass Go, collect $200",
      action: "move",
      tileid: "stcharlesplace"
    },
    {
      title: "Advance token to nearest Utility. If unowned, you may buy it from the Bank. If owned, throw dice and pay owner a total ten times the amount thrown.",
      action: "movenearest",
      groupid: "utility",
      rentmultiplier: 10
    },
    {
      title: "Advance token to the nearest Railroad and pay owner twice the rental to which he/she is otherwise entitled. If Railroad is unowned, you may buy it from the Bank.",
      action: "movenearest",
      groupid: "railroad",
      rentmultiplier: 2
    },
    {
      title: "Bank pays you dividend of $50",
      action: "addfunds",
      amount: 50
    },
    {
      title: "Get out of Jail Free - This card may be kept until needed, or traded/sold",
      action: "jail",
      subaction: "getout"
    },
    {
      title: "Go Back 3 Spaces",
      action: "move",
      count: -3
    },
    {
      title: "Go to Jail - Go directly to Jail - Do not pass Go, do not collect $200",
      action: "jail",
      subaction: "goto"
    },
    {
      title: "Make general repairs on all your property - For each house pay $25 - For each hotel $100",
      action: "propertycharges",
      buildings: 25,
      hotels: 100
    },
    {
      title: "Pay poor tax of $15",
      action: "removefunds",
      amount: 15
    },
    {
      title: "Take a trip to Reading Railroad - If you pass Go, collect $200",
      action: "move",
      tileid: "readingrailroad"
    },
    {
      title: "Take a walk on the Boardwalk - Advance token to Boardwalk",
      action: "move",
      tileid: "boardwalk"
    },
    {
      title: "You have been elected Chairman of the Board - Pay each player $50",
      action: "removefundstoplayers",
      amount: 50
    },
    {
      title: "Your building loan matures - Collect $150",
      action: "addfunds",
      amount: 50
    }
  ]