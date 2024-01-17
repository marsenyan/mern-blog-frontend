import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Grid from '@mui/material/Grid';

import { Post } from '../components/Post';
import { TagsBlock } from '../components/TagsBlock';
import { CommentsBlock } from '../components/CommentsBlock';

export const Home = () => {
  return (
    <>
      <Tabs style={{ marginBottom: 15 }} value={0} aria-label="basic tabs example">
        <Tab label="New" />
        <Tab label="Popular" />
      </Tabs>
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {[...Array(5)].map(() => (
            <Post
              id={1}
              title=""
              imageUrl="https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1"
              user={{
                avatarUrl:
                  "https://i0.wp.com/plopdo.com/wp-content/uploads/2021/07/Screenshot-1.png?resize=1210%2C642&ssl=1",
                fullName: 'Keff',
              }}
              createdAt={'12 may 2023'}
              viewsCount={150}
              commentsCount={3}
              tags={['react', 'fun', 'typescript']}
              isEditable
            />
          ))}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={['react', 'typescript', 'redux']} isLoading={false} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'John Long',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg',
                },
                text: 'This is a test comment',
              },
              {
                user: {
                  fullName: 'Jeremy  Smith',
                  avatarUrl: 'https://mui.com/static/images/avatar/2.jpg',
                },
                text: 'The best way to become a frontend developer is to learn everything you can about HTML, CSS, JavaScript, and related skills.',
              },
            ]}
            isLoading={false}
          />
        </Grid>
      </Grid>
    </>
  );
};
