import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'

export default function Post({postData}){
    return <Layout>
        {postData.id}
        <br />
        {postData.attributes.title}
        <br />
        {postData.attributes.description}
        <br />
        {postData.attributes.price}
    </Layout>
}

export async function getStaticPaths(){
    // Return a list of value
    const paths = await getAllPostIds();
    console.log('paths ====> NEW ', paths);
    return {
        paths,
        fallback: false
    }
    // return {
    //     paths: [{
    //         params: {
    //             id: '1'
    //         }
    //     }],
    //     fallback: false
    // }
}

export async function getStaticProps({params}){
    // Fetch neccessary data for the blog using param.id
    console.log('params ==> ', params);
    const postData = await getPostData(params.id)
    console.log('postData ====> ', postData)
    return {
        props: {
            postData
        }
    }
}