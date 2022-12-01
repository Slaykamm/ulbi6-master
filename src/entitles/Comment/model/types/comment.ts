import { User } from 'entitles/User';

export interface Comment {
    id: string;
    user: User;
    text: string;
}
