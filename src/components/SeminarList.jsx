import { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import SeminarEdit from './SeminarEdit';

Modal.setAppElement('#root');

const SeminarList = () => {
  const [seminars, setSeminars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedSeminar, setSelectedSeminar] = useState(null);

  const fetchSeminars = async () => {
    try {
      const response = await axios.get('http://localhost:3001/seminars');
      setSeminars(response.data);
      setError(null);
    } catch (err) {
      setError('Ошибка при загрузке семинаров');
      console.error('Ошибка загрузки:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSeminars();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/seminars/${id}`);
      await fetchSeminars();
      setIsDeleteModalOpen(false);
    } catch (err) {
      setError('Ошибка при удалении семинара');
      console.error('Ошибка удаления:', err);
    }
  };

  const handleEdit = async (updatedSeminar) => {
    try {
      await axios.put(`http://localhost:3001/seminars/${updatedSeminar.id}`, updatedSeminar);
      await fetchSeminars();
      setIsEditModalOpen(false);
    } catch (err) {
      setError('Ошибка при обновлении семинара');
      console.error('Ошибка обновления:', err);
    }
  };

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="seminar-list">
      <h2>Список семинаров</h2>
      <div className="seminar__content">
      {seminars.map((seminar) => (
        <div key={seminar.id} className="seminar__item">
          <h3>{seminar.title}</h3>
          <p>{seminar.description}</p>
          <div className="seminar-actions">
            <button
              onClick={() => {
                setSelectedSeminar(seminar);
                setIsEditModalOpen(true);
              }}
            >
              Редактировать
            </button>
            <button
              onClick={() => {
                setSelectedSeminar(seminar);
                setIsDeleteModalOpen(true);
              }}
            >
              Удалить
            </button>
          </div>
        </div>
      ))}
        </div>

      <Modal
        isOpen={isDeleteModalOpen}
        onRequestClose={() => setIsDeleteModalOpen(false)}
        contentLabel="Подтверждение удаления"
      >
        <h3>Подтвердите удаление</h3>
        <p>Вы уверены, что хотите удалить семинар "{selectedSeminar?.title}"?</p>
        <button onClick={() => handleDelete(selectedSeminar.id)}>Да, удалить</button>
        <button onClick={() => setIsDeleteModalOpen(false)}>Отмена</button>
      </Modal>

      <Modal
        isOpen={isEditModalOpen}
        onRequestClose={() => setIsEditModalOpen(false)}
        contentLabel="Редактирование семинара"
      >
        {selectedSeminar && (
          <SeminarEdit
            seminar={selectedSeminar}
            onSave={handleEdit}
            onCancel={() => setIsEditModalOpen(false)}
          />
        )}
      </Modal>
    </div>
  );
};

export default SeminarList;
