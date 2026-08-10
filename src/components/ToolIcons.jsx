import { SiFigma, SiReact, SiFastapi, SiSwift, SiPython, SiQt, SiSqlite } from 'react-icons/si';
import './ToolIcons.css';

const TOOL_ICONS = {
  Figma: SiFigma,
  React: SiReact,
  FastAPI: SiFastapi,
  Swift: SiSwift,
  Python: SiPython,
  PyQt6: SiQt,
  SQLite: SiSqlite,
};

export default function ToolIcons({ tools }) {
  if (!tools?.length) return null;

  return (
    <ul className="tool-icons" aria-label="Tools used" data-no-view-hint>
      {tools.map((name) => {
        const Icon = TOOL_ICONS[name];
        if (!Icon) return null;

        return (
          <li key={name} className="tool-icons__item">
            <Icon className="tool-icons__icon" aria-hidden />
            <span className="tool-icons__tooltip" role="tooltip">
              {name}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
