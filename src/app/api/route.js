export const feedback = [
    {
        id: 1,
        message: "The food was very tasty"
    },
    {
        id: 2,
        message: "The ambiance can be better"
    }
]

export async function GET(request) {

    return Response.json({
        status: 200,
        message: "WOW. Api created",
    })
}