import Head from "next/head";

export default function Cabecera({ titulo })
{
    return (
        <Head>
            <title>{titulo}</title>
        </Head>
    );
}