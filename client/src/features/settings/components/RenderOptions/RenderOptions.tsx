// ——— Imports —————————————————————————————————————————————————————————————————————————————————————
import { RenderOption } from "./RenderOption";
import "./RenderOptions.scss";

export const RenderOptions = () => {
  return (
    <div className="sidebar__render-options">
      <RenderOption option="all"/>
      <RenderOption option="archived"/>
    </div>
  );
};
