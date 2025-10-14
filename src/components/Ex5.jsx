// Ex5 — Navbar responsiva

// Crie uma barra de navegação horizontal com 3 links.

// - Em telas grandes, os links devem aparecer em linha.
// - Em telas pequenas, os links devem aparecer empilhados.

export default function Ex5() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex5 - Navbar Responsiva</h1>
      <ul  className="flex flex-col md:flex-row items-center gap-4 md:gap-8 ">
        <li><a href="#">Home</a></li>
        <li><a href="#">Contatos</a></li>
        <li><a href="#">Sobre</a></li>
      </ul>
    </div>
  );
}