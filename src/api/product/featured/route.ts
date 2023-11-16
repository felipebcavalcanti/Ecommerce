import data from "../data.json"

export async function GET() {
    const featuredProducts = data.products.filter(p => p.featured)

    return(
        Response.json(featuredProducts)
    );
}