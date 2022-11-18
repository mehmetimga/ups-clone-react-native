import { gql } from "@apollo/client";

export const GET_CUSTOMERS = gql`
  query GetCustomers {
    getCustomers {
      name
      value {
        email
        name
      }
    }
  }
`;

export const GET_ORDERS = gql`
  query GetOrders {
    getOrders {
      name
      value {
        Address
        trackingItems {
          customer {
            email
            name
          }
          items {
            item_id
            price
            name
            quantity
          }
          customer_id
        }
        City
        Lat
        Lng
        carrier
        createdAt
        shippingCost
        trackingId
      }
    }
  }
`;
