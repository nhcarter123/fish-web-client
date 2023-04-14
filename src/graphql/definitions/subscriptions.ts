import { gql } from "@apollo/client";

export const FISH_CAUGHT = gql`
  subscription FishCaught($username: String) {
    fishCaught(username: $username) {
      _id
      type
      username
      float
      isShiny
      weight
      age
      rarity
      gender
      value
    }
  }
`;
