import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout";
import React from "react";

import {AlbumsPage, CommentsPage, HomePage, NotFoundPage, TodosPage, CommentPostPage} from "./pages";


function App() {

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<MainLayout/>}>

                    <Route index element={<HomePage/>}/>
                    <Route path={'todos'} element={<TodosPage/>}/>
                    <Route path={'albums'} element={<AlbumsPage/>}/>
                    <Route path={'comments'} element={<CommentsPage/>}>
                        <Route path={':postId'} element={<CommentPostPage/>}/>
                    </Route>

                    <Route path={'*'} element={<NotFoundPage/>}/>

                </Route>

            </Routes>

        </div>
    );
}

export default App;
