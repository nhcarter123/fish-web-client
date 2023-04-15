import { FishType } from "../config/config";
import { Rarity } from "../config/config";

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
    case FishType.Sardine:
      return "spr_fish_29_x";
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
    case FishType.RockBass:
      return "spr_fish_33_x";
    case FishType.Herring:
      return "spr_fish_67_x";
    case FishType.Chub:
      return "spr_fish_37_x";
    case FishType.Trout:
      return "spr_fish_05_x";
    case FishType.BrookTrout:
      return "spr_fish_05_x";
    case FishType.Walleye:
      return "spr_fish_60_x";
    case FishType.Snapper:
      return "spr_fish_14_x";
    case FishType.Whitefish:
      return "spr_fish_67_x";
    case FishType.Swordfish:
      return "spr_fish_57_x";
    case FishType.Sturgeon:
      return "spr_fish_21_x";
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
