export type Fish = {
  _id: string;
  type: FishType;
  username: string;
  float: number;
  isShiny: boolean;
  weight: number;
  age: number;
  value: number;
  version: number;
  rarity: Rarity;
  gender: FishGender;
};

export enum Rarity {
  VeryCommon,
  Common,
  Uncommon,
  Scarce,
  Rare,
  Epic,
  Exotic,
  Extraordinary,
  Legendary,
  Mythical,
}

export enum FishGender {
  Male,
  Female,
}

export enum ShopItemType {
  WoodRod,
  BambooRod,
  FiberglassRod,
  Spear,
  Net,
  Trap,
  Rusty,
  Steel,
  Double,
  Barbed,
  SnapSwivel,
  Unknown1,
  Unknown2,
  None,
  Sardines,
  Worm,
  Caterpillar,
  Crab,
  Shrimp,
  Ammonite,
  Braided,
  Monofilament,
}

export enum ItemClass {
  Rod,
  Bait,
  Lure,
  Line,
}

export type ShopItem = {
  name: string;
  description: string[];
  path: string;
  cost: number;
  class: ItemClass;
  costPerCast?: boolean;
  // type: ShopItemType;
};

export const shopItemConfig: Record<ShopItemType, ShopItem> = {
  [ShopItemType.WoodRod]: {
    name: "Wood rod",
    description: ["+10s cast time."],
    path: "icon37",
    cost: 0,
    class: ItemClass.Rod,
  },
  [ShopItemType.BambooRod]: {
    name: "Bamboo rod",
    description: ["+5s cast time."],
    path: "icon38",
    cost: 2000,
    class: ItemClass.Rod,
  },
  [ShopItemType.FiberglassRod]: {
    name: "Fiberglass rod",
    description: ["-5s cast time.", "+10% tangle chance."],
    path: "icon39",
    cost: 10000,
    class: ItemClass.Rod,
  },
  [ShopItemType.Spear]: {
    name: "Spear",
    description: ["10% chance to catch 2 fish."],
    path: "icon40",
    cost: 50000,
    class: ItemClass.Rod,
  },
  [ShopItemType.Net]: {
    name: "Net",
    description: ["+180s cast time.", "catches 1-5 fish."],
    path: "icon41",
    cost: 200000,
    class: ItemClass.Rod,
  },
  [ShopItemType.Trap]: {
    name: "Trap",
    description: ["+60s cast time.", "Can catch deep sea fish."],
    path: "icon42",
    cost: 500000,
    class: ItemClass.Rod,
  },
  [ShopItemType.Rusty]: {
    name: "Rusty hook",
    description: ["+2% seaweed catch rate."],
    path: "icon43",
    cost: 0,
    class: ItemClass.Lure,
  },
  [ShopItemType.Steel]: {
    name: "Steel hook",
    description: ["+2% seaweed catch rate."],
    path: "icon44",
    cost: 5000,
    class: ItemClass.Lure,
  },
  [ShopItemType.Double]: {
    name: "Double hook",
    description: ["+2% seaweed catch rate."],
    path: "icon45",
    cost: 25000,
    class: ItemClass.Lure,
  },
  [ShopItemType.Barbed]: {
    name: "Barbed hook",
    description: ["Ignores very common fish.", "+25% seaweed catch rate."],
    path: "icon46",
    cost: 50000,
    class: ItemClass.Lure,
  },
  [ShopItemType.SnapSwivel]: {
    name: "Snap swivel",
    description: ["-15% seaweed catch rate."],
    path: "icon34",
    cost: 100000,
    class: ItemClass.Lure,
  },
  [ShopItemType.Unknown1]: {
    name: "Unknown",
    description: [],
    path: "icon35",
    cost: 9999999,
    class: ItemClass.Lure,
  },
  [ShopItemType.Unknown2]: {
    name: "Unknown",
    description: [],
    path: "icon36",
    cost: 9999999,
    class: ItemClass.Lure,
  },
  [ShopItemType.None]: {
    name: "None",
    description: [],
    path: "close",
    cost: 0,
    class: ItemClass.Lure,
  },
  [ShopItemType.Sardines]: {
    name: "Sardines",
    description: [],
    path: "icon33",
    cost: 25,
    costPerCast: true,
    class: ItemClass.Bait,
  },
  [ShopItemType.Worm]: {
    name: "Worm",
    description: [],
    path: "icon31",
    cost: 50,
    costPerCast: true,
    class: ItemClass.Bait,
  },
  [ShopItemType.Caterpillar]: {
    name: "Caterpillar",
    description: [],
    path: "icon32",
    cost: 150,
    costPerCast: true,
    class: ItemClass.Bait,
  },
  [ShopItemType.Crab]: {
    name: "Crab",
    description: [],
    path: "icon28",
    cost: 250,
    costPerCast: true,
    class: ItemClass.Bait,
  },
  [ShopItemType.Shrimp]: {
    name: "Shrimp",
    description: [],
    path: "icon29",
    cost: 500,
    costPerCast: true,
    class: ItemClass.Bait,
  },
  [ShopItemType.Ammonite]: {
    name: "Ammonite",
    description: [],
    path: "icon30",
    cost: 1000,
    costPerCast: true,
    class: ItemClass.Bait,
  },
  [ShopItemType.Braided]: {
    name: "Braided line",
    description: [],
    path: "icon47",
    cost: 0,
    class: ItemClass.Line,
  },
  [ShopItemType.Monofilament]: {
    name: "Monofilament line",
    description: [],
    path: "icon48",
    cost: 80000,
    class: ItemClass.Line,
  },
};

export enum FishType {
  BrownTrout,
  Perch,
  Carp,
  YellowPerch,
  Pike,
  LargeMouthBass,
  SmallMouthBass,
  Sunfish,
  Catfish,
  Crawfish,
  SoftShelledTurtle,
  Crab,
  Salmon,
  Shrimp,
  Eel,
  Starfish,
  Octopus,
  Squid,
  Jellyfish,
  RainbowTrout,
  Walleye,
  BoxTurtle,
  SnappingTurtle,
  SpottedTurtle,
  Lobster,
  LeatherbackTurtle,
  BrookTrout,
  Cod,
  Mackerel,
  Pickerel,
  RockBass,
  Tuna,
  Pufferfish,
  Sardine,
  SeaBass,
  Swordfish,
  Tilapia,
  Whitefish,
  Zander,
  Bluegill,
  Bullhead,
  Chub,
  Crappie,
  Flounder,
  Gar,
  Herring,
  Redfish,
  Snapper,
  Snook,
  Sturgeon,
  Trout,
  SeaTurtle,
  BlueCrab,
  KingCrab,
  LionsManeJellyfish,
  MantisShrimp,
  PistolShrimp,
  ElectricEel,
  MorayEel,
  BlueSeaStar,
  RoyalStarfish,
  ThornySeahorse,
  SpottedSeahorse,
  YellowSeahorse,
  // Pirarucu
  // Aruanãfish
  // Tambaqui
}
enum LifespanClass {
  Short,
  Medium,
  Long,
  VeryLong,
}

type FishConfig = {
  weightClass: WeightClass;
  lifespanClass: LifespanClass;
  rarity: Rarity;
};

enum WeightClass {
  Tiny,
  Light,
  Medium,
  Heavy,
  VeryHeavy,
  Colossal,
}
export const fishTypeNameMap: Record<FishType, string> = {
  [FishType.BrownTrout]: "Brown trout",
  [FishType.Perch]: "Perch",
  [FishType.Carp]: "Carp",
  [FishType.YellowPerch]: "Yellow perch",
  [FishType.Pike]: "Pike",
  [FishType.LargeMouthBass]: "Large mouth bass",
  [FishType.SmallMouthBass]: "Small mouth bass",
  [FishType.Sunfish]: "Sunfish",
  [FishType.Catfish]: "Catfish",
  [FishType.Crawfish]: "Crawfish",
  [FishType.SoftShelledTurtle]: "Soft-shelled turtle",
  [FishType.Crab]: "Crab",
  [FishType.Salmon]: "Salmon",
  [FishType.Shrimp]: "Shrimp",
  [FishType.Eel]: "Eel",
  [FishType.Squid]: "Squid",
  [FishType.Octopus]: "Octopus",
  [FishType.Jellyfish]: "Jellyfish",
  [FishType.Starfish]: "Starfish",
  [FishType.RainbowTrout]: "Rainbow trout",
  [FishType.Lobster]: "Lobster",
  [FishType.Walleye]: "Walleye",
  [FishType.BoxTurtle]: "Box turtle",
  [FishType.SnappingTurtle]: "Snapping turtle",
  [FishType.SeaTurtle]: "Sea turtle",
  [FishType.SpottedTurtle]: "Spotted turtle",
  [FishType.LeatherbackTurtle]: "Leatherback turtle",
  [FishType.Pufferfish]: "Pufferfish",
  [FishType.Sardine]: "Sardine",
  [FishType.SeaBass]: "Sea bass",
  [FishType.Swordfish]: "Swordfish",
  [FishType.Tilapia]: "Tilapia",
  [FishType.Whitefish]: "Whitefish",
  [FishType.Zander]: "Zander",
  [FishType.Bluegill]: "Bluegill",
  [FishType.Bullhead]: "Bullhead",
  [FishType.Chub]: "Chub",
  [FishType.Crappie]: "Crappie",
  [FishType.Flounder]: "Flounder",
  [FishType.Gar]: "Gar",
  [FishType.Herring]: "Herring",
  [FishType.Redfish]: "Redfish",
  [FishType.Snapper]: "Snapper",
  [FishType.Snook]: "Snook",
  [FishType.Sturgeon]: "Sturgeon",
  [FishType.Trout]: "Trout",
  [FishType.Tuna]: "Tuna",
  [FishType.BrookTrout]: "Brook trout",
  [FishType.Cod]: "Cod",
  [FishType.Mackerel]: "Mackerel",
  [FishType.Pickerel]: "Pickerel",
  [FishType.RockBass]: "Rock bass",
  [FishType.BlueCrab]: "Blue crab",
  [FishType.KingCrab]: "King crab",
  [FishType.LionsManeJellyfish]: "Lion's mane jellyfish",
  [FishType.MantisShrimp]: "Mantis shrimp",
  [FishType.PistolShrimp]: "Pistol shrimp",
  [FishType.ElectricEel]: "Electric eel",
  [FishType.MorayEel]: "Moray eel",
  [FishType.BlueSeaStar]: "Blue sea star",
  [FishType.RoyalStarfish]: "Royal starfish",
  [FishType.ThornySeahorse]: "Thorny seahorse",
  [FishType.SpottedSeahorse]: "Spotted seahorse",
  [FishType.YellowSeahorse]: "Yellow seahorse",
};

export const rarityNameMap: Record<Rarity, string> = {
  [Rarity.VeryCommon]: "Very common",
  [Rarity.Common]: "Common",
  [Rarity.Uncommon]: "Uncommon",
  [Rarity.Scarce]: "Scarce",
  [Rarity.Rare]: "Rare",
  [Rarity.Epic]: "Epic",
  [Rarity.Exotic]: "Exotic",
  [Rarity.Extraordinary]: "Extraordinary",
  [Rarity.Legendary]: "Legendary",
  [Rarity.Mythical]: "Mythical",
};

export const LifespanMap: Record<LifespanClass, number> = {
  [LifespanClass.Short]: 1,
  [LifespanClass.Medium]: 2,
  [LifespanClass.Long]: 3,
  [LifespanClass.VeryLong]: 4,
};

export const WeightMap: Record<WeightClass, number> = {
  [WeightClass.Tiny]: 0.5,
  [WeightClass.Light]: 2,
  [WeightClass.Medium]: 5,
  [WeightClass.Heavy]: 40,
  [WeightClass.VeryHeavy]: 100,
  [WeightClass.Colossal]: 500,
};

export const fishConfigMap: Record<FishType, FishConfig> = {
  [FishType.BrownTrout]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.VeryCommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Perch]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.VeryCommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Carp]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.VeryCommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.YellowPerch]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Pike]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.LargeMouthBass]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.SmallMouthBass]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Sunfish]: {
    weightClass: WeightClass.Heavy,
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Catfish]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Crawfish]: {
    weightClass: WeightClass.Tiny,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Short,
  },
  [FishType.SoftShelledTurtle]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Exotic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Crab]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Salmon]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Shrimp]: {
    weightClass: WeightClass.Tiny,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Short,
  },
  [FishType.Eel]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Squid]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Extraordinary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Octopus]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Extraordinary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Jellyfish]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Exotic,
    lifespanClass: LifespanClass.Short,
  },
  [FishType.Starfish]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Exotic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.RainbowTrout]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Walleye]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.BoxTurtle]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Scarce,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.SnappingTurtle]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.SeaTurtle]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Mythical,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.SpottedTurtle]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.LeatherbackTurtle]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Lobster]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.VeryLong,
  },
  [FishType.BrookTrout]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Cod]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Mackerel]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.VeryCommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Pickerel]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Scarce,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.RockBass]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Tuna]: {
    weightClass: WeightClass.Colossal,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Pufferfish]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Exotic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Sardine]: {
    weightClass: WeightClass.Tiny,
    rarity: Rarity.VeryCommon,
    lifespanClass: LifespanClass.Short,
  },
  [FishType.SeaBass]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Scarce,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Swordfish]: {
    weightClass: WeightClass.VeryHeavy,
    rarity: Rarity.Extraordinary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Tilapia]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Whitefish]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Zander]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Bluegill]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Bullhead]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Chub]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Crappie]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Flounder]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Gar]: {
    weightClass: WeightClass.Heavy,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Herring]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Redfish]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Scarce,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Snapper]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Uncommon,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Snook]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.Sturgeon]: {
    weightClass: WeightClass.Heavy,
    rarity: Rarity.Mythical,
    lifespanClass: LifespanClass.VeryLong,
  },
  [FishType.Trout]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.BlueCrab]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Extraordinary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.KingCrab]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.Long,
  },
  [FishType.LionsManeJellyfish]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.MantisShrimp]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Mythical,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.PistolShrimp]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Exotic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.ElectricEel]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Extraordinary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.MorayEel]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.BlueSeaStar]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.BlueSeaStar]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Rare,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.RoyalStarfish]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.ThornySeahorse]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Extraordinary,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.SpottedSeahorse]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Exotic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.YellowSeahorse]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
};

export type RarityWeight = {
  rarity: Rarity;
  weight: number;
};

export const getSizeTagByFish = (fish: Fish): string => {
  if (fish.weight > 0.999) {
    return "Colossal ";
  }
  if (fish.weight > 0.99) {
    return "Enormous ";
  }
  if (fish.weight > 0.95) {
    return "Gigantic ";
  }
  if (fish.weight > 0.9) {
    return "Giant ";
  }
  if (fish.weight > 0.8) {
    return "Large ";
  }

  if (fish.weight < 0.001) {
    return "Atomic ";
  }
  if (fish.weight < 0.01) {
    return "Nano ";
  }
  if (fish.weight < 0.05) {
    return "Micro ";
  }
  if (fish.weight < 0.1) {
    return "Tiny ";
  }
  if (fish.weight < 0.2) {
    return "Small ";
  }

  return "";
};
