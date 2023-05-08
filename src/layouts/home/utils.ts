import { ChatBriefViewResponse } from '@api/index';

export const chats: ChatBriefViewResponse[] = [
  {
    id: 'chat001',
    chatName: undefined,
    type: 'Private',
    participants: [
      {
        id: 'user001',
        chatId: 'chat001',
        username: 'user1',
        fullname: 'John Doe',
        role: 'Participant',
        joined: new Date('2023-05-01T12:00:00Z'),
      },
      {
        id: 'user002',
        chatId: 'chat001',
        username: 'user2',
        fullname: 'Jane Smith',
        role: 'Participant',
        joined: new Date('2023-05-01T12:05:00Z'),
      },
    ],
    lastMessage: {
      id: 'msg001',
      authorUserName: 'user1',
      authorFullName: 'John Doe',
      content: 'Hello Jane, how are you?',
      timestamp: new Date(),
    },
  },
  {
    id: 'chat002',
    chatName: 'Private Chat 2',
    type: 'Private',
    participants: [
      {
        id: 'user001',
        chatId: 'chat002',
        username: 'user1',
        fullname: 'John Doe',
        role: 'Participant',
        joined: new Date('2023-05-02T12:00:00Z'),
      },
      {
        id: 'user003',
        chatId: 'chat002',
        username: 'user3',
        fullname: 'Bob Johnson',
        role: 'Participant',
        joined: new Date('2023-05-02T12:05:00Z'),
      },
    ],
    lastMessage: {
      id: 'msg002',
      authorUserName: 'user3',
      authorFullName: 'Bob Johnson',
      content: "Hey John, what's up?",
      timestamp: new Date('2023-05-02T12:10:00Z'),
    },
  },
];
