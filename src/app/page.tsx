
export default function Home() {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
                <div className="text-center sm:text-left">
                    <h1 className="text-4xl font-bold mb-2">South African AgriTech Startups</h1>
                    <p className="text-lg text-gray-600 dark:text-gray-300">Innovating agriculture through technology</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                    {/* Startup 1 */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2">Aerobotics</h2>
                        <p className="text-sm mb-4">Drone and AI solutions for tree crop analysis and optimization.</p>
                        <a
                            href="https://www.aerobotics.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more →
                        </a>
                    </div>

                    {/* Startup 2 */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2">Khula</h2>
                        <p className="text-sm mb-4">Digital platform connecting small-scale farmers with suppliers and buyers.</p>
                        <a
                            href="https://www.khula.co.za"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more →
                        </a>
                    </div>

                    {/* Startup 3 */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2">Skudu</h2>
                        <p className="text-sm mb-4">Digital marketplace for agricultural inputs and produce.</p>
                        <a
                            href="https://www.skudu.co.za"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more →
                        </a>
                    </div>

                    {/* Startup 4 */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2">SwiftVEE</h2>
                        <p className="text-sm mb-4">Livestock trading platform using technology to create more efficient markets.</p>
                        <a
                            href="https://www.swiftvee.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more →
                        </a>
                    </div>

                    {/* Startup 5 */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2">Livestock Wealth</h2>
                        <p className="text-sm mb-4">Crowdfarming platform allowing investment in cattle and crops.</p>
                        <a
                            href="https://www.livestockwealth.com"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more →
                        </a>
                    </div>

                    {/* Startup 6 */}
                    <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 hover:shadow-lg transition-shadow">
                        <h2 className="text-xl font-bold mb-2">AgriDigital</h2>
                        <p className="text-sm mb-4">Farm management software and precision agriculture solutions.</p>
                        <a
                            href="#"
                            className="text-blue-600 dark:text-blue-400 hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Learn more →
                        </a>
                    </div>
                </div>

                <div className="flex gap-4 items-center flex-col sm:flex-row">
                    <a
                        className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-green-600 text-white gap-2 hover:bg-green-700 font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Discover More Startups
                    </a>
                    <a
                        className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto"
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Join Our Network
                    </a>
                </div>
            </main>
            <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    About
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Events
                </a>
                <a
                    className="flex items-center gap-2 hover:underline hover:underline-offset-4"
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact
                </a>
            </footer>
        </div>
    );
}