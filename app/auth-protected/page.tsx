import { NextPage } from "next";
import { Claims, getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";

const AuthProtected: NextPage = withPageAuthRequired(
    async () => {
    const session = await getSession();
    const user: Claims | undefined = session?.user;
    
    return <div className="content-layout px-44">
        <img src={user?.picture} alt={user?.name} />
        {user && <h2>{user.name}</h2>}
        {user && <p>{user.email}</p>}
                
    </div>
},
{returnTo: '/auth-protected'}
);

export default AuthProtected;

