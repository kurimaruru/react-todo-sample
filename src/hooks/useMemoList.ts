import { useCallback, useState } from "react";

export const useMemoList = () => {
  const [memos, setMemos] = useState<string[]>([]);

  //メモ追加ロジック
  const addTodo = useCallback(
    (text: string) => {
      //State変更を正常に検知させるため、新たな配列を生成
      const newMemos = [...memos];
      //テキストボックスの入力内容をメモ配列に追加
      newMemos.push(text);
      setMemos(newMemos);
    },
    [memos]
  );

  const deleteTodo = useCallback(
    (index: number) => {
      const newMemos = [...memos];
      newMemos.splice(index, 1);
      setMemos(newMemos);
    },
    [memos]
  );

  return { memos, addTodo, deleteTodo };
};
