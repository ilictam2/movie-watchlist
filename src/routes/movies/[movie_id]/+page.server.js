import db from "#lib/db.js";
import { error } from "@sveltejs/kit";
import { redirect } from "@sveltejs/kit";

export async function load({ params }) {
    const movie = await db.getMovie(params.movie_id);

    if (!movie) {
        error(404, "Film nicht gefunden");
    }

    return { movie };
};



export const actions = {
    delete: async ({ params }) => {
        await db.deleteMovie(params.movie_id);
        redirect(303, "/movies");
    },
};