export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#0F1C22]">
      <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-[#B3CDE0] opacity-75 blur-[250px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-[#B3CDE0] opacity-75 blur-[250px]" />
    </div>
  );
}
