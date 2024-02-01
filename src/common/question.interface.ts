export interface question {
    id: number,
    name: string,
    created_at: Date,
    content: string,
    level: number,
    answers: answer[]
}
interface answer {
    id: number,
    is_answer: boolean,
    content: string,
    created_at: Date,
    questionId: number
}