import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
  RouterProvider,
} from "react-router-dom";

import BookStoryBurnout from "./pages/bookBurnout/BookStoryBurnout";
import BookStoryEducation from "./pages/bookEducation/BookStoryRoll";
import BookFriendPage from "./pages/bookFriend/BookFriendPage";
import BookInfoPage from "./pages/bookInfo/BookInfoPage";
import BookJournalPage from "./pages/bookJournal/BookJournalPage";
import BookListPage from "./pages/bookList/BookList";
import BookPraisePage from "./pages/bookPraise/BookPraisePage";
import BookPage from "./pages/books/BookPage";
import BookStoryRoll from "./pages/bookStory/BookStoryRoll";
import BookTetrisPage from "./pages/bookTetris/BookTetrisPage";
import BookTotalPage from "./pages/bookTotal/BookTotalPage";
import MainPage from "./pages/main/MainPage";
import PostBoard from "./pages/postBoard/PostBoard";
import ProjectInfoPage from "./pages/projectInfo/ProjectInfo";
import Layout from "./template/layout/Layout";
import Paths from "./types/paths";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />}>
      <Route path="*" element={<Navigate to={Paths.main} replace />} />,
      <Route path={Paths.main} element={<MainPage />} />,
      <Route path={Paths.books} element={<BookPage />} />,
      <Route path={Paths.post} element={<PostBoard />} />,
      <Route path={Paths.booklist} element={<BookListPage />} />,
      <Route path={Paths.bookinfo} element={<BookInfoPage />} />,
      <Route path={Paths.bookRoll} element={<BookStoryRoll />} />,
      <Route path={Paths.cv} element={<ProjectInfoPage />} />,
      <Route path={Paths.bookEdu} element={<BookStoryEducation />} />,
      <Route path={Paths.bookBurnout} element={<BookStoryBurnout />} />,
      <Route path={Paths.bookJournal} element={<BookJournalPage />} />,
      <Route path={Paths.bookTetris} element={<BookTetrisPage />} />,
      <Route path={Paths.bookTotal} element={<BookTotalPage />} />,
      <Route path={Paths.bookPraise} element={<BookPraisePage />} />,
      <Route path={Paths.bookFriend} element={<BookFriendPage />} />,
    </Route>,
  ),
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
