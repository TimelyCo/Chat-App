import { useEffect } from "react";
import ChatContainer from "../components/ChatContainer";
import NoChatSelected from "../components/NoChatSelected";
import Sidebar from "../components/Sidebar";
import { useChatStore } from "../store/useChatStore";

const Home = () => {
  const { selectedUser, getUsers, isUsersLoading } = useChatStore();

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  return (
    <div className="min-h-screen bg-base-200">
      <div className="flex items-center justify-center pt-20 px-4">
        <div className="bg-base-100 rounded-lg shadow-lg w-full max-w-6xl h-[calc(100vh-8rem)]">
          <div className="flex h-full rounded-lg overflow-hidden">
            <Sidebar />
            {isUsersLoading ? (
              <div className="flex-1 flex items-center justify-center">
                <div className="loading loading-spinner loading-lg"></div>
              </div>
            ) : (
              !selectedUser ? <NoChatSelected /> : <ChatContainer />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
