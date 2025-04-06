import { GraphQLClientSingleton } from "app/graphql"
import { getOrdersQuery } from "app/graphql/queries/getOrders"
import { cookies } from "next/headers"

interface OrderEdge {
  node: any;
}

interface CustomerOrdersResponse {
  customer: {
    orders: {
      totalCount: number;
      edges: OrderEdge[];
    };
  };
}

export const getCustomerOrders = async () => {
  const cookiesStorage = await cookies()
  const accessToken = cookiesStorage.get("accessToken")?.value || ""
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const variables = {
    customerAccessToken: accessToken
  }

  const { customer } = await graphqlClient.request<CustomerOrdersResponse>(getOrdersQuery, variables)
  const orders = customer?.orders?.edges.map((edge: any) => edge.node)
  return {
    totalOrders: customer?.orders?.totalCount,
    orders
  }
}