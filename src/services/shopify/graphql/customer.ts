import { GraphQLClientSingleton } from "app/graphql"
import { getOrdersQuery } from "app/graphql/queries/getOrders"
import { cookies } from "next/headers"

interface LineItem {
  currentQuantity: number;
  quantity: number;
  title: string;
}

interface LineItemEdge {
  cursor: string;
  node: LineItem;
}

interface LineItems {
  edges: LineItemEdge[];
}

interface Order {
  cancelReason: string | null;
  canceledAt: string | null;
  currencyCode: string;
  customerLocale: string;
  customerUrl: string;
  edited: boolean;
  email: string;
  financialStatus: string;
  fulfillmentStatus: string;
  id: string;
  name: string;
  orderNumber: number;
  phone: string;
  processedAt: string;
  statusUrl: string;
  lineItems: LineItems;
}

interface OrderEdge {
  node: Order;
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
  const orders = customer?.orders?.edges.map((edge: OrderEdge) => edge.node)
  return {
    totalOrders: customer?.orders?.totalCount,
    orders
  }
}