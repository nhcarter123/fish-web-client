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
  MudTurtle,
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
  [FishType.SpottedTurtle]: "Spotted turtle",
  [FishType.MudTurtle]: "Mud turtle",
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
  [FishType.SpottedTurtle]: {
    weightClass: WeightClass.Light,
    rarity: Rarity.Epic,
    lifespanClass: LifespanClass.Medium,
  },
  [FishType.MudTurtle]: {
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
};

export type RarityWeight = {
  rarity: Rarity;
  weight: number;
};

export const standardRarityTable: RarityWeight[] = [
  {
    rarity: Rarity.VeryCommon,
    weight: 320 + 1,
  },
  {
    rarity: Rarity.Common,
    weight: 192 + 1,
  },
  {
    rarity: Rarity.Uncommon,
    weight: 128 + 1,
  },
  {
    rarity: Rarity.Scarce,
    weight: 64 + 1,
  },
  {
    rarity: Rarity.Rare,
    weight: 32 + 1,
  },
  {
    rarity: Rarity.Epic,
    weight: 16 + 1,
  },
  {
    rarity: Rarity.Exotic,
    weight: 8 + 1,
  },
  {
    rarity: Rarity.Extraordinary,
    weight: 4 + 1,
  },
  {
    rarity: Rarity.Legendary,
    weight: 2 + 1,
  },
  {
    rarity: Rarity.Mythical,
    weight: 1 + 1,
  },
];
