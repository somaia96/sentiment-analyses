import { Input as Inputs } from "./ui/input"

interface IProps {
  name: string;
  register?: any;
  type?: string;
}

const Input = ({ type, name, register }: IProps) => {
  return (
    <div className="flex items-center justify-between" >
      
      <div className="rounded-md w-full">
        <Inputs
        className=" focus-visible:ring-purple-400"
          {...register(name)}
          id={name}
          name={name}
          type={type}
          placeholder={name}
          autoComplete={name}
        />
      </div>
    </div>
  )
}

export default Input
