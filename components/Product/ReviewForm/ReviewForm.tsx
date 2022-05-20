import cn from 'classnames';
import axios from 'axios';
import { useState } from 'react';
import ReviewFormProps from './ReviewForm.props';
import css from './ReviewForm.module.css';
import CrossIcon from './cross.svg';
import { Controller, useForm } from 'react-hook-form';
import { ReviewFormData } from './ReviewForm.inerface';
import { API } from '../../../helpers/api';
import { Rating, Input, Textarea, Button, PTag } from '../..';

export const ReviewForm = ({ productId, className, ...rest }: ReviewFormProps) => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm<ReviewFormData>();

  const [requestError, setRequestError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const closeRequestNotify = () => {
    setRequestError('');
    setIsSuccess(false);
  };

  const onSubmit = async (formData: ReviewFormData) => {
    try {
      const { status } = await axios.post(API.review.createDemo, { productId, ...formData });
      if (status === 201) {
        setIsSuccess(true);
        reset();
        return;
      }
      console.log(status);
      setRequestError('Что-то пошло не так');
    } catch (error) {
      console.log(error);
      setRequestError('Что-то пошло не так');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn(className, css['container'])} {...rest}>
      <div className={css['inputs']}>
        <Input
          className={css['input']}
          placeholder="Имя"
          {...register('name', { required: true })}
          error={errors.name}
        />
        <Input
          className={css['input']}
          placeholder="Заголовок отзыва"
          {...register('title', { required: true })}
          error={errors.title}
        />
      </div>
      <div className={css['rating']}>
        <span>Оценка:</span>
        <Controller
          control={control}
          name="rating"
          rules={{ required: true }}
          render={({ field }) => (
            <Rating rating={field.value} isEditable setRating={field.onChange} error={errors.rating} />
          )}
        />
      </div>
      <Textarea
        {...register('description', { required: true })}
        placeholder="Текст отзыва"
        className={css['textarea']}
        error={errors.description}
        aria-label="Текст отзыва"
      />
      <div className={css['panel']}>
        <Button className={css['submit']} type="submit" appearance="primary" onClick={() => clearErrors()}>
          Отправить
        </Button>
        <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
      </div>
      <div className={cn(css['response'], { [css['error']]: !!requestError, [css['success']]: isSuccess })}>
        <PTag role={'alert'}>
          {isSuccess
            ? 'Ваш отзыв успешно отправлен. Он будет опубликован, после того, как пройдет модерацию'
            : requestError}
        </PTag>
        <button className={css['cross']} type="button" onClick={closeRequestNotify} aria-label="Скрыть оповещение">
          <CrossIcon />
        </button>
      </div>
    </form>
  );
};
