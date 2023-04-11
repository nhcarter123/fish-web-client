import { FishType, Rarity } from "../types/fish";

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

enum LifespanClass {
  Short,
  Medium,
  Long,
  VeryLong,
}

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
    rarity: Rarity.Legendary,
    lifespanClass: LifespanClass.VeryLong,
  },
  [FishType.Trout]: {
    weightClass: WeightClass.Medium,
    rarity: Rarity.Common,
    lifespanClass: LifespanClass.Medium,
  },
};

type RarityWeight = {
  rarity: Rarity;
  weight: number;
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
