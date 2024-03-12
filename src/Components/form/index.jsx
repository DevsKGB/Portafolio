import { useForm } from "react-hook-form"
import './form.css';

const FormularioComponent = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    <>
    <div className="container-f">
    <h1 className="h1-f">Contact</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <label className="">Name</label>
      <input {...register("firstName")} />

      <label className="space-label" >Surname</label>
      <input {...register("surname")} />

        <label className="space-label">Email</label>
        <input {...register("email", { required: true })} />

        <label className="space-label">Message</label>
        <textarea {...register("message", { required: true })} />
      
      <input type="submit" />
    </form>
    </div>
    </>
  )
}

export default FormularioComponent;