import { useRef } from "react";

interface Props {
  onSubmit: (value?: string) => void;
}
export default function UserForm({ onSubmit }: Props) {
  const firtstName = useRef<HTMLInputElement>(null);
  const LaststName = useRef<HTMLInputElement>(null);
  const TypeUser = useRef<HTMLInputElement>(null);

  return (
    <>
      <form>
        <input ref={firtstName} type="text" id="firstName" />
        <input ref={LaststName} type="text" id="lastName" />
        <input ref={TypeUser} type="text" id="age" />
        <select name="typeUser" id="typeUser">
          {/* type medewerker */}
        </select>
        <button
          onClick={() => onSubmit(firtstName.current?.value)}
          type="submit"
        >
          Registreer
        </button>
      </form>
    </>
  );
}
