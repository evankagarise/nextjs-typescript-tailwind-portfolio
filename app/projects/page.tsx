import React from 'react'
import type { Metadata } from 'next';
import { GraphQLClient, gql} from 'graphql-request'


const graphcms = new GraphQLClient(
  "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/clf427bmw4imd01td166g7yvw/master"
);

const QUERY = gql`
  {
    posts {
      id
      title
      dataPublished
      slug
      tag
      content {
        html
      }
      author {
        name
        avatar {
          url
        }
      }
      coverPhoto {
        publishedAt
        createdBy {
          id
        }
        url
      }
    }
  }
`;

export async function getStaticProps(){
  const {posts} = await graphcms.request(QUERY);
  return {
    props: {
      posts,
      revalidate: 10,
    }
  }
}
export const metadata: Metadata = {
  title: 'Projects',
  description: 'VP of Developer Experience at Vercel.',
};
const page = () => {
  return (
    <>
    <h1 className="font-bold text-3xl font-serif text-white">Projects</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 m-2 gap-4 ' >
        <div className='w-[300px] h-[200px] bg-white '> 

        </div>
        <div className='w-[300px] h-[200px] bg-white'> 

        </div>
        <div className='w-[300px] h-[200px] bg-white'> 

        </div>
        <div className='w-[300px] h-[200px] bg-white'> 

        </div>
    </div>
    </>
  
  )
}

export default page