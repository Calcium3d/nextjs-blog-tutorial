import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return(
        <Layout>
            <head>
                <title>First Post BOIS~</title>
            </head>
            <h1>First Post</h1>
            <h2>
                <Link href="/">
                    <a>Back to Home</a>
                </Link>
            </h2>
        </Layout>
    )
}