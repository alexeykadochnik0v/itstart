import { useState } from 'react';

const SeminarEdit = ({ seminar, onSave, onCancel }) => {
  const [formData, setFormData] = useState({
    id: seminar.id,
    title: seminar.title,
    description: seminar.description,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="seminar-edit-form">
      <h3>Редактирование семинара</h3>
      
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

      <div className="form-actions">
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onCancel}>Отмена</button>
      </div>
    </form>
  );
};

export default SeminarEdit;
