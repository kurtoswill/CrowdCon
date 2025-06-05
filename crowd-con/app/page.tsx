// app/page.tsx (or pages/index.tsx if using pages directory)
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-16">
      <div className="text-[#bfc9d1] text-lg mb-2">CrowdCon</div>
      <h1 className="text-white text-4xl font-extrabold mb-4 leading-tight">
        AI-Powered Crowd Awareness<br />for Safer Spaces
      </h1>
      <p className="text-[#bfc9d1] text-lg max-w-xl">
        Powered by YOLO and action recognition models, CrowdCon helps identify overcrowding, fainting, and distress in live environments using webcam feeds and smart alerts.
      </p>
    </main>
  );
}
