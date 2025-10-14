// Ex7 — Dashboard simples com Grid (2 pontos)

// Considerando o layout abaixo, estilize com Tailwind:

// - O cabeçalho ocupa largura total (com título e botão “Logout” alinhados em extremidades).
// - O conteúdo é dividido em 2 colunas no desktop e 1 coluna no mobile.
// - Cada card deve ter borda, sombra e padding

export default function Ex7() {
  return (
    <div className="my-8">
        <h1 className="text-2xl font-bold mb-4">Ex7 - Dashboard Simples</h1>
      <header className="flex justify-between p-2">
        <h1>Meu Dashboard</h1>
        <button>Sair</button>
      </header>
      <main className="flex grid">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <h3 className="font-bold mb-3 text-gray-800">
            Card 1
          </h3>
        </div>

        <div className=""> 
          <div className="card">
          <h3 className="font-bold mb-3 text-gray-800">
            Card 2 

          </h3>
          </div>
          </div>
        <div>Card 3</div>
        <div>Card 4</div>
      </div>
      </main>
    </div>
  );
}
