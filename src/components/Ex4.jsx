// Ex4 — Card responsivo

// Crie um card com título, texto e botão. O card deve ter largura fixa em telas grandes (24rem) e ocupar `100%` em dispositivos móveis.

export default function Ex4() {
  return (
    <div className=" card bg-amber-200 border-2">
          <h3
            className="font-bold mb-3 text-gray-800"
            style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
          >
            Card 1
          </h3>
          <p className="text-gray-600 mb-4">
            Este é o texto descritivo do card. Responsivo e moderno!
          </p>
          <button className="btn">Saiba mais</button>
        </div>
        
  );
}