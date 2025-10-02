export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white">
            <h1 className="text-5xl font-bold">Hi 👋 I'm JayT</h1>
            <p className="mt-4 text-lg">Front-End Developer | React | Next.js</p>
            <div className="mt-6 flex gap-4">
                <a href="#projects" className="px-4 py-2 bg-blue-500 rounded-lg">Projects</a>
                <a href="#contact" className="px-4 py-2 bg-green-500 rounded-lg">Contact</a>
            </div>
        </main>
    );
}