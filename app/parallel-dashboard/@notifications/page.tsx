import { wait } from "@/lib/wait";

const NotificationPage = async () => {
    
  await wait(3000);
  throw new Error("Failed to load Notifications");
  return (
    <div className="bg-amber-200 border-2 w-full h-133 flex items-center justify-center">
      <h2 className="text-white">Notification Page</h2>
    </div>
  );
};

export default NotificationPage;
