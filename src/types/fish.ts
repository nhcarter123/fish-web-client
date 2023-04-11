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

export type Fish = {
  _id: string;
  type: FishType;
  username: string;
  float: number;
  isShiny: boolean;
  weight: number;
  age: number;
  value: number;
  rarity: Rarity;
  gender: FishGender;
};
