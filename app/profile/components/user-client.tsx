"use client";

import { useUser } from "@auth0/nextjs-auth0/client";

const ProfileClient = () => {
    const {user, error, isLoading} = useUser();
    //isLoading на сервере не нужен, потому что он отдает уже готовый макет
    if (error) return <div>{error.message}</div>;
    if (isLoading) return <div>Loading...</div>;
    return user ? (
        <div>
            <img src={user.picture ?? "User"} alt={user.name ?? "User"} />
            <h2>{user.name}</h2>
            <p>{user.email}</p>
        </div>
    ) : (
        <div>
            Not logged in
        </div>
    );
};
export default ProfileClient;