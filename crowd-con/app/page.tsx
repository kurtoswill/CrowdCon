export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen text-center px-16 py-12">
      {/* Top Section */}
      <div className="text-[#bfc9d1] text-lg mb-2">CrowdCon</div>
      <h1 className="text-white text-4xl font-extrabold mb-4 leading-tight">
        AI-Powered Crowd Awareness<br />for Safer Spaces
      </h1>
      <p className="text-[#bfc9d1] text-lg max-w-xl mb-8">
        Powered by YOLO and action recognition models, CrowdCon helps identify overcrowding, fainting, and distress in live environments using webcam feeds and smart alerts.
      </p>
      <div className="flex gap-4 mb-24"> {/* Increased mb from 16 to 24 */}
        <button className="bg-white text-black px-6 py-2 rounded-md font-medium hover:bg-opacity-90 transition">
          Get Started
        </button>
        <button className="bg-transparent border border-[#bfc9d1] text-[#bfc9d1] px-6 py-2 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
          Learn More
        </button>
      </div>


      {/* Features Section */}
      <section className="w-full max-w-4xl mb-20">
        <h2 className="text-white text-3xl font-bold mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h3 className="text-white text-xl font-semibold mb-2">Overcrowding Detection</h3>
            <p className="text-[#bfc9d1]">Detect when a space becomes too compact or uncomfortable.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h3 className="text-white text-xl font-semibold mb-2">Multi-Cam Crowd Monitoring</h3>
            <p className="text-[#bfc9d1]">Monitor multiple areas using wall-mounted or portable webcams.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h3 className="text-white text-xl font-semibold mb-2">Incident History Tracking</h3>
            <p className="text-[#bfc9d1]">View a timeline of past alerts, detections, and crowd conditions.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h3 className="text-white text-xl font-semibold mb-2">Responder Alert System</h3>
            <p className="text-[#bfc9d1]">Automatically notify security or medical teams when incidents occur.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h3 className="text-white text-xl font-semibold mb-2">Violence & Disaster Alerts</h3>
            <p className="text-[#bfc9d1]">Spot emergencies like fights, fires, or crashes in real-time.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <h3 className="text-white text-xl font-semibold mb-2">Fainting & Fall Detection</h3>
            <p className="text-[#bfc9d1]">Identify individuals who collapse or show signs of distress.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="w-full max-w-4xl mb-20">
        <h2 className="text-white text-3xl font-bold mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">1</div>
            <h3 className="text-white text-xl font-semibold mb-2">Set Up Cameras</h3>
            <p className="text-[#bfc9d1]">Connect your webcams or security cameras to the system.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">2</div>
            <h3 className="text-white text-xl font-semibold mb-2">Live Video Feed</h3>
            <p className="text-[#bfc9d1]">Camera streams provide real-time visuals to the system.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">3</div>
            <h3 className="text-white text-xl font-semibold mb-2">AI Detection</h3>
            <p className="text-[#bfc9d1]">YOLO and action recognition models analyze crowd activity.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">4</div>
            <h3 className="text-white text-xl font-semibold mb-2">Event Triggering</h3>
            <p className="text-[#bfc9d1]">System detects scenarios like crowding, fights, or falls.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">5</div>
            <h3 className="text-white text-xl font-semibold mb-2">Automated Alerts</h3>
            <p className="text-[#bfc9d1]">Security and medical teams receive instant notifications.</p>
          </div>
          <div className="bg-[#1e293b] p-6 rounded-lg">
            <div className="text-white text-2xl font-bold mb-2">6</div>
            <h3 className="text-white text-xl font-semibold mb-2">Incident Logging</h3>
            <p className="text-[#bfc9d1]">All detections are saved for review in incident history.</p>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-white text-3xl font-bold mb-6">Team</h2>
        <p className="text-[#bfc9d1] text-lg max-w-2xl mb-12">
          Meet the Minds Behind CrowdCon: A Team of Builders, Thinkers, and First-Response Advocates
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200x200/1e293b/bfc9d1?text=Theo" 
              alt="Theo John Velasquez"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white text-xl font-medium">Theo John Velasquez</h3>
          </div>
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200x200/1e293b/bfc9d1?text=Kurt" 
              alt="Kurt Covilli McCraver"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white text-xl font-medium">Kurt Covilli McCraver</h3>
          </div>
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200x200/1e293b/bfc9d1?text=Neo" 
              alt="Neo Brand Cabiero"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white text-xl font-medium">Neo Brand Cabiero</h3>
          </div>
          <div className="text-center">
            <img 
              src="https://via.placeholder.com/200x200/1e293b/bfc9d1?text=Jacquira" 
              alt="Jacquira Dangabang"
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="text-white text-xl font-medium">Jacquira Dangabang</h3>
          </div>
        </div>
      </section>
      {/* Footer/Call to Action Section */}
      <section className="w-screen mt-12 bg-black/70 py-16 pb-0 -mx-4 sm:-mx-6 lg:-mx-8 -mb-8">

        <div className="max-w-4xl mx-auto px-4 pb-16">

          <h2 className="text-white text-3xl font-bold mb-6 text-center">Ready to Make Every Crowd Safer?</h2>

          <p className="text-[#bfc9d1] text-lg max-w-2xl mx-auto mb-8 text-center">
            Start using CrowdCon to detect risks early, respond faster, and make every space safer—whether it's a school, event, or public center.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-white text-black px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition">
              See in Action
            </button>
          </div>

        </div>

      </section>
    </main>
  );
}