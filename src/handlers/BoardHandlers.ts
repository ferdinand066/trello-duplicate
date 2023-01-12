import supabase from "../config/database";
import { Board } from "../types/board";
import { checkAuth } from "../utils/check-auth";

const table = "boards";

export default class BoardHandlers {
  static getBoards = async () => {
    const { data: board, error } = await supabase.from(table).select(`*, users (
                name
            )`);

    if (error) throw new Error(error.message);

    return board;
  };

  static getCreatedBoards = async () => {
    const userId = checkAuth();

    const { data: board, error } = await supabase
      .from(table)
      .select(
        `*, users (
                name
            )`
      )
      .eq("user_id", userId);

    if (error) throw new Error(error.message);

    return board;
  };

  static getOneBoardById = async (id: string) => {
    const { data: board, error } = await supabase
      .from(table)
      .select(
        `*, board_lists (
                title
            )`
      )
      .eq("id", id);

    if (error) throw new Error(error.message);

    return board[0];
  };

  static createBoard = async (board: Board) => {
    const userId = checkAuth();

    const { data, error } = await supabase
      .from(table)
      .insert({ ...board, user_id: userId })
      .select();
    if (error) throw new Error(error.message);

    return data[0];
  };


}
