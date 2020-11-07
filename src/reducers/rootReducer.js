const initState = {
    posts: [
        {
            id: "1",
            title: "t1",
            body:
                "Aute elit dolore sunt est consequat ipsum esse occaecat incididunt adipisicing cillum. Aliqua aliqua velit dolor et nostrud nostrud laborum esse ex cupidatat labore. Sunt commodo magna Lorem ad. Aliquip dolor deserunt non dolor sit officia. In nisi incididunt ex velit laboris eu voluptate dolore eiusmod proident esse officia aliqua.",
        },
        {
            id: "2",
            title: "t2",
            body:
                "Aute elit dolore sunt est consequat ipsum esse occaecat incididunt adipisicing cillum. Aliqua aliqua velit dolor et nostrud nostrud laborum esse ex cupidatat labore. Sunt commodo magna Lorem ad. Aliquip dolor deserunt non dolor sit officia. In nisi incididunt ex velit laboris eu voluptate dolore eiusmod proident esse officia aliqua.",
        },
        {
            id: "3",
            title: "t3",
            body:
                "Aute elit dolore sunt est consequat ipsum esse occaecat incididunt adipisicing cillum. Aliqua aliqua velit dolor et nostrud nostrud laborum esse ex cupidatat labore. Sunt commodo magna Lorem ad. Aliquip dolor deserunt non dolor sit officia. In nisi incididunt ex velit laboris eu voluptate dolore eiusmod proident esse officia aliqua.",
        },
    ],
};

const rootReducer = (state = initState, action) => {
    console.log(action);
    if (action.type === "DELETE_POST") {
        let newPosts = state.posts.filter((post) => {
            return post.id !== action.id;
        });
        return {
            ...state,
            posts: newPosts,
        };
    }
    return state;
};

export default rootReducer;
