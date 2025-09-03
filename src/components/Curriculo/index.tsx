import { ExperienceCvCard } from "./experienceCvCard";
import { HeaderCV } from "./headerCV";
import { SkillsCV } from "./skillsCV";

export function Curriculo() {

  return (
    <section className="w-[500px] min-h-[700px] flex flex-col bg-zinc-50 gap-4 p-4">
      <HeaderCV/>
      <SkillsCV />
      <ExperienceCvCard />
    </section>
  );
}
