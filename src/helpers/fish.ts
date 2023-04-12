import { FishType, Rarity } from "../types/fish";
export const getFishPathFromType = (type: number) => {
  switch (type) {
    case FishType.BrownTrout:
      return "spr_fish_01_x";
    case FishType.Perch:
      return "spr_fish_16_x";
    case FishType.Carp:
      return "spr_fish_13_x";
    case FishType.YellowPerch:
      return "spr_fish_16_x";
    case FishType.Pike:
      return "spr_fish_58_x";
    case FishType.LargeMouthBass:
      return "spr_fish_71_x";
    case FishType.SmallMouthBass:
      return "spr_fish_26_x";
    case FishType.Crawfish:
      return "spr_fish_92_x";
    case FishType.Crab:
      return "spr_fish_84_x";
    case FishType.Sunfish:
      return "spr_fish_74_x";
    case FishType.Catfish:
      return "spr_fish_27_x";
    case FishType.Octopus:
      return "spr_fish_95_x";
    case FishType.SoftShelledTurtle:
    case FishType.BoxTurtle:
    case FishType.SpottedTurtle:
    case FishType.SnappingTurtle:
    case FishType.MudTurtle:
      return "spr_fish_77_x";
    case FishType.Shrimp:
      return "spr_fish_87_x";
    case FishType.Starfish:
      return "spr_fish_80_x";
    case FishType.Lobster:
      return "spr_fish_92_x";
    case FishType.Eel:
      return "spr_fish_47_x";
    case FishType.Mackerel:
      return "spr_fish_17_x";
    case FishType.Pickerel:
      return "spr_fish_26_x";
    case FishType.Cod:
      return "spr_fish_37_x";
    case FishType.Redfish:
      return "spr_fish_19_x";
    case FishType.SeaBass:
      return "spr_fish_28_x";
    case FishType.Bluegill:
      return "spr_fish_38_x";
    case FishType.Snook:
      return "spr_fish_55_x";
    case FishType.Squid:
      return "spr_fish_96_x";
    case FishType.Jellyfish:
      return "spr_fish_99_x";
    case FishType.Flounder:
      return "spr_fish_24_x";
    case FishType.Tilapia:
      return "spr_fish_61_x";
    case FishType.Tuna:
      return "spr_fish_69_x";
  }

  return "spr_fish_01_x";
};

export const getRarityColor = (rarity: Rarity) => {
  switch (rarity) {
    case Rarity.VeryCommon:
      return "#e0f3f3";
    case Rarity.Common:
      return "#7993cc";
    case Rarity.Uncommon:
      return "#6bb66b";
    case Rarity.Scarce:
      return "#2f8825";
    case Rarity.Rare:
      return "#4747ff";
    case Rarity.Epic:
      return "#ffec00";
    case Rarity.Exotic:
      return "#d230d2";
    case Rarity.Extraordinary:
      return "#00ffa6";
    case Rarity.Legendary:
      return "#ff7800";
    case Rarity.Mythical:
      return "#ff0000";
  }
};

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
