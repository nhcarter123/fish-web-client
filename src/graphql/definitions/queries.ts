import { gql } from "@apollo/client";

export const GET_FISH = gql`
  query GetFish(
    $username: String
    $page: Int!
    $pageSize: Int!
    $raritySort: Int!
    $valueSort: Int!
    $floatSort: Int!
  ) {
    getFish(
      username: $username
      page: $page
      pageSize: $pageSize
      raritySort: $raritySort
      valueSort: $valueSort
      floatSort: $floatSort
    ) {
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
