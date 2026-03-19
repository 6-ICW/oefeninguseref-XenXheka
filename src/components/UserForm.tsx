export default function UserForm() {
  return (
    <>
      <form>
        <input type="text" id="firstName" />
        <input type="text" id="lastName" />
        <input type="text" id="age" />
        <select name="typeUser" id="typeUser">
          {/* type medewerker */}
        </select>
        <button type="submit">Registreer</button>
      </form>
    </>
  );
}
