// /components/UserListItem.tsx
"use client";
import { useRouter } from "next/navigation";
import { User } from "firebase/auth";
import { IChat } from "@/types";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";

interface UserListItemProps {
  sender: User;
  receiver: User;
  selectedChatId?: string;
  chats: IChat[];
}

const UserListItem = ({
  sender,
  receiver,
  selectedChatId,
  chats,
}: UserListItemProps) => {
  const router = useRouter();

  const chatExists = (receiverEmail: string): IChat | undefined => {
    const senderEmail = sender.email!;
    return chats.find(
      (chat: IChat) =>
        chat.users.includes(senderEmail) && chat.users.includes(receiverEmail)
    );
  };

  const chat = chatExists(receiver.email!);

  const redirect = (id: string) => {
    router.push(`/chat/${id}`);
  };

  const handleClick = async () => {
    const senderData = {
      displayName: sender.displayName,
      photoURL: sender.photoURL,
      email: sender.email,
    };

    const receiverData = {
      displayName: receiver.displayName,
      photoURL: receiver.photoURL,
      email: receiver.email,
    };

    try {
      if (!chat) {
        const { id } = await addDoc(collection(db, "chats"), {
          usersData: [senderData, receiverData],
          users: [sender.email, receiver.email],
          timestamp: serverTimestamp(),
        });
        redirect(id);
      } else {
        redirect(chat.id);
      }
    } catch (error) {
      console.error("Error creating or redirecting to chat: ", error);
    }
  };

  return (
    <div className="w-full p-4">
      <div
        className={`w-5/6 mx-auto px-4 flex flex-row items-center py-2 cursor-pointer ${
          chat && chat.id === selectedChatId ? "border rounded-md" : ""
        }`}
        onClick={handleClick}
      >
        <Image
          src={receiver.photoURL!}
          width={40}
          height={40}
          className="rounded-full"
          alt={receiver.displayName!}
        />
        <div className="ml-4">
          <p>{receiver.displayName}</p>
        </div>
      </div>
    </div>
  );
};

export default UserListItem;
