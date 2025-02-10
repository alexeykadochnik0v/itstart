import { useState } from 'react';

const SeminarEdit = ({ seminar, onSave, onCancel }) => {
  // Инициализируем состояние формы данными текущего семинара
  const [formData, setFormData] = useState({
    id: seminar.id,
    title: seminar.title,
    description: seminar.description,
  });

  // Обработчик изменения полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработчик отправки формы
  const handleSubmit = (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение формы
    onSave(formData); // Передаем обновленные данные в родительский компонент
  };

  return (
    <form onSubmit={handleSubmit} className="seminar-edit-form">
      <h3>Редактирование семинара</h3>
      
      {/* Поле для редактирования названия */}
      <div className="form-group">
        <label htmlFor="title">Название:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />
      </div>

      {/* Поле для редактирования описания */}
      <div className="form-group">
        <label htmlFor="description">Описание:</label>
        <textarea
          id="description"
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
      </div>

      {/* Кнопки управления формой */}
      <div className="form-actions">
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </div>
    </form>
  );
};

export default SeminarEdit;
