import bcrypt from "bcryptjs";

// export class Password {
export async function hashPassword(password: string) {
    const salt = await bcrypt.genSalt(10);
    return bcrypt.hash(password, salt);
}

export async function comparePassword(password: string, hash: string) {
    return bcrypt.compare(password, hash);
}
// }
