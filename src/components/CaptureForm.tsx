const CaptureForm = () => {
    return (
        <div className="flex justify-center">
            <form className="w-full md:w-1/2 lg:w-1/3 space-y-4 p-4">
                <input
                    type="text"
                    name="title"
                    placeholder="Название задачи"
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="description"
                    placeholder="Описание задачи"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="text"
                    name="tags"
                    placeholder="Теги (через запятую)"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    name="budget_from"
                    placeholder="Бюджет от"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    name="budget_to"
                    placeholder="Бюджет до"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    name="deadline"
                    placeholder="Срок выполнения (дни)"
                    className="w-full p-2 border rounded"
                />
                <input
                    type="number"
                    name="reminds"
                    placeholder="Количество напоминаний"
                    className="w-full p-2 border rounded"
                />
                <textarea
                    name="private_content"
                    placeholder="Приватный контент"
                    className="w-full p-2 border rounded"
                />
                <label className="flex items-center">
                    <input
                    type="checkbox"
                    name="all_auto_responses"
                    className="mr-2"
                    />
                    Автоответы
                </label>
                <label className="flex items-center">
                    <input
                    type="checkbox"
                    name="is_hard"
                    className="mr-2"
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
                    />
                    <input
                        type="number"
                        name="rules.budget_to"
                        placeholder="Бюджет до (правила)"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="rules.deadline_days"
                        placeholder="Срок выполнения (правила)"
                        className="w-full p-2 border rounded"
                    />
                    <input
                        type="number"
                        name="rules.qty_freelancers"
                        placeholder="Количество фрилансеров"
                        className="w-full p-2 border rounded"
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