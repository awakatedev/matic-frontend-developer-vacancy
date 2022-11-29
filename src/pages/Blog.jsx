import { useEffect, useState } from 'react';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useSeo from '../hooks/useSeo';
import BlogPost from '../components/BlogPost';
import LabelElement from '../components/LabelElement';
import InputTextElement from '../components/InputTextElement';
import TextAreaElement from '../components/TextAreaElement';
import Pagination from '../components/Pagination';
import '../assets/styles/pages/blog.scss';
import '../assets/styles/components/modalComponent.scss';

const schema = yup.object().shape({
  author: yup.string(),
  title: yup.string(),
  post: yup.string(),
  authorUpdate: yup.string(),
  titleUpdate: yup.string(),
  postUpdate: yup.string(),
});

const Blog = () => {
  useSeo({
    title: 'Blog',
    description:
      'This is the Jhonathan Saldarriagas technical-logical test for the front-end developer vacancy at Matic.io.',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });

  const [loading, setLoading] = useState(true);
  const [toRender, setToRender] = useState(false);
  const [deletePost, setDeletePost] = useState(false);
  const [updatePost, setUpdatePost] = useState(false);

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/articles`,
          {
            method: 'get',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const object = await response.json();
        if (response.status === 200) {
          setLoading(false);
          setToRender(object);
        } else {
          setLoading(true);
          setToRender(false);
        }
      } catch (err) {
        throw new Error(err);
      }
    }

    getData();
  }, [loading, deletePost, updatePost]);

  const articles =
    toRender &&
    toRender.data.map((e) => {
      const created = new Date(e.createdAt);
      created.toDateString();

      return (
        <tr key={e.id} className="table__body">
          <td className="table__body__item table__body__item--author">
            {[...e.author, '  ']}
          </td>
          <td className="table__body__item">{[...e.title, '  ']}</td>
          <td className="table__body__item">{[...e.content, '  ']}</td>
          <td className="table__body__item">{`${created}`}</td>
          <td className="table__body__item">
            <button
              type="button"
              onClick={() => {
                setDeletePost(e.id);
              }}
              className="btn--delete"
            >
              Delete
            </button>
          </td>
          <td className="table__body__item">
            <button
              type="button"
              onClick={() => {
                setUpdatePost(e.id);
              }}
              className="btn--edit"
            >
              Edit
            </button>
          </td>
        </tr>
      );
    });

  const onSubmit = async (data) => {
    if (!updatePost) {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/articles`,
          {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              author: `${data.author}`,
              title: `${data.title}`,
              content: `${data.post}`,
            }),
          },
        );
        if (response.status === 201) {
          setLoading(true);
        }
      } catch (err) {
        throw new Error(err);
      }
    } else {
      setUpdatePost(false);
      try {
        const response = await fetch(
          `${process.env.REACT_APP_BASE_URL}/articles/${updatePost}`,
          {
            method: 'patch',
            headers: {
              'Content-Type': 'application/json',
            },
            mode: 'cors',
            body: JSON.stringify({
              author: `${data.author}`,
              title: `${data.title}`,
              content: `${data.post}`,
            }),
          },
        );

        if (response.status === 201) {
          setLoading(true);
          setUpdatePost(false);
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  };

  const deleteItem = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BASE_URL}/articles/${deletePost}`,
        {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      if (response.status === 200) {
        setDeletePost(false);
      }
    } catch (err) {
      throw new Error(err);
    }
  };

  return (
    <main className="container">
      {deletePost !== false && deletePost !== undefined ? (
        <section className="modalComponent">
          <div className="modalComponent--delete">
            <h3>Are you sure you want to delete this post?</h3>
            <div>
              <button
                type="button"
                onClick={() => {
                  setDeletePost(false);
                }}
                className="btn--undo"
              >
                No
              </button>
              <button
                type="button"
                onClick={() => {
                  deleteItem();
                }}
                className="btn--execute"
              >
                Yes
              </button>
            </div>
          </div>
        </section>
      ) : null}

      {updatePost !== false && updatePost !== undefined ? (
        <section className="modalComponent">
          <section className="formContainer">
            <form
              className="formContainer__form"
              onSubmit={handleSubmit(onSubmit)}
            >
              <LabelElement
                forElement="authorUpdate"
                name="Author"
                error={errors.authorUpdate}
                errorMessage="One value is required"
              >
                <InputTextElement
                  type="text"
                  name="authorUpdate"
                  placeholder="Your name"
                  error={errors.authorUpdate}
                  register={register('authorUpdate', { required: true })}
                />
              </LabelElement>

              <LabelElement
                forElement="titleUpdate"
                name="Blog title"
                error={errors.titleUpdate}
                errorMessage="One value is required"
              >
                <InputTextElement
                  type="text"
                  name="titleUpdate"
                  placeholder="Post title"
                  error={errors.titleUpdate}
                  register={register('titleUpdate', { required: true })}
                />
              </LabelElement>

              <LabelElement
                forElement="postUpdate"
                name="Blog content"
                error={errors.postUpdate}
                errorMessage="One value is required"
              >
                <TextAreaElement
                  type="text"
                  name="postUpdate"
                  placeholder="Post content"
                  privateClass="post-content"
                  error={errors.postUpdate}
                  register={register('postUpdate', { required: true })}
                />
              </LabelElement>
              <div>
                <button
                  onClick={() => {
                    setUpdatePost(false);
                  }}
                  type="button"
                  className="btn--undo"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn">
                  Save
                </button>
              </div>
            </form>
          </section>
        </section>
      ) : null}

      <section className="container__hero--blog">
        <div className="blockHeader--blog">
          <div className="blockHeader__data--blog">
            <h1>Add New Blog Article</h1>
            <p>
              Publish a new blog article to feauture in the Easybank homepage.
            </p>
          </div>
        </div>
      </section>

      <section className="formContainer">
        <form className="formContainer__form" onSubmit={handleSubmit(onSubmit)}>
          <LabelElement
            forElement="author"
            name="Author"
            error={errors.author}
            errorMessage="One value is required"
          >
            <InputTextElement
              type="text"
              name="author"
              placeholder="Your name"
              error={errors.author}
              register={register('author', { required: true })}
            />
          </LabelElement>

          <LabelElement
            forElement="title"
            name="Blog title"
            error={errors.title}
            errorMessage="One value is required"
          >
            <InputTextElement
              type="text"
              name="title"
              placeholder="Post title"
              error={errors.title}
              register={register('title', { required: true })}
            />
          </LabelElement>

          <LabelElement
            forElement="post"
            name="Blog content"
            error={errors.post}
            errorMessage="One value is required"
          >
            <TextAreaElement
              type="text"
              name="post"
              placeholder="Post content"
              privateClass="post-content"
              error={errors.post}
              register={register('post', { required: true })}
            />
          </LabelElement>

          <button type="submit" className="btn">
            Save
          </button>
        </form>
      </section>

      <section className="container__postContent">
        <div className="blockHeader__data--blog">
          <h2>Previous Articles</h2>
          <p>Review and edit previous blog post published on the homepage.</p>
        </div>

        <table className="table">
          <tr className="table__head">
            <th className="table__head__item">Author name</th>
            <th className="table__head__item">Title</th>
            <th className="table__head__item">Content</th>
            <th colspan="3" className="table__head__item">
              Date
            </th>
          </tr>
          {articles}
        </table>

        <Pagination />
      </section>
      <BlogPost />
    </main>
  );
};
export default Blog;
