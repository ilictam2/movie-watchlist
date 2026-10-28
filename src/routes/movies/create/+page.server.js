import db from "#lib/db.js";

export const actions = {
    create: async ({ request }) => {
        const data = await request.formData();
        const movie = {
            title: data.get("title"),
            year: Number(data.get("year")),
            length: data.get("length"),
        };

        await db.createMovie(movie);

        return { success: true };
    },
};


