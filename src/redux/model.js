import {schema} from "normalizr";

const cast = new schema.Entity('casts');
const director = new schema.Entity('directors');
const subject = new schema.Entity('subjects', {
    casts: [cast],
    directors: [director]
});
export const movieSchema = {
    subjects: [subject]
};
