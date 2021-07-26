const loggerMiddleware = (store) => (next) => (action) => {
    // default middleware constructor
    console.group(action && action.type); // 액션 타입으로 log 그룹화
    console.log("이전 상태 :", store.getState());
    console.log("action :", action);
    next(action); // 다음 미들웨어 전달 , 없으면 리듀서 실행
    console.log("다음 상태 :", store.getState());
    console.groupEnd(); // 그룹 끝
};

export default loggerMiddleware;
