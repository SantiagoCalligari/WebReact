import executeQuery from "./db";


export async function MostrarBar()
{
    try
    {
        const result = await executeQuery(
            {
                query: 'Select * from bares',
                values: [Titulo, Cuerpo, Imagen],
            }
        );
        return result;
    }
    catch(error)
    {
        console.log("Sos un salame");
    }
}