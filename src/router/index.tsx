import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import PageNotFound from "../pages/PageNotFound";
import HomePage from "../pages/HomePage";
import Profile from "../pages/Profile";
import ProtectedRoute from "../pages/ProtectedRoute";
import Login from "../pages/Login";
import Signin from "../pages/Sigin";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route path="/signin" element={<Signin />} />
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layout />} errorElement={<PageNotFound />} >
                <Route index element={<HomePage />} />
                <Route path="/profile" element={<ProtectedRoute redirectPath="/login">
                    <Profile />
                </ProtectedRoute>} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
        </>
    )
);

export default router