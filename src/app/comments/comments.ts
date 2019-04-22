export class Comments {
    commentsItems: SingleComment[];
}

export class SingleComment {
    postId: number;
    id?: number;
    name: string;
    email: string;
    body: string;
}
