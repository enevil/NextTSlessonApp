import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, HTag, Input, PTag, Rating, Tag } from '../components';
import { withLayout } from '../layout/MainLayout/MainLayout';
import axios from 'axios';
import { MenuItem } from '../interfaces/menu.interface';
import { TopLevelCategory } from '../interfaces/page.interface';
import { Textarea } from '../components/Textarea/Textarea';

const Home = () => {
  const [rating, setRating] = useState<number>(2);

  return (
    <div>
      <HTag tag="h1">Text</HTag>
      <Button appearance="ghost" arrow="down">
        Aboba
      </Button>
      <Button appearance="primary" arrow="down">
        Abobaxx
      </Button>
      <PTag size="s">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque minima tempora voluptatum ab suscipit, a
        consequuntur iure commodi porro similique numquam omnis, ea repudiandae beatae quis quam error quae officia!
        Velit harum, quidem numquam officiis cumque voluptatibus in minima quae enim porro asperiores doloremque maxime
        eius beatae amet eos temporibus! Adipisci iure reprehenderit reiciendis, quo ad a ab laborum quidem!
        Accusantium, quam! Ducimus totam eaque excepturi sint autem accusamus ab odio officiis quia asperiores optio,
        voluptas enim ullam dolores assumenda necessitatibus earum accusantium dolor nemo natus mollitia vero?
        Excepturi, doloribus. Dolor error ullam nisi non culpa, quis ipsam voluptatibus consequatur dolore reprehenderit
        fugiat inventore suscipit aut rem vel dolorum optio reiciendis odit. Deserunt labore omnis magni, repudiandae
        excepturi numquam nisi.
      </PTag>
      <Tag color="primary" href="https://hh.ru/">
        hh.ru
      </Tag>
      <Rating rating={rating} setRating={setRating} isEditable></Rating>
      <Rating rating={2}></Rating>
      <Input placeholder="ioi" />
      <Textarea placeholder="ioi" />
    </div>
  );
};

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_ENV_DOMAIN + '/api/top-page/find', {
    firstCategory,
  });
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
}
