import React from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core";
import theme from "./themes/theme.jsx";
import NotFound from "./containers/HomePage/NotFound.jsx";
import HomePage from "./containers/HomePage/HomePage.jsx";
import LoginPage from "./containers/AuthPage/LoginPage.jsx";
import SignUpPage from "./containers/AuthPage/SignUpPage.jsx";
import UserHomePage from "./containers/UserPage/UserHomePage.jsx";
import CreatePrivateRoute from "./renderPrivateRoutes";
import ProfilePage from "./containers/UserPage/ProfilePage/ProfilePage.jsx";
import Preferences from "./containers/UserPage/Preferences/Preferences.jsx";
import Restaurants from "./containers/UserPage/UserFeed/Restaurants";
import Ambiance from "./containers/UserPage/Preferences/Ambiance";
import Flavor from "./containers/UserPage/Preferences/Flavor";
import Interest from "./containers/UserPage/Preferences/Interest";
import ReasonVisit from "./containers/UserPage/UserFeed/ReasonOfVisit";

// import { useAuth } from "./context/AuthContext";

const App = () => {

    return (
        <div>
            <ThemeProvider theme={theme}>
                <Routes>
                    <Route path="*" element={<NotFound />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/auth/login" element={<LoginPage />} />
                    <Route path="/auth/register" element={<SignUpPage />} />
                    <Route
                        path="/user/feed"
                        element={
                            <CreatePrivateRoute>
                                <UserHomePage />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/profile"
                        element={
                            <CreatePrivateRoute>
                                <ProfilePage />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/newuser"
                        element={
                            <CreatePrivateRoute>
                                <Preferences />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/newuser/ambiance"
                        element={
                            <CreatePrivateRoute>
                                <Ambiance />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/newuser/flavor"
                        element={
                            <CreatePrivateRoute>
                                <Flavor />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/newuser/interest"
                        element={
                            <CreatePrivateRoute>
                                <Interest />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/restaurants"
                        element={
                            <CreatePrivateRoute>
                                <Restaurants />
                            </CreatePrivateRoute>
                        }
                    />
                    <Route
                        path="/user/feed/reasonOfVisit"
                        element={
                            <CreatePrivateRoute>
                                <ReasonVisit/>
                            </CreatePrivateRoute>
                        }
                    />
                </Routes>
                {/* <ScrollToHashElement /> */}
            </ThemeProvider>
        </div>
    );
};

export default App;
