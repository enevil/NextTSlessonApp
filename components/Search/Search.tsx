import cn from 'classnames';
import css from './Search.module.css';
import SearchProps from './Search.props';
import { Input } from '../Input/Input';
import { Button } from '../Button/Button';
import LoupeIcon from './loupe.svg';
import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';

export const Search = ({ className, ...rest }: SearchProps) => {
  const [search, setSearch] = useState('');
  const router = useRouter();
  const executeSearch = useCallback(() => {
    if (search) router.push({ pathname: '/search', query: { q: search } });
  }, [search]);

  return (
    <div className={cn(className, css.container)} {...rest}>
      <Input
        value={search}
        onChange={(e) => setSearch(e.currentTarget.value)}
        className={css.input}
        placeholder="Поиск..."
        onKeyDown={(e) => {
          if (e.key === 'Enter') executeSearch();
        }}
        aria-label="Поиск по сайту"
      />
      <Button onClick={executeSearch} className={css.button} appearance="primary" aria-label="Поиск по сайту">
        <LoupeIcon />
      </Button>
    </div>
  );
};
