const initalState = {
  memoList: [
    {
      date: new Date(),
      name: "green",
      text: "방명록을 작성했습니다.",
    },
  ],
};

export const addmemo = (memo) => ({ type: "addmemo", payload: memo });

const memos = (state = initalState, action) => {
  switch (action.type) {
    case "addmemo":
      return { ...state, memoList: state.memoList.concat(action.payload) };
    default:
      return state;
  }
};

export default memos;
