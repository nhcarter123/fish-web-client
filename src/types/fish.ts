import { FishGender, FishType, Rarity } from "../config/config";

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
