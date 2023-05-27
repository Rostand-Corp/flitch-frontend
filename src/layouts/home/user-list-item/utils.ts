import { ChatUserBriefResponse } from '@api/lib';

export const avatarStyles = 'mr-2.5 w-10 h-10 min-w-10 min-h-10';

export const getUsersString = (
  users: ChatUserBriefResponse[] | null | undefined,
  exceptionId?: string,
): string | null | undefined =>
  users &&
  users
    .flatMap((user) => (user.id === exceptionId ? [] : user.username))
    .join(', ');
