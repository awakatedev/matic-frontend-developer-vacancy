import { useNavigate } from "react-router-dom";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import useSeo from '../hooks/useSeo';
import LabelElement from '../components/LabelElement';
import InputTextElement from '../components/InputTextElement';
import TextAreaElement from '../components/TextAreaElement';
import '../assets/styles/pages/blog.scss';
import '../assets/styles/components/modalComponent.scss';

const schema = yup.object().shape({
  authorUpdate: yup.string().required().min(10),
  titleUpdate: yup.string().required().min(10),
  postUpdate: yup.string().required().min(20),
});

const EditPost = () => {
  useSeo({
    title: 'Edit',
    description:
      'Jhoanthan Hartswing Saldarriaga Gallango. Web-Developer and crypto enthusiastic',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  });
 
  const navigate = useNavigate()

  const onSubmit = async (data) => {
    try {
       await fetch(
        `${process.env.REACT_APP_BASE_URL}/articles/${localStorage.getItem(
          'id',
        )}`,
        {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',

          },
          
          body: JSON.stringify({
            author: `${data.authorUpdate}`,
            title: `${data.titleUpdate}`,
            content: `${data.postUpdate}`,
          }),
        },
      );
    } catch (err) {
      throw new Error(err);
    }
    navigate(-1)
  };

  return (
    <main className="container">
        <div className='editCover'></div>
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
              className="editSize"
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
                    navigate(-1)
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
    </main>
  );
};

export default EditPost;
