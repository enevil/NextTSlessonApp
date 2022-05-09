import cn from 'classnames';
import css from './ReviewForm.module.css';
import ReviewFormProps from './ReviewForm.props';
import { Rating, Input, Textarea, Button } from '../..';

export const ReviewForm = ({ className, ...rest }: ReviewFormProps) => {
  return (
    <form className={cn(className, css['container'])} {...rest}>
      <div className={css['inputs']}>
        <Input placeholder="Имя" />
        <Input placeholder="Заголовок отзыва" />
      </div>
      <div className={css['rating']}>
        <span>Оценка:</span>
        <Rating rating={0} isEditable={true}></Rating>
      </div>
      <Textarea placeholder="Текст отзыва" className={css['textarea']} />
      <div className={css['panel']}>
        <Button className={css['submit']} type="submit" appearance="primary">
          Отправить
        </Button>
        <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
    </form>
  );
};
