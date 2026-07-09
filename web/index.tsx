import { registerWidget, type WidgetContext } from "@togo-framework/widget";

export function Now({ settings }: WidgetContext) {
  const job = (settings.job as string) ?? "Senior Tech Lead";
  const playing = (settings.playing as string) ?? "";
  return (
    <div className="wx-now" style={{ display: "grid", gap: 6 }}>
      <div>Working as <b>{job}</b></div>
      {playing ? <div>Playing <b>{playing}</b></div> : null}
    </div>
  );
}
registerWidget({ key: "now", title: "Now", defaultZone: "sidebar", defaultSettings: { job: "Senior Tech Lead" }, Comp: Now });
