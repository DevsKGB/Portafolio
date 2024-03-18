import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';
import './form.css';

const FormularioComponent = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data, e) => {
    emailjs.sendForm('service_ds7cqvd', 'template_pbqp3np', e.target, '09L3gFsG7jDVCH4nU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
      <div className="container-f">
        <h1 className="h1-f">Contact</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>Name</label>
          <input {...register("firstName", { required: true })} />
          {errors.firstName && <p>Your name is required.</p>}

          <label className="space-label">Surname</label>
          <input {...register("surname", { required: true })} />
          {errors.surname && <p>Your surname is required.</p>}

          <label className="space-label">Email</label>
          <input {...register("email", { required: true })} />
          {errors.email && <p>Your email is required.</p>}

          <label className="space-label">Message</label>
          <textarea {...register("message", { required: true })} />
          {errors.message && <p>A message is required.</p>}
          
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default FormularioComponent;
