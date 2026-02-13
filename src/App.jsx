import { useState } from "react";
import TallyForm from "./TallyForm";

function App() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50">
            {/* Navigation */}
            <nav className="bg-white/80 backdrop-blur-md fixed w-full z-40 border-b border-purple-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                                    NDIS AutoPilot
                                </span>
                            </div>
                        </div>
                        <div className="hidden md:block">
                            <button
                                onClick={openModal}
                                className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                Get Early Access
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Trust Badge */}
                        <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-4 py-2 mb-8">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                            <span className="text-green-700 text-sm font-medium">
                                Trusted by NDIS providers across Australia
                            </span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                            Stop Losing{" "}
                            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
                                $50,000+
                            </span>{" "}
                            to Pen & Paper Process
                        </h1>

                        {/* Subheadline */}
                        <p className="text-xl sm:text-2xl text-gray-600 mb-10 leading-relaxed">
                            AI-powered automation built for NDIS providers, plan
                            managers, and support coordinators. Reduce overhead,
                            eliminate errors, and scale effortlessly.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                            <button
                                onClick={openModal}
                                className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-purple-700 text-white px-10 py-6 rounded-full text-2xl font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1"
                            >
                                Starting Saving
                            </button>
                        </div>

                        {/* Social Proof */}
                        <p className="text-gray-500 text-sm">
                            ✓ Join waiting list of 100+ providers ✓ No credit
                            card required
                        </p>
                    </div>
                </div>
            </section>

            {/* Problem Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Your Team is Burning Time on Tasks AI Can Handle
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Every hour spent on manual processes is an hour not
                            spent growing your business
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Problem Card 1 */}
                        <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">💰</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Lower Operating Costs
                            </h3>
                            <p className="text-gray-600">
                                Reduce administrative overhead by up to 70%
                                while maintaining—or improving—quality and
                                compliance standards
                            </p>
                        </div>

                        {/* Problem Card 2 */}
                        <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                10x Faster Processing
                            </h3>
                            <p className="text-gray-600">
                                Complete tasks in minutes that used to take
                                hours. Claims, reports, documentation—all
                                automated intelligently
                            </p>
                        </div>

                        {/* Problem Card 3 */}
                        <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">📈</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Scale Without Hiring
                            </h3>
                            <p className="text-gray-600">
                                Grow your participant base and revenue without
                                proportionally increasing your team size or
                                workload
                            </p>
                        </div>

                        {/* Problem Card 4 */}
                        <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100 hover:shadow-xl transition-shadow duration-300">
                            <div className="text-4xl mb-4">🎯</div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                Zero Human Error
                            </h3>
                            <p className="text-gray-600">
                                AI-powered validation ensures accuracy across
                                claims, compliance, and documentation—every
                                single time
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Solution Section */}
            <section className="py-20 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
                            Automation That Works While You Sleep
                        </h2>
                        <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                            Focus on delivering exceptional care while AI
                            handles everything else—compliance, claims,
                            documentation, and reporting
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-12">
                        {/* Feature 1 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">🤖</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                                Intelligent Automation
                            </h3>
                            <p className="text-purple-100">
                                AI that learns your workflows and automates
                                repetitive tasks—from data entry to report
                                generation and everything in between
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">✓</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                                Built-In Compliance
                            </h3>
                            <p className="text-purple-100">
                                Stay audit-ready 24/7 with automated compliance
                                tracking, documentation, and real-time alerts
                                for potential issues
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300">
                            <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center mb-4">
                                <span className="text-2xl">📊</span>
                            </div>
                            <h3 className="text-2xl font-bold mb-3">
                                Real-Time Insights
                            </h3>
                            <p className="text-purple-100">
                                Make data-driven decisions with dashboards that
                                surface trends, opportunities, and potential
                                risks before they become problems
                            </p>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={openModal}
                            className="bg-white text-purple-700 px-10 py-5 rounded-full text-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 transform hover:-translate-y-1"
                        >
                            Transform Your Operations →
                        </button>
                    </div>
                </div>
            </section>

            {/* Social Proof / Benefits Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                            Purpose-Built for Every NDIS Stakeholder
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Whether you manage plans, deliver services, or
                            coordinate support—automation tailored to your
                            unique challenges
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-bold">
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            NDIS Providers
                                        </h3>
                                        <p className="text-gray-600">
                                            Streamline operations, reduce admin
                                            burden, and improve service delivery
                                            with automated workflows and
                                            real-time visibility
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-bold">
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Plan Managers
                                        </h3>
                                        <p className="text-gray-600">
                                            Process more plans with fewer
                                            errors, faster turnaround times, and
                                            complete financial transparency for
                                            participants
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-bold">
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Support Coordinators
                                        </h3>
                                        <p className="text-gray-600">
                                            Manage larger caseloads effectively
                                            with automated tracking, reporting,
                                            and proactive insights on
                                            participant progress
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                                        <span className="text-green-600 font-bold">
                                            ✓
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                                            Support Businesses
                                        </h3>
                                        <p className="text-gray-600">
                                            Scale operations profitably without
                                            proportional increases in overhead,
                                            staff, or complexity
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-gradient-to-br from-purple-100 to-white p-10 rounded-3xl border-2 border-purple-200 shadow-xl">
                            <div className="text-center mb-6">
                                <div className="text-5xl font-bold text-purple-600 mb-2">
                                    70%
                                </div>
                                <p className="text-gray-600 text-lg">
                                    Reduction in administrative overhead
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex justify-between items-center pb-3 border-b border-purple-100">
                                    <span className="text-gray-700">
                                        Time savings
                                    </span>
                                    <span className="font-bold text-purple-600">
                                        20+ hrs/week
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-purple-100">
                                    <span className="text-gray-700">
                                        Error reduction
                                    </span>
                                    <span className="font-bold text-green-600">
                                        Up to 95%
                                    </span>
                                </div>
                                <div className="flex justify-between items-center pb-3 border-b border-purple-100">
                                    <span className="text-gray-700">
                                        Processing speed
                                    </span>
                                    <span className="font-bold text-purple-600">
                                        10x faster
                                    </span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-700">
                                        ROI timeline
                                    </span>
                                    <span className="font-bold text-green-600">
                                        First month
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Final CTA Section */}
            <section className="py-24 bg-gradient-to-br from-purple-600 via-purple-700 to-purple-800">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ready to Transform Your Operations?
                    </h2>
                    <p className="text-xl sm:text-2xl text-purple-100 mb-10">
                        Join forward-thinking NDIS businesses already boosting
                        profit margins and reclaiming their time
                    </p>
                    <button
                        onClick={openModal}
                        className="bg-white text-purple-700 px-12 py-5 rounded-full text-xl font-bold hover:bg-purple-50 transition-all duration-300 shadow-2xl hover:shadow-white/30 transform hover:-translate-y-1 mb-6"
                    >
                        Book consultation now
                    </button>
                    <p className="text-purple-200 text-sm">
                        ✓ No credit card required ✓ 5-minute setup ✓ Cancel
                        anytime
                    </p>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-gray-400 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-sm">
                        © 2025 NDIS AutoPilot. Proudly Australian. Built for
                        NDIS providers.
                    </p>
                </div>
            </footer>

            {/* Modal */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    {/* Background overlay - separate element */}
                    <div className="absolute inset-0 bg-black opacity-90"></div>

                    {/* Modal content - full opacity */}
                    <div
                        className="relative z-10 rounded-2xl p-3 bg-[#eff6f9] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <TallyForm />
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
