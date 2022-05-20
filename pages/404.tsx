import { withLayout } from '../layout/MainLayout/MainLayout';

const Error404 = () => {
  return (
    <div style={{ display: 'grid', placeContent: 'center', height: '100%', textAlign: 'center' }}>
      <h1>Ошибка 404</h1>
      <h2 style={{ color: 'var(--gray-dark)' }}>Страница не найдена</h2>
    </div>
  );
};

export default withLayout(Error404);
