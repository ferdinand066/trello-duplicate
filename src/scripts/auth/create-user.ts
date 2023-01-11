import supabase from "../../config/database";

const createUser = async (email: string) => {
  const { error } = await supabase.from('users').insert({
    email
  })
}

export default createUser;