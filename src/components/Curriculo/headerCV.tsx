
export function HeaderCV() {
  return (
    <header className="min-h-32 flex items-center justify-between">
      <div className="w-52 min-h-24 flex flex-col">
        <h1 className="text-2xl font-bold">
          {"Nome Exemplo"}
        </h1>
        <h2 className="text-xl">Desenvolvedor</h2>
        <p className="min-h-24 text-xs">
          { "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi fugit rerum est odio ex velit, ut"}
        </p>
      </div>
      <div className="w-35 h-20 flex flex-col text-right text-xs">
        <p>{"email@example.com"}</p>
        <p>{"(00) 0 0000-0000"}</p>
        <p>{"linkedin/in/exemplo"}</p>
      </div>
    </header>
  );
}