export const GET = async(request, {params}) => {
    return Response.json({name: 'game', params: params.id});
}
 
