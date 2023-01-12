import supabase from "../config/database";
import { User } from "../types/user";

const table = "users";

export default class UserHandlers {
    static getUserByEmail = async (email: string) => {
        const { data: user, error } = await supabase
            .from(table)
            .select("*")
            .eq("email", email);

        if (error) throw new Error(error.message);

        return user;
    }

    static createUser = async (data: User) => {
        const selectedUser = await this.getUserByEmail(data.email);
        if (selectedUser?.length) return selectedUser[0];

        const { data: user, error } = await supabase.from(table).insert(data).select();

        if (error) throw new Error(error.message);

        return user[0];
    }

}