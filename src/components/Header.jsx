import { Buscador } from './Buscador';

export function Header() {
  return (
    <>
      <nav>
        <img src="/src/assets/img/logo.png" alt="" />
        <Buscador/>
      </nav>
    </>
  );
}