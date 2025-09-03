
export function ExperienceCvCard() {
  return (
    <section className="w-[250px] h-fit flex flex-col">
      <h3 className="font-bold text-xs">Experiência</h3>
      <section className="w-64 h-20 flex flex-col">
        <h4 className="text-sm">Empresa - Cargo</h4>
        <p className="text-xs">Data de início - Data de término</p>
        <p className="text-xs">Descrição breve</p>
      </section>
    </section>
  );
}
