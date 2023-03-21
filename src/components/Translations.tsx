import { Areas } from "./Areas";
import { LanguagesList } from "./LanguagesList";

export default function Translations() {
  return (
    <div className="section-block replicable-content">
      <div className="row flex">
        <div className="column width-6">
          <LanguagesList />
        </div>
        <div className="column width-4">
          <Areas />
        </div>
      </div>
    </div>
  );
}
