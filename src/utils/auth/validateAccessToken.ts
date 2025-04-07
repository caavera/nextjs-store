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
  try {
    const cookieStore = await cookies()
    const accessToken = cookieStore.get('accessToken')?.value
    
    if (!accessToken) {
      console.error('No access token found in cookies')
      return null
    }
    
    const graphqlClient = GraphQLClientSingleton.getInstance().getClient()
    const { customer } = await graphqlClient.request<CustomerNameResponse>(customerName, {
      customerAccessToken: accessToken
    })
    return customer
  } catch (error) {
    console.error('Error validating access token:', error)
    return null
  }
}