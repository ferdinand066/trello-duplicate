import supabase from "../config/database";
import { checkAuth } from "../utils/check-auth";

const table = 'board_lists'
export default class BoardListHandlers {
  static createBoardList = async (boardList: object, boardId: string) => {
    checkAuth();

    const { data, error } = await supabase
      .from(table)
      .insert({ ...boardList, board_id: boardId })
      .select();
    if (error) throw new Error(error.message);

    return data[0];
  };
}