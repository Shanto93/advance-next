import { getUsers } from "@/server/actions/users.actions";

const Users = async () => {
  const users = await getUsers();
  return (
    <div className="flex justify-center items-center h-screen p-6 bg-white rounded-lg shadow-md">
      <div>
        <h2 className="text-2xl font-bold mb-4 text-center">Our Users</h2>

        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <ul className="space-y-2">
            {users.map((user,index) => (
              <li key={user._id} className="p-4 bg-gray-100 rounded-lg">
                {'('}{index+1}{')'} {user.name} : {user.email}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Users;
