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

export const LEADERBOARD_UPDATED = gql`
  subscription LeaderboardUpdated {
    leaderboardUpdated {
      _id
      type
      username
      value
      rarity
    }
  }
`;
