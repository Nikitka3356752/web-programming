import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="error-page">
      <h1>Что-то пошло не так!</h1>
      <p>Страница не найдена или произошла ошибка.</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};

export default Error;
