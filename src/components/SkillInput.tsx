import minusIcon from "../assets/minus.png";
import "../styles/SkillInput.css";

type SkillInputProps = {
  id: number;
  onRemove: (id: number) => void;
};

export default function SkillInput({ id, onRemove }: SkillInputProps) {
  return (
    <div className="skillInput">
      <input type="text" name="userName" placeholder="e.g. English" />
      <form>
        <select id={`skillLevel-${id}`} name="skillLevel">
          <option value="advanced">Advanced</option>
          <option value="intermediary">Intermediary</option>
          <option value="beginner">Beginner</option>
        </select>
      </form>
      <img
        className="minusIcon"
        src={minusIcon}
        alt="Delete"
        onClick={() => onRemove(id)}
      />
    </div>
  );
}