import { useUserData, useSetUserData } from "../lib/users";

const User = () => {
  const { user, loading } = useUserData();
  const [updateUserData] = useSetUserData();
  const handleUpdate = (fields) => {
    updateUserData({ Auth0: user.Auth0, rowid: "asdas", fields });
  };

  return (
    <div className="py-3">
      <div className="bg-white overflow-hidden shadow sm:rounded-lg">
        <pre key={user}>{JSON.stringify(user, null, 2)}</pre>
        <button onClick={() => handleUpdate({ Twitter: "not-kevin" })}>
          Click here
        </button>
      </div>
    </div>
  );
};

export default User;
