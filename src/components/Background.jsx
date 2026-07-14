export default function Background() {
  return (
    <>
      {/* base gradient wash */}
      <div
        className="fixed inset-0 -z-10"
        style={{
          background:
            "radial-gradient(1200px 600px at 15% -10%, rgba(124,152,133,0.16), transparent 60%), radial-gradient(1000px 500px at 110% 10%, rgba(110,42,56,0.10), transparent 55%), linear-gradient(180deg, #F6F4EE 0%, #F6F4EE 100%)",
        }}
      />
      {/* floating soft blobs */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[420px] h-[420px] rounded-full blur-3xl animate-floatSlow"
          style={{ background: "rgba(124,152,133,0.14)", top: "5%", left: "-8%" }}
        />
        <div
          className="absolute w-[360px] h-[360px] rounded-full blur-3xl animate-floatSlower"
          style={{ background: "rgba(110,42,56,0.08)", top: "35%", right: "-6%" }}
        />
        <div
          className="absolute w-[300px] h-[300px] rounded-full blur-3xl animate-floatSlow"
          style={{ background: "rgba(21,50,65,0.06)", bottom: "0%", left: "20%" }}
        />
      </div>
      {/* paper grain */}
      <div className="grain" />
    </>
  );
}
