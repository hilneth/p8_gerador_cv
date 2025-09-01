import minusIcon from "../assets/minus.png";
import "../styles/ExperienceInput.css";

type ExperienceInputProps = {
  id: number;
  onRemove: (id: number) => void;
};

export default function ExperienceInput({ id, onRemove }: ExperienceInputProps) {
  return (
    <div className="experienceInput" id={`experienceLevel-${id}`}>
      <input type="text" name="userName" placeholder="Company Name" />
      <input type="text" name="period" placeholder="6 months"/>
      <input type="text" name="position" placeholder="position" />
      <input type="text" name="description" placeholder="description"/>
      <img
        className="minusIcon"
        src={minusIcon}
        alt="Delete"
        onClick={() => onRemove(id)}
      />
    </div>
  );
}