import { GraphQLClientSingleton } from 'app/graphql'
import { customerName } from 'app/graphql/queries/customerName'
import { cookies } from 'next/headers'

interface CustomerNameResponse {
  customer: {
    firstName: string;
    email: string;
  };
}

export const validateAccessToken = async () => {
  const cookieStore = await cookies()
  const accessToken = cookieStore.get('accessToken')?.value
  const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
  const { customer } = await graphqlClient.request<CustomerNameResponse>(customerName, {
    customerAccessToken: accessToken
  })
  return customer
}