"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import { SingUpButton } from "./singup-button";
import { LoginButton } from "./login-button";
import { LogoutButton } from "./logout-button";

const NavBar = () => {
    const { user, error, isLoading } = useUser();

    return (
        <div className="py-4 flex w-full justify-between bg-gray-800 px-44">
            <div className="flex gap-8">
                <a href="/" className="button__login">
                Home
                </a>
            <a href="/profile" className="button__login">
            Server Protected Profile
            </a>
            <a href="/middleware" className="button__login">
            Middleware Protected
            </a>
            <a href="/auth-protected" className="button__login">
            Auth Protected
            </a>
            <a href="/api/data/" className="button__login">
            Protected API
            </a>
            </div>
            <div className="flex gap-4">
                {!user && !isLoading && (
                    <>
                <SingUpButton />
                <LoginButton />
                    </>
                )}
                {user && !isLoading && (
                    <LogoutButton />
                )}
                
            </div>

        </div>
    )

}


export default NavBar;