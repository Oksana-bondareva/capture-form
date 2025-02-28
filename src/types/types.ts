export interface Rules {
    budget_from: string;
    budget_to: string;
    deadline_days: string;
    qty_freelancers: string;
    task_id: string;
}

export interface FormProps {
    title: string;
    description: string;
    tags: string[];
    budget_from: string;
    budget_to: string;
    deadline_days: string;
    number_of_reminders: string;
    private_content: string | null;
    is_hard: boolean;
    all_auto_responses: boolean;
    rules: Rules;
}