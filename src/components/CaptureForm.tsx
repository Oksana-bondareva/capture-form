'use client'

import { FormProps, Rules } from "@/types/types";
import { ChangeEvent, FormEvent, useState } from "react";

const CaptureForm = () => {
    const [token, setToken] = useState<string>('');
    const [task, setTask] = useState<FormProps>({
        title: '',
        description: '',
        tags: [],
        budget_from: '',
        budget_to: '',
        deadline_days: '',
        number_of_reminders: '',
        private_content: null,
        is_hard: false,
        all_auto_responses: false,
        rules: {
            budget_from: '',
            budget_to: '',
            deadline_days: '',
            qty_freelancers: '',
            task_id: '',
        },
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const isCheckbox = (e.target as HTMLInputElement).type === 'checkbox';
        const checked = (e.target as HTMLInputElement).checked;
    
        if (name === 'token') {
            setToken(value);
            if (typeof window !== 'undefined') {
                localStorage.setItem('token', value);
            }
        } else if (name.startsWith('rules.')) {
            const ruleField = name.split('.')[1] as keyof Rules;
            setTask((prev) => ({
                ...prev,
                rules: {
                ...prev.rules,
                [ruleField]: value,
                },
            }));
        } else if (name === 'tags') {
            const tagsArray = value.split(',').map((tag) => tag.trim());
            setTask((prev) => ({
                ...prev,
                [name]: tagsArray,
            }));
        } else {
            setTask((prev) => ({
                ...prev,
                [name]: isCheckbox ? checked : value,
            }));
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
    
        const response = await fetch(
            `https://deadlinetaskbot.productlove.ru/api/v1/tasks/client/newhardtask`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    ...task,
                    tags: JSON.stringify(task.tags),
                    rules: JSON.stringify(task.rules),
                }),
            }
        );
    
        if (response.ok) {
            alert('Задача успешно опубликована');
        } else {
            const errorData = await response.json();
            alert(`Ошибка при публикации задачи: ${JSON.stringify(errorData) || response.statusText}`);
        }
    };

    return (
        <div className="flex justify-center">
            <form onSubmit={handleSubmit} className="w-full md:w-1/2 lg:w-1/3 space-y-4 p-8 border border-gray-300 rounded">
                <h3 className="font-bold text-2xl">Введите задачу:</h3>
                <input
                    type="text"
                    name="title"
                    placeholder="Название задачи"
                    className="w-full p-2 border rounded"
                    value={task.title}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="description"
                    placeholder="Описание задачи"
                    className="w-full p-2 border rounded"
                    value={task.description}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="token"
                    placeholder="Введите ваш токен"
                    className="w-full p-2 border rounded"
                    value={token}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Теги (через запятую)"
                    className="w-full p-2 border rounded"
                    value={task.tags.join(', ')}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="budget_from"
                    placeholder="Бюджет от"
                    className="w-full p-2 border rounded"
                    value={task.budget_from}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="budget_to"
                    placeholder="Бюджет до"
                    className="w-full p-2 border rounded"
                    value={task.budget_to}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="deadline_days"
                    placeholder="Срок выполнения (дни)"
                    className="w-full p-2 border rounded"
                    value={task.deadline_days}
                    onChange={handleChange}
                />
                <input
                    type="number"
                    name="number_of_reminders"
                    placeholder="Количество напоминаний"
                    className="w-full p-2 border rounded"
                    value={task.number_of_reminders}
                    onChange={handleChange}
                />
                <textarea
                    name="private_content"
                    placeholder="Приватный контент"
                    className="w-full p-2 border rounded"
                    value={task.private_content || ''}
                    onChange={handleChange}
                />
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="all_auto_responses"
                        className="mr-2"
                        checked={task.all_auto_responses}
                        onChange={handleChange}
                    />
                    Автоответы
                </label>
                <label className="flex items-center">
                    <input
                        type="checkbox"
                        name="is_hard"
                        className="mr-2"
                        checked={task.is_hard}
                        onChange={handleChange}
                    />
                    Сложная задача
                </label>
                <div className="space-y-2">
                    <h3 className="font-bold">Правила:</h3>
                    <input
                        type="number"
                        name="rules.budget_from"
                        placeholder="Бюджет от (правила)"
                        className="w-full p-2 border rounded"
                        value={task.rules.budget_from}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="rules.budget_to"
                        placeholder="Бюджет до (правила)"
                        className="w-full p-2 border rounded"
                        value={task.rules.budget_to}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="rules.deadline_days"
                        placeholder="Срок выполнения (правила)"
                        className="w-full p-2 border rounded"
                        value={task.rules.deadline_days}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="rules.qty_freelancers"
                        placeholder="Количество фрилансеров"
                        className="w-full p-2 border rounded"
                        value={task.rules.qty_freelancers}
                        onChange={handleChange}
                    />
                    <input
                        type="number"
                        name="rules.task_id"
                        placeholder="id задачи (правила)"
                        className="w-full p-2 border rounded"
                        value={task.rules.task_id}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
                    Опубликовать задачу
                </button>
            </form>
        </div>
    )
}

export default CaptureForm;