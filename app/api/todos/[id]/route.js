import todosModel from "@/app/_lib/schema/todos"

export async function GET(req, { params }) {

    try {
        let resolvedParams = await params
        let todo = await todosModel.findById(resolvedParams.id)
        if (!todo) {
            return new Response('not found', { status: 404 })
        }
        return new Response(JSON.stringify(todo), { status: 200 })
    } catch (err) {
        return new Response(err.message, { status: 500 })

    }
}